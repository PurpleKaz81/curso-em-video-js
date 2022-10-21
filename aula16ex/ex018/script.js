function input() {
  let inputNumber = window.document.querySelector("#number")
  // let input = window.document.querySelector("input") /* don't know if this is necessary */
  if (inputNumber.value.length === 0) {
    window.alert("I need a value, bruh \u{1F913}")
  } else {
    let number = Number(inputNumber.value)
    let item = window.document.createElement("option")
    if (number >= 1 && number <= 100) {
      item.text = `You've added the number ${number}`
      table.appendChild(item)
    } else {
      window.alert("You can only add numbers between 1 and 100, bruh \u{1F610}")
    }
  }
}
