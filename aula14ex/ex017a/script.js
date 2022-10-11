function calc() {
  let inputBase = window.document.querySelector("#base")
  let inputExponent = window.document.querySelector("#exponent")
  let table = window.document.querySelector("#table")
  if (inputBase.value.length == 0 || inputExponent.value.length == 0) {
    window.alert("I need values, bruh... \u{1F644}")
  } else {
    let base = Number(inputBase.value)
    let exponent = Number(inputExponent.value)
    let counter = 1
    table.innerHTML = ""
    
  }
}
