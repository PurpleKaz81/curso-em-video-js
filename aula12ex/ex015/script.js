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
      if (age >= 0 && age < 10) {
        // Child
        img.setAttribute("src", "baby_male.png")
      } else if (age < 21) {
        // Young Person
        img.setAttribute("src", "boy.png")
      } else if (age < 50) {
        // Adult
        img.setAttribute("src", "male.png")
      } else {
        // Elder
        img.setAttribute("src", "elder_male.png")
      }
    } else if (formGender[1].checked) {
      gender = "female"
      if (age >= 0 && age < 10) {
        // Child
        img.setAttribute("src", "baby_female.png")
      } else if (age < 21) {
        // Young Person
        img.setAttribute("src", "girl.png")
      } else if (age < 50) {
        // Adult
        img.setAttribute("src", "woman.png")
      } else {
        // Elder
        img.setAttribute("src", "elder_female.png")
      }
    }
    result.style.textAlign = "center"
    result.innerHTML = `We see you're a ${age}-year-old ${gender}.`
    result.appendChild(img)
  }
}
