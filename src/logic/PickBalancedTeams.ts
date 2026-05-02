import type { Player } from "../types/Player";

function assignScores(players: Player[]): Player[] {
  const N = players.length
  const exponent = 1.25

  return players.map((p, i) => ({
    ...p,
    score: Math.pow(N - i, exponent)
  }))
}

export function pickBalancedTeams(players: Player[]): Player[] {
  const scored = assignScores(players)

  const scores = scored.map(p => p.score)
  const total = scores.reduce((a, b) => a + b, 0)
  const target = total / 2

  const N = players.length
  const minSize = Math.floor(N / 2)
  const maxSize = Math.ceil(N / 2)

  let bestSolutions: number[][] = []
  let bestScore = Infinity

  function backtrack(start: number, team: number[]) {
    if (team.length > maxSize) return
    
    const sum = team.reduce((a, i) => a + (scores[i] ?? 0), 0)
    const diff = Math.abs(target - sum)

    const sizePenalty = Math.abs(team.length - minSize) * 0.5
    const score = diff + sizePenalty

    if (team.length >= minSize) {
      if (score < bestScore) {
        bestSolutions = [[...team]]
        bestScore = score
      } else if (score === bestScore) {
        bestSolutions.push([...team])
      }
    }

    for (let i = start; i < N; i++) {
      team.push(i)
      backtrack(i + 1, team)
      team.pop()
    }
  }

  backtrack(0, [])

  // pick random best solution
  const chosen =
    bestSolutions[Math.floor(Math.random() * bestSolutions.length)]

  const teamASet = new Set(chosen)

  return scored.map((p, i) => ({
    ...p,
    team: teamASet.has(i) ? 'A' : 'B'
  }))
}