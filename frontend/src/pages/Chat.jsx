import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { supabase } from '../lib/supabase'

const SUGGESTED_PROMPTS = [
  "How are you feeling today?",
  "I'm feeling a bit anxious",
  "Tell me something positive",
  "I need some motivation",
  "I'm having a rough day"
]

export default function Chat() {
  const { user } = useAuth()
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [loadingHistory, setLoadingHistory] = useState(true)
  const messagesEndRef = useRef(null)

  useEffect(() => {
    if (!user) return

    const fetchMessages = async () => {
      try {
        const { data } = await supabase
          .from('chat_messages')
          .select('*')
          .eq('user_id', user.id)
          .order('created_at', { ascending: true })
        
        if (data) {
          setMessages(data)
        }
      } catch (err) {
        console.error('Error fetching messages:', err)
      } finally {
        setLoadingHistory(false)
      }
    }

    fetchMessages()
  }, [user])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const sendMessage = async (text) => {
    if (!text.trim() || !user) return

    const userMessage = {
      user_id: user.id,
      role: 'user',
      content: text.trim(),
      created_at: new Date().toISOString(),
    }

    // Add user message to UI immediately
    setMessages(prev => [...prev, userMessage])
    setInput('')
    setLoading(true)

    try {
      // Save user message to DB
      await supabase.from('chat_messages').insert([userMessage])

      // Get conversation history for context
      const { data: history } = await supabase
        .from('chat_messages')
        .select('role, content')
        .eq('user_id', user.id)
        .order('created_at', { ascending: true })
        .limit(20)

      // Call Edge Function
      const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify({ messages: history }),
      })

      if (!response.ok) {
        throw new Error('Failed to get response')
      }

      const { response: aiText } = await response.json()

      const aiMessage = {
        user_id: user.id,
        role: 'assistant',
        content: aiText,
        created_at: new Date().toISOString(),
      }

      // Save AI message to DB
      await supabase.from('chat_messages').insert([aiMessage])

      // Add AI message to UI
      setMessages(prev => [...prev, aiMessage])
    } catch (err) {
      console.error('Error sending message:', err)
      const errorMessage = {
        user_id: user.id,
        role: 'assistant',
        content: "I'm sorry, I'm having trouble connecting right now. Please try again in a moment. 💙",
        created_at: new Date().toISOString(),
      }
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    sendMessage(input)
  }

  const handleSuggestedPrompt = (prompt) => {
    sendMessage(prompt)
  }

  return (
    <div className="min-h-screen bg-bg flex flex-col">
      {/* Header */}
      <header className="bg-surface border-b border-border px-4 py-4 flex items-center gap-3">
        <Link to="/dashboard" className="text-text-secondary hover:text-white transition-colors">
          ←
        </Link>
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center font-bold">
          L
        </div>
        <div>
          <h1 className="font-semibold">Lyra</h1>
          <p className="text-text-secondary text-xs">Your AI companion</p>
        </div>
      </header>

      {/* Messages */}
      <main className="flex-1 overflow-y-auto px-4 py-6">
        {loadingHistory ? (
          <div className="flex items-center justify-center h-full">
            <div className="animate-pulse text-primary">Loading...</div>
          </div>
        ) : messages.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">💙</div>
            <h2 className="text-xl font-bold mb-2">Hello! I'm Lyra</h2>
            <p className="text-text-secondary mb-6 max-w-xs mx-auto">
              I'm here to support you. How are you feeling today?
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {SUGGESTED_PROMPTS.slice(0, 3).map((prompt, i) => (
                <button
                  key={i}
                  onClick={() => handleSuggestedPrompt(prompt)}
                  className="px-4 py-2 bg-surface border border-border rounded-full text-sm text-text-secondary hover:text-white hover:border-primary/50 transition-colors"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] px-4 py-3 rounded-2xl ${
                    msg.role === 'user'
                      ? 'bg-primary text-white rounded-tr-none'
                      : 'bg-surface text-white rounded-tl-none'
                  }`}
                >
                  <p className="whitespace-pre-wrap">{msg.content}</p>
                  <p className={`text-xs mt-1 opacity-70`}>
                    {new Date(msg.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-surface px-4 py-3 rounded-2xl rounded-tl-none">
                  <div className="flex gap-1">
                    <span className="animate-bounce text-primary">●</span>
                    <span className="animate-bounce text-primary" style={{ animationDelay: '0.2s' }}>●</span>
                    <span className="animate-bounce text-primary" style={{ animationDelay: '0.4s' }}>●</span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        )}
      </main>

      {/* Suggested Prompts */}
      {messages.length > 0 && !loading && (
        <div className="px-4 py-2 flex gap-2 overflow-x-auto hide-scrollbar">
          {SUGGESTED_PROMPTS.map((prompt, i) => (
            <button
              key={i}
              onClick={() => handleSuggestedPrompt(prompt)}
              className="px-3 py-2 bg-surface border border-border rounded-full text-xs text-text-secondary hover:text-white hover:border-accent transition-colors whitespace-nowrap"
            >
              {prompt}
            </button>
          ))}
        </div>
      )}

      {/* Input */}
      <form onSubmit={handleSubmit} className="p-4 bg-surface border-t border-border">
        <div className="flex gap-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 bg-bg border border-border rounded-full px-5 py-3 text-white placeholder-text-secondary focus:border-accent focus:outline-none"
            disabled={loading}
          />
          <button
            type="submit"
            disabled={!input.trim() || loading}
            className="w-12 h-12 bg-primary rounded-full flex items-center justify-center font-bold hover:opacity-90 transition-opacity disabled:opacity-50 touch-target"
          >
            →
          </button>
        </div>
      </form>
    </div>
  )
}