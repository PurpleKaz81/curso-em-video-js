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
        img.setAttribute("src", "bebe_m_elipse.png")
      } else if (age < 21) {
        // Young Person
        img.setAttribute("src", "garoto_elipse.png")
      } else if (age < 50) {
        // Adult
        img.setAttribute("src", "homem_elipse_fixed.png")
      } else {
        // Elder
        img.setAttribute("src", "idoso_elipse.png")
      }
    } else if (formGender[1].checked) {
      gender = "female"
      if (age >= 0 && age < 10) {
        // Child
        img.setAttribute("src", "bebe_f_elipse.png")
      } else if (age < 21) {
        // Young Person
        img.setAttribute("src", "garota_elipse.png")
      } else if (age < 50) {
        // Adult
        img.setAttribute("src", "mulher_elipse.png")
      } else {
        // Elder
        img.setAttribute("src", "idosa_elipse.png")
      }
    }
    result.style.textAlign = "center"
    result.innerHTML = `We see you're a ${age}-year-old ${gender}.`
    result.appendChild(img)
  }
}
