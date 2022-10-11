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
    result.innerHTML = "Counting: \u{1F3C1} "
    let firstNumber = Number(start.value)
    let endNumber = Number(end.value)
    let stepNumber = Number(step.value)
    if (firstNumber < endNumber) {
      for (let counter = firstNumber;counter <= endNumber;counter += stepNumber) {
        result.innerHTML += `${counter} \u{1F449} `
      }
    } else {
      for (let counter = firstNumber;counter >= endNumber;counter -= stepNumber) {
        result.innerHTML += `${counter} \u{1F449} `
      }
    }
    result.innerHTML += `\u{1F3C1}`
  }
}
