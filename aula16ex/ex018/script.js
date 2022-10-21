function input() {
  let inputNumber = window.document.querySelector("#number")
  let input = window.document.querySelector("input")
  if (inputNumber.value.length === 0) {
    window.alert("I need a value, bruh \u{1F913}")
  }
  let number = Number(inputNumber.value)
  let item = window.document.createElement("option")
  // table.innerHTML = ""
  if (number !== 0) {
    item.text = `You've added the number ${number}`
	  table.appendChild(item)
  }
}
