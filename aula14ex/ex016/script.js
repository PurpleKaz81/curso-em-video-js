function count() {
  let start = window.document.querySelector("#start")
  let end = window.document.querySelector("#end")
  let step = window.document.querySelector("#step")
  let result = window.document.querySelector("div#result")
  if (start.value.length == 0 || end.value.length == 0 || step.value.length == 0) {
    result.innerHTML = "[ERROR] Can't count like that, ol' love."
  } else {
    result.innerHTML = "Counting: \u{1F3C1} "
    let firstNumber = Number(start.value)
    let endNumber = Number(end.value)
    let stepNumber = Number(step.value)
    if (stepNumber <= 0){
      window.alert(`Invalid entry. Let's start from step 1.`)
      stepNumber = 1
    }
    if (firstNumber < endNumber) {
      // Ascending count
      for (let counter = firstNumber;counter <= endNumber;counter += stepNumber) {
        result.innerHTML += `${counter} \u{1F449} `
      }
    } else {
      // Descending count
      for (let counter = firstNumber;counter >= endNumber;counter -= stepNumber) {
        result.innerHTML += `${counter} \u{1F449} `
      }
    }
    result.innerHTML += `\u{1F3C1}`
  }
}
