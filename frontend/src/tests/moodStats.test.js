import { describe, it, expect } from 'vitest'
import { getMoodStats, getWeeklyMoods } from '../utils/moodUtils'

describe('moodUtils', () => {
  describe('getMoodStats', () => {
    it('returns zeros for empty array', () => {
      const stats = getMoodStats([])
      expect(stats.average).toBe(0)
      expect(stats.count).toBe(0)
      expect(stats.distribution).toEqual([0, 0, 0, 0, 0])
    })

    it('calculates average correctly', () => {
      const entries = [
        { mood_score: 5 },
        { mood_score: 3 },
        { mood_score: 1 },
      ]
      const stats = getMoodStats(entries)
      expect(stats.average).toBe('3.0')
      expect(stats.count).toBe(3)
    })

    it('calculates distribution correctly', () => {
      const entries = [
        { mood_score: 5 },
        { mood_score: 5 },
        { mood_score: 4 },
        { mood_score: 3 },
        { mood_score: 1 },
      ]
      const stats = getMoodStats(entries)
      expect(stats.distribution).toEqual([1, 0, 1, 1, 2])
    })
  })

  describe('getWeeklyMoods', () => {
    it('filters entries to last 7 days', () => {
      const now = new Date()
      const entries = [
        { created_at: now.toISOString(), mood_score: 5 },
        { created_at: new Date(now.getTime() - 3 * 86400000).toISOString(), mood_score: 4 },
        { created_at: new Date(now.getTime() - 10 * 86400000).toISOString(), mood_score: 3 },
      ]
      const weekly = getWeeklyMoods(entries)
      expect(weekly.length).toBe(2)
    })
  })
})