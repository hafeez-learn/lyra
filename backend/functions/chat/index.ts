import { serve } from 'https://deno.land/std@0.177.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface Message {
  role: 'user' | 'assistant' | 'system'
  content: string
}

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    const minimaxApiKey = Deno.env.get('MINIMAX_API_KEY')!

    // Get user from Authorization header
    const authHeader = req.headers.get('Authorization')
    if (!authHeader) {
      return new Response(
        JSON.stringify({ error: 'Missing authorization header' }),
        { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey)
    
    // Verify user
    const token = authHeader.replace('Bearer ', '')
    const { data: { user }, error: authError } = await supabase.auth.getUser(token)
    
    if (authError || !user) {
      return new Response(
        JSON.stringify({ error: 'Invalid token' }),
        { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // Parse request body
    const { messages } = await req.json()
    
    if (!messages || !Array.isArray(messages)) {
      return new Response(
        JSON.stringify({ error: 'Invalid messages format' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // Build context for Lyra personality
    const systemPrompt = `You are Lyra, an empathetic and supportive AI wellness companion. You are warm, caring, and genuinely interested in the user's wellbeing. Keep responses concise (under 200 words), use encouraging language, and always be supportive. You're not a therapist but a friendly companion who listens and offers gentle guidance.`

    // Format messages for MiniMax API (Anthropic-compatible)
    const formattedMessages: Message[] = [
      { role: 'system', content: systemPrompt },
      ...messages.slice(-10).map((m: { role: string; content: string }) => ({
        role: m.role === 'assistant' ? 'assistant' : 'user',
        content: m.content
      }))
    ]

    // Call MiniMax API
    const minimaxResponse = await fetch('https://api.minimax.io/anthropic/v1/messages', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${minimaxApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'MiniMax-Text-01',
        messages: formattedMessages,
        max_tokens: 500,
        temperature: 0.8,
      }),
    })

    if (!minimaxResponse.ok) {
      const errorText = await minimaxResponse.text()
      console.error('MiniMax API error:', errorText)
      throw new Error('Failed to get response from AI')
    }

    const aiResponse = await minimaxResponse.json()
    const responseText = aiResponse.content?.[0]?.text || "I'm sorry, I couldn't generate a response. Please try again."

    return new Response(
      JSON.stringify({ response: responseText }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  } catch (error) {
    console.error('Error in chat function:', error)
    return new Response(
      JSON.stringify({ error: 'Internal server error', message: error.message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
})