function calc() {
  let inputBase = window.document.querySelector("#base")
  let inputExponent = window.document.querySelector("#exponent")
  let result = window.document.querySelector("#result")
  if (inputBase.value.length == 0 || inputExponent.value.length == 0) {
    window.alert("I need values, bruh... \u{1F644}")
  } else {
    let base = Number(inputBase.value)
    let exponent = Number(inputExponent.value)
    let counter = 1
    result.innerHTML = ""
    while (counter <= 10) {
      let item = window.document.createElement("option")
      item.text = `${base}^${exponent} = ${base**exponent}`
      item.value = `table${counter}` //  useful for PHP
      result.appendChild(item)
      counter++
    }
  }
}
