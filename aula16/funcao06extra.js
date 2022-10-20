let factorial = (x) => {
  if (isNaN(x)) return "I need a numerical value, champ!"
  if (x < 0) return "I can't use negative values, you FOOL!"
  if (x > 100) return "I can only use values smaller than or equal to 100, m'bad."
  if (x % 1 !== 0) {
    x = parseInt(x)
  }
  if (x === 0) return 1
  if (x === 1) return 1
  return x * factorial(x - 1)
}

console.log(factorial())
