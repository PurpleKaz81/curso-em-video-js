function check() {
  let inputNumber = window.document.querySelector("#number")
  let table = window.document.querySelector("#table")
  if (inputNumber.value.length == 0) {
    window.alert("I need a value, bruh... \u{1F644}")
  } else {
    let number = Number(inputNumber.value)
    let counter = 1
    table.innerHTML = ""
    while (counter <= 10) {
      let item = window.document.createElement("option")
      item.text = `${number} x ${counter} = ${number*counter}`
      item.value = `table${counter}` // useful for PHP
      table.appendChild(item)
      counter++
    }
  }
}
