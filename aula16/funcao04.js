function factorial(number) {
  let fat = 1
  for(counter = number;counter > 1;counter--) {
    fat *= counter
  }
  return fat
}

console.log(factorial(5))
