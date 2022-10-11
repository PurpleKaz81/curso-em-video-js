function calc() {
  let inputNumber = window.document.querySelector("#hypotenuse")
  let table = window.document.querySelector("#table")
  if (inputNumber.value.length == 0) {
    window.alert("I need a value, bruh... \u{1F644}")
  } else {
    let number = Number(inputNumber.value)
    let counter = 1
    table.innerHTML = ""
  }
}
