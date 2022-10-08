function load() {
  var msg = window.document.getElementById("msg")
  var image = window.document.getElementById("image")
  var date = new Date()
  var time = date.getHours()
  // var time = 21
  msg.innerHTML = `Agora são ${time} horas.`
  if (time >= 0 && time < 12) {
    image.src = "manha.png"
    document.body.style.background = '#c5b5b6'
  } else if (time >= 12 && time <= 18) {
    image.src = "tarde.png"
    document.body.style.background = '#f6b456'
  } else {
    image.src = "noite.png"
    document.body.style.background = '#a385bd'
  }
}
