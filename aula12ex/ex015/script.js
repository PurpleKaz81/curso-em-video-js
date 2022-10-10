function verify(params) {
  var date = new Date()
  var year = date.getFullYear()
  var formYear = window.document.getElementById("txtyear")
  var result = window.document.querySelector("div#result")
  if (formYear.value.length == 0 || Number(formYear.value) > year) {
    window.alert(`Check your data and try again.`)
  } else {
    var formGender = window.document.getElementsByName("radgender")
    var age = year - Number(formYear.value)
    // result.innerHTML = `You're ${age} years old.`
    var gender = ""
    var img = window.document.createElement("img")
    img.setAttribute("id", "photo") // same thing as inserting <img id="photo"> inside <div id="result">
    if (formGender[0].checked) {
      gender = "male"
    } else if (formGender[1].checked) {
      gender = "female"
    }
    result.style.textAlign = "center"
    result.innerHTML = `We see you're a ${age}-year-old ${gender}.`
  }
}
