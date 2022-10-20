function factorial(number) {
  if (number == 1 || number == 0) {
    return 1
  } else {
    return number * factorial(number - 1)
  }
}

console.log(factorial(0))

/* recursive fashion

5! = 5 x 4 x 3 x 2 x 1 = 120
5! = 5 x 4!

n! = n x (n-1)!

1! = 1

recursiveness comes from the function being called back in itself

*/
