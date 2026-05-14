import { describe, it, expect } from 'vitest'
import { calculateStreak, getMoodStats, getWeeklyMoods } from '../utils/moodUtils'

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
      { created_at: twoDaysAgo.toISOString() }, // gap - no entry for yesterday
      { created_at: threeDaysAgo.toISOString() },
    ]

    expect(calculateStreak(entries)).toBe(1)
  })
})

describe('getMoodStats', () => {
  it('returns zeros for empty array', () => {
    const result = getMoodStats([])
    expect(result.average).toBe('0')
    expect(result.count).toBe(0)
    expect(result.distribution).toEqual([0, 0, 0, 0, 0])
  })

  it('returns zeros for null/undefined', () => {
    const result = getMoodStats(null)
    expect(result.average).toBe('0')
    expect(result.count).toBe(0)
  })

  it('calculates average and distribution', () => {
    const entries = [
      { mood_score: 5 },
      { mood_score: 3 },
      { mood_score: 1 },
    ]

    const result = getMoodStats(entries)
    expect(result.count).toBe(3)
    expect(result.distribution).toEqual([1, 0, 1, 0, 1]) // 1 one-star, 1 three-star, 1 five-star
  })

  it('clamps mood scores to valid range', () => {
    const entries = [
      { mood_score: 0 },  // below range
      { mood_score: 10 }, // above range
      { mood_score: 3 },
    ]

    const result = getMoodStats(entries)
    // 0 should become 1, 10 should become 5
    expect(result.distribution[0]).toBe(1) // score 0 → 1
    expect(result.distribution[4]).toBe(1) // score 10 → 5
  })
})

describe('getWeeklyMoods', () => {
  it('returns only entries from the last 7 days', () => {
    const now = new Date()
    const threeDaysAgo = new Date(now.getTime() - 3 * 86400000).toISOString()
    const tenDaysAgo = new Date(now.getTime() - 10 * 86400000).toISOString()

    const entries = [
      { created_at: threeDaysAgo, mood_score: 4 },
      { created_at: tenDaysAgo, mood_score: 2 },
    ]

    const result = getWeeklyMoods(entries)
    expect(result.length).toBe(1)
    expect(result[0].mood_score).toBe(4)
  })

  it('sorts entries by date ascending', () => {
    const now = new Date()
    const twoDaysAgo = new Date(now.getTime() - 2 * 86400000).toISOString()
    const fiveDaysAgo = new Date(now.getTime() - 5 * 86400000).toISOString()

    const entries = [
      { created_at: fiveDaysAgo, mood_score: 2 },
      { created_at: twoDaysAgo, mood_score: 4 },
    ]

    const result = getWeeklyMoods(entries)
    expect(result[0].mood_score).toBe(2)
    expect(result[1].mood_score).toBe(4)
  })
})