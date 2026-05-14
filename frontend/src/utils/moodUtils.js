export const calculateStreak = (moodEntries) => {
  if (!moodEntries || moodEntries.length === 0) return 0

  const sortedEntries = [...moodEntries].sort(
    (a, b) => new Date(b.created_at) - new Date(a.created_at)
  )

  let streak = 0
  let checkDate = new Date()

  for (const entry of sortedEntries) {
    const entryDate = new Date(entry.created_at)
    const entryDateStr = entryDate.toDateString()
    const checkDateStr = checkDate.toDateString()
    const yesterdayStr = new Date(checkDate.getTime() - 86400000).toDateString()

    if (entryDateStr === checkDateStr || entryDateStr === yesterdayStr) {
      streak++
      checkDate = entryDate
    } else {
      break
    }
  }

  return streak
}

export const getMoodStats = (moodEntries) => {
  if (!moodEntries || moodEntries.length === 0) {
    return { average: 0, count: 0, distribution: [0, 0, 0, 0, 0] }
  }

  const distribution = [0, 0, 0, 0, 0]
  let sum = 0

  for (const entry of moodEntries) {
    const score = Math.min(5, Math.max(1, entry.mood_score || 3))
    distribution[score - 1]++
    sum += score
  }

  return {
    average: (sum / moodEntries.length).toFixed(1),
    count: moodEntries.length,
    distribution,
  }
}

export const getWeeklyMoods = (moodEntries) => {
  const now = new Date()
  const weekAgo = new Date(now.getTime() - 7 * 86400000)
  
  return moodEntries
    .filter((entry) => new Date(entry.created_at) >= weekAgo)
    .sort((a, b) => new Date(a.created_at) - new Date(b.created_at))
}