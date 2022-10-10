function verify(params) {
  var date = new Date()
  var year = date.getFullYear()
  var formYear = window.document.getElementById("txtyear")
  var result = window.document.querySelector("div#result")
  if (formYear.value.length == 0 || Number(formYear.value) > year) {
    window.alert(`Check your data and try again.`)
  } else {
    window.alert(`Looks good.`)
  }
}
