let factorial = x => {
  if (isNaN(x) || x < 0 || x > 100) return "I need a value, champ!"
  if (x % 1 !== 0) {
    x = parseInt(x)
  }
  if (x === 0) return 1
  if (x === 1) return 1
  return x * factorial(x - 1)
}

console.log(factorial())
