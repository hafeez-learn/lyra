import { createContext, useContext, useEffect, useState } from 'react'
import { supabase, onAuthStateChange } from '../lib/supabase'

const AuthContext = createContext({})

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    onAuthStateChange((event, session) => {
      setUser(session?.user ?? null)
      setLoading(false)
    })
  }, [])

  const value = {
    user,
    loading,
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}