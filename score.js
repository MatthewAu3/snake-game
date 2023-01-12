var score = 0
document.getElementById("currentScore").innerText = score

export function update() {
    document.getElementById("currentScore").innerText = score
    score += 1
    document.getElementById("currentScore").innerText = score
  }

export function getScore() {
  return score
}