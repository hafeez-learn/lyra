import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { signOut, getMoodEntries } from '../lib/firebase'
import { formatDistanceToNow } from '../utils/dateUtils'

const MOOD_LABELS = ['', '😔 Bad', '😟 Poor', '😐 Okay', '🙂 Good', '😊 Great']
const MOOD_COLORS = ['', '#ff6b6b', '#ffa06b', '#ffd93d', '#6bcf6b', '#6bffa06b']

export default function Dashboard() {
  const { user } = useAuth()
  const navigate = useNavigate()
  const [streak, setStreak] = useState(0)
  const [lastCheckIn, setLastCheckIn] = useState(null)
  const [recentMoods, setRecentMoods] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!user) return

    const fetchData = async () => {
      try {
        const moods = await getMoodEntries(user.uid, 7)
        if (moods) {
          setRecentMoods(moods)
          
          // Calculate streak
          let currentStreak = 0
          let checkDate = new Date()
          
          const sortedMoods = [...moods].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          
          for (const mood of sortedMoods) {
            const moodDate = new Date(mood.createdAt).toDateString()
            const expectedDate = checkDate.toDateString()
            
            if (moodDate === expectedDate || 
                moodDate === new Date(checkDate.getTime() - 86400000).toDateString()) {
              currentStreak++
              checkDate = new Date(mood.createdAt)
            } else {
              break
            }
          }
          
          setStreak(currentStreak)
          
          if (moods.length > 0) {
            setLastCheckIn(moods[0].createdAt)
          }
        }
      } catch (err) {
        console.error('Error fetching data:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [user])

  const handleLogout = async () => {
    await signOut()
    navigate('/')
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-bg flex items-center justify-center">
        <div className="animate-pulse text-primary text-xl">Loading...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-bg pb-20">
      {/* Header */}
      <header className="bg-surface border-b border-border px-4 py-6">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">
              <span className="text-primary">L</span>yra
            </h1>
            <p className="text-text-secondary text-sm">Welcome back!</p>
          </div>
          <button
            onClick={handleLogout}
            className="px-4 py-2 text-text-secondary hover:text-white transition-colors text-sm"
          >
            Sign out
          </button>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Streak Card */}
        <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl p-6 border border-primary/30 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-text-secondary text-sm mb-1">Current Streak</p>
              <p className="text-5xl font-bold">{streak} 🔥</p>
              <p className="text-text-secondary text-sm mt-1">days in a row</p>
            </div>
            <div className="text-6xl">🌟</div>
          </div>
        </div>

        {/* Last Check-in */}
        {lastCheckIn && (
          <div className="bg-surface rounded-2xl p-4 border border-border mb-6">
            <p className="text-text-secondary text-sm mb-1">Last Check-in</p>
            <p className="text-lg font-semibold">
              {formatDistanceToNow(lastCheckIn)}
            </p>
          </div>
        )}

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <Link
            to="/mood"
            className="bg-surface p-6 rounded-2xl border border-border hover:border-primary/50 transition-colors text-center group"
          >
            <div className="text-4xl mb-2">📊</div>
            <p className="font-semibold group-hover:text-primary transition-colors">Check In</p>
            <p className="text-text-secondary text-sm">Log your mood</p>
          </Link>
          <Link
            to="/chat"
            className="bg-surface p-6 rounded-2xl border border-border hover:border-secondary/50 transition-colors text-center group"
          >
            <div className="text-4xl mb-2">💬</div>
            <p className="font-semibold group-hover:text-secondary transition-colors">Talk to Lyra</p>
            <p className="text-text-secondary text-sm">Get support</p>
          </Link>
        </div>

        {/* Recent Moods */}
        <div className="bg-surface rounded-2xl p-6 border border-border">
          <h2 className="text-xl font-bold mb-4">Recent Moods</h2>
          {recentMoods.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-text-secondary mb-4">No mood entries yet</p>
              <Link
                to="/mood"
                className="inline-block px-6 py-2 bg-primary rounded-full font-semibold hover:opacity-90 transition-opacity"
              >
                Do your first check-in
              </Link>
            </div>
          ) : (
            <div className="space-y-3">
              {recentMoods.map((mood) => (
                <div key={mood.id} className="flex items-center justify-between p-3 bg-bg rounded-xl">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl" style={{ filter: `drop-shadow(0 0 8px ${MOOD_COLORS[mood.moodScore]})` }}>
                      {['😔', '😟', '😐', '🙂', '😊'][mood.moodScore - 1]}
                    </span>
                    <div>
                      <p className="font-semibold">{MOOD_LABELS[mood.moodScore]}</p>
                      {mood.note && <p className="text-text-secondary text-sm truncate max-w-[200px]">{mood.note}</p>}
                    </div>
                  </div>
                  <p className="text-text-secondary text-sm">
                    {formatDistanceToNow(mood.createdAt)}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-surface border-t border-border">
        <div className="max-w-4xl mx-auto flex">
          <Link to="/dashboard" className="flex-1 py-4 flex flex-col items-center text-primary">
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
          <Link to="/profile" className="flex-1 py-4 flex flex-col items-center text-text-secondary hover:text-white transition-colors">
            <span className="text-2xl">👤</span>
            <span className="text-xs mt-1">Profile</span>
          </Link>
        </div>
      </nav>
    </div>
  )
}