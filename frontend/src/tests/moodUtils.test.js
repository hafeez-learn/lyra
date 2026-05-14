import { describe, it, expect } from 'vitest'
import { calculateStreak } from '../utils/moodUtils'

describe('calculateStreak', () => {
  it('returns 0 for empty array', () => {
    expect(calculateStreak([])).toBe(0)
  })

  it('returns 0 for null/undefined', () => {
    expect(calculateStreak(null)).toBe(0)
    expect(calculateStreak(undefined)).toBe(0)
  })

  it('calculates streak for consecutive days', () => {
    const today = new Date()
    const yesterday = new Date(today.getTime() - 86400000)
    const twoDaysAgo = new Date(today.getTime() - 2 * 86400000)

    const entries = [
      { created_at: today.toISOString() },
      { created_at: yesterday.toISOString() },
      { created_at: twoDaysAgo.toISOString() },
    ]

    expect(calculateStreak(entries)).toBe(3)
  })

  it('resets streak when a day is missed', () => {
    const today = new Date()
    const twoDaysAgo = new Date(today.getTime() - 2 * 86400000)
    const threeDaysAgo = new Date(today.getTime() - 3 * 86400000)

    const entries = [
      { created_at: today.toISOString() },
      { created_at: threeDaysAgo.toISOString() },
      { created_at: twoDaysAgo.toISOString() },
    ]

    expect(calculateStreak(entries)).toBe(1)
  })

  it('handles single entry', () => {
    const entries = [{ created_at: new Date().toISOString() }]
    expect(calculateStreak(entries)).toBe(1)
  })
})