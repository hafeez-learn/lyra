import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { supabase } from '../lib/supabase'

const MOODS = [
  { score: 1, emoji: '😔', label: 'Bad' },
  { score: 2, emoji: '😟', label: 'Poor' },
  { score: 3, emoji: '😐', label: 'Okay' },
  { score: 4, emoji: '🙂', label: 'Good' },
  { score: 5, emoji: '😊', label: 'Great' },
]

export default function MoodCheckIn() {
  const { user } = useAuth()
  const navigate = useNavigate()
  const [selectedMood, setSelectedMood] = useState(null)
  const [note, setNote] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!selectedMood || !user) return

    setLoading(true)

    try {
      const { error } = await supabase.from('mood_entries').insert([
        {
          user_id: user.id,
          mood_score: selectedMood,
          note: note.trim() || null,
        },
      ])

      if (error) throw error

      // Create check-in record
      await supabase.from('check_ins').insert([
        { user_id: user.id, completed_at: new Date().toISOString() }
      ])

      setSuccess(true)
      
      setTimeout(() => {
        navigate('/dashboard')
      }, 1500)
    } catch (err) {
      console.error('Error saving mood:', err)
      alert('Failed to save mood entry. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-bg pb-20">
      {/* Header */}
      <header className="bg-surface border-b border-border px-4 py-4 flex items-center gap-3">
        <Link to="/dashboard" className="text-text-secondary hover:text-white transition-colors text-2xl">
          ←
        </Link>
        <h1 className="text-xl font-bold">Daily Check-in</h1>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-8">
        {success ? (
          <div className="text-center py-12 animate-fade-in">
            <div className="text-6xl mb-4">✨</div>
            <h2 className="text-2xl font-bold mb-2">Check-in Complete!</h2>
            <p className="text-text-secondary">Your mood has been recorded.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="bg-surface rounded-2xl p-6 border border-border mb-6">
              <h2 className="text-xl font-bold mb-2 text-center">How are you feeling?</h2>
              <p className="text-text-secondary text-center mb-6">Select the emoji that best describes your mood</p>
              
              <div className="flex justify-center gap-4">
                {MOODS.map((mood) => (
                  <button
                    key={mood.score}
                    type="button"
                    onClick={() => setSelectedMood(mood.score)}
                    className={`flex flex-col items-center p-3 rounded-2xl transition-all touch-target ${
                      selectedMood === mood.score
                        ? 'bg-primary/20 border-2 border-primary scale-110'
                        : 'bg-bg border-2 border-transparent hover:border-border'
                    }`}
                  >
                    <span className="text-4xl mb-1">{mood.emoji}</span>
                    <span className="text-xs text-text-secondary">{mood.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-surface rounded-2xl p-6 border border-border mb-6">
              <label className="block text-lg font-semibold mb-3">
                Add a note <span className="text-text-secondary font-normal">(optional)</span>
              </label>
              <textarea
                value={note}
                onChange={(e) => setNote(e.target.value.slice(0, 500))}
                placeholder="What's on your mind? How was your day?"
                rows={4}
                className="w-full bg-bg border border-border rounded-xl px-4 py-3 text-white placeholder-text-secondary focus:border-accent focus:outline-none resize-none"
              />
              <p className="text-text-secondary text-sm mt-2 text-right">{note.length}/500</p>
            </div>

            <button
              type="submit"
              disabled={!selectedMood || loading}
              className="w-full bg-primary py-4 rounded-xl font-semibold text-lg hover:opacity-90 transition-opacity disabled:opacity-50 touch-target"
            >
              {loading ? 'Saving...' : 'Save Check-in'}
            </button>
          </form>
        )}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-surface border-t border-border">
        <div className="max-w-4xl mx-auto flex">
          <Link to="/dashboard" className="flex-1 py-4 flex flex-col items-center text-text-secondary hover:text-white transition-colors">
            <span className="text-2xl">🏠</span>
            <span className="text-xs mt-1">Home</span>
          </Link>
          <Link to="/chat" className="flex-1 py-4 flex flex-col items-center text-text-secondary hover:text-white transition-colors">
            <span className="text-2xl">💬</span>
            <span className="text-xs mt-1">Chat</span>
          </Link>
          <Link to="/mood" className="flex-1 py-4 flex flex-col items-center text-primary">
            <span className="text-2xl">📊</span>
            <span className="text-xs mt-1">Mood</span>
          </Link>
          <Link to="/profile" className="flex-1 py-4 flex flex-col items-center text-text-secondary hover:text-white transition-colors">
            <span className="text-2xl">👤</span>
            <span className="text-xs mt-1">Profile</span>
          </Link>
        </div>
      </nav>
    </div>
  )
}