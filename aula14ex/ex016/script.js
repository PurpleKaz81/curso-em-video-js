function count() {
  let start = window.document.querySelector("#start")
  let end = window.document.querySelector("#end")
  let step = window.document.querySelector("#step")
  let result = window.document.querySelector("div#result")
  if (start.value.length == 0) {
    result.innerHTML = "Can't count from naught, ol' love."
  } else if (step.value.length == 0 || step.value == 0) {
    window.alert("Can't count with zero steps.")
  } else if (end.value.length == 0) {
    result.innerHTML = "That's impossible to count."
  } else {
    let counter = 0
    let numbers = []
    let element = start.value + step.value
    while (counter < end.value) {
      console.log(`${start.value} + ${step.value}`)
      numbers.push(element)
      counter += step.value
      if (counter >= step.value)
      console.log('That\'s it!')
      break
    }
  }
}

result.innerHTML = numbers
