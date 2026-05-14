import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { supabase } from '../lib/supabase'
import { signOut } from '../lib/supabase'
import { formatDistanceToNow } from '../utils/dateUtils'

export default function Profile() {
  const { user } = useAuth()
  const navigate = useNavigate()
  const [totalCheckIns, setTotalCheckIns] = useState(0)
  const [avgMood, setAvgMood] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!user) return

    const fetchStats = async () => {
      try {
        const { count } = await supabase
          .from('check_ins')
          .select('*', { count: 'exact', head: true })
          .eq('user_id', user.id)

        setTotalCheckIns(count || 0)

        const { data: moods } = await supabase
          .from('mood_entries')
          .select('mood_score')
          .eq('user_id', user.id)

        if (moods && moods.length > 0) {
          const avg = moods.reduce((sum, m) => sum + m.mood_score, 0) / moods.length
          setAvgMood(avg.toFixed(1))
        }
      } catch (err) {
        console.error('Error fetching stats:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchStats()
  }, [user])

  const handleLogout = async () => {
    await signOut()
    navigate('/')
  }

  if (!user) return null

  return (
    <div className="min-h-screen bg-bg pb-20">
      {/* Header */}
      <header className="bg-surface border-b border-border px-4 py-4 flex items-center gap-3">
        <Link to="/dashboard" className="text-text-secondary hover:text-white transition-colors text-2xl">
          ←
        </Link>
        <h1 className="text-xl font-bold">Profile</h1>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-8">
        {/* User Info */}
        <div className="bg-surface rounded-2xl p-6 border border-border mb-6 text-center">
          <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-3xl font-bold mb-4">
            {user.email?.charAt(0).toUpperCase() || 'U'}
          </div>
          <h2 className="text-xl font-bold">{user.email}</h2>
          <p className="text-text-secondary text-sm">Member since {new Date(user.created_at).toLocaleDateString()}</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-surface rounded-2xl p-6 border border-border text-center">
            <p className="text-3xl font-bold text-primary">{totalCheckIns}</p>
            <p className="text-text-secondary text-sm">Total Check-ins</p>
          </div>
          <div className="bg-surface rounded-2xl p-6 border border-border text-center">
            <p className="text-3xl font-bold text-secondary">{avgMood || '-'}</p>
            <p className="text-text-secondary text-sm">Avg Mood Score</p>
          </div>
        </div>

        {/* Menu */}
        <div className="bg-surface rounded-2xl border border-border overflow-hidden">
          <Link
            to="/dashboard"
            className="flex items-center justify-between px-6 py-4 border-b border-border hover:bg-bg transition-colors"
          >
            <span>Dashboard</span>
            <span className="text-text-secondary">→</span>
          </Link>
          <Link
            to="/mood"
            className="flex items-center justify-between px-6 py-4 border-b border-border hover:bg-bg transition-colors"
          >
            <span>Check-in History</span>
            <span className="text-text-secondary">→</span>
          </Link>
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-between px-6 py-4 text-red-400 hover:bg-bg transition-colors"
          >
            <span>Sign Out</span>
            <span>→</span>
          </button>
        </div>
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
          <Link to="/mood" className="flex-1 py-4 flex flex-col items-center text-text-secondary hover:text-white transition-colors">
            <span className="text-2xl">📊</span>
            <span className="text-xs mt-1">Mood</span>
          </Link>
          <Link to="/profile" className="flex-1 py-4 flex flex-col items-center text-primary">
            <span className="text-2xl">👤</span>
            <span className="text-xs mt-1">Profile</span>
          </Link>
        </div>
      </nav>
    </div>
  )
}