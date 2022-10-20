function oddEven(number) {
  if (number % 2 == 0) {
    return "Even"
  } else {
    return "Odd"
  }
}

let result = oddEven()
console.log(result)

function natureNumber(number) {
  if (isNaN(number)) {
    return "Not a number"
  } else if (number % 2 == 0) {
    return "Even"
  } else {
    return "Odd"
  }

}

console.log(natureNumber())
