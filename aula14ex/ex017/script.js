function check() {
  let number = window.document.querySelector("#number")
  let table = window.document.querySelector("#table")
  if (number.value.length == 0) {
    table.innerHTML = "I need a value, bruh... \u{1F644}"
  } else {
    table.innerHTML = `Multiplication Table for ${number.value}`
  }
}
