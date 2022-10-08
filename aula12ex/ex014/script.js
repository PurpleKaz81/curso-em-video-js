function load() {
  var msg = window.document.getElementById("msg")
  var image = window.document.getElementById("image")
  var date = new Date()
  var time = date.getHours() + ":" + date.getMinutes()
  msg.innerHTML = `Agora são ${time} horas.`
}
