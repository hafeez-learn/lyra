import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signUp } from '../lib/firebase'

export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    if (password !== confirmPassword) {
      setError('Passwords do not match')
      return
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters')
      return
    }

    setLoading(true)

    try {
      const { user, error } = await signUp(email, password)
      if (error) throw error
      navigate('/dashboard')
    } catch (err) {
      setError(err.message || 'Failed to sign up')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-bg flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="text-3xl font-bold">
            <span className="text-primary">L</span>yra
          </Link>
          <p className="text-text-secondary mt-2">Create your account</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-surface p-8 rounded-2xl border border-border">
          <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
          
          {error && (
            <div className="bg-red-500/20 border border-red-500/50 text-red-400 p-3 rounded-xl mb-4 text-sm">
              {error}
            </div>
          )}

          <div className="mb-4">
            <label className="block text-text-secondary text-sm mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-bg border border-border rounded-xl px-4 py-3 text-white placeholder-text-secondary focus:border-accent focus:outline-none transition-colors"
              placeholder="you@example.com"
            />
          </div>

          <div className="mb-4">
            <label className="block text-text-secondary text-sm mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full bg-bg border border-border rounded-xl px-4 py-3 text-white placeholder-text-secondary focus:border-accent focus:outline-none transition-colors"
              placeholder="••••••••"
            />
          </div>

          <div className="mb-6">
            <label className="block text-text-secondary text-sm mb-2">Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full bg-bg border border-border rounded-xl px-4 py-3 text-white placeholder-text-secondary focus:border-accent focus:outline-none transition-colors"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 touch-target"
          >
            {loading ? 'Creating account...' : 'Create Account'}
          </button>
        </form>

        <p className="text-center text-text-secondary mt-6">
          Already have an account?{' '}
          <Link to="/login" className="text-primary hover:underline">Sign in</Link>
        </p>
      </div>
    </div>
  )
}