function load() {
  var msg = window.document.getElementById("msg")
  var image = window.document.getElementById("image")
  var date = new Date()
  var time = date.getHours()
  // var time = 22
  msg.innerHTML = `Agora são ${time} horas.`
  if (time >= 0 && time < 12) {
    image.src = "manha.png"
  } else if (time >= 12 && time < 18) {
    image.src = "tarde.png"
  } else {
    image.src = "noite.png"
  }
}
