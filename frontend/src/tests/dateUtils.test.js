import { describe, it, expect } from 'vitest'
import { formatDistanceToNow, formatDate, isToday, isYesterday } from '../utils/dateUtils'

describe('dateUtils', () => {
  describe('formatDistanceToNow', () => {
    it('returns "just now" for very recent dates', () => {
      const now = new Date()
      expect(formatDistanceToNow(now.toISOString())).toBe('just now')
    })

    it('returns minutes for recent dates', () => {
      const fiveMinutesAgo = new Date(Date.now() - 5 * 60 * 1000)
      expect(formatDistanceToNow(fiveMinutesAgo.toISOString())).toBe('5m ago')
    })

    it('returns hours for same day dates', () => {
      const twoHoursAgo = new Date(Date.now() - 2 * 60 * 60 * 1000)
      expect(formatDistanceToNow(twoHoursAgo.toISOString())).toBe('2h ago')
    })

    it('returns "yesterday" for previous day', () => {
      const yesterday = new Date(Date.now() - 86400000)
      expect(formatDistanceToNow(yesterday.toISOString())).toBe('yesterday')
    })

    it('returns days for dates within a week', () => {
      const threeDaysAgo = new Date(Date.now() - 3 * 86400000)
      expect(formatDistanceToNow(threeDaysAgo.toISOString())).toBe('3d ago')
    })
  })

  describe('isToday', () => {
    it('returns true for today', () => {
      expect(isToday(new Date().toISOString())).toBe(true)
    })

    it('returns false for yesterday', () => {
      const yesterday = new Date(Date.now() - 86400000)
      expect(isToday(yesterday.toISOString())).toBe(false)
    })
  })

  describe('isYesterday', () => {
    it('returns true for yesterday', () => {
      const yesterday = new Date(Date.now() - 86400000)
      expect(isYesterday(yesterday.toISOString())).toBe(true)
    })

    it('returns false for today', () => {
      expect(isYesterday(new Date().toISOString())).toBe(false)
    })
  })
})