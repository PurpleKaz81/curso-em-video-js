var now = new Date()
var time = now.getHours() + ":" + now.getMinutes()
console.log(`Agora são exatamente ${time} horas.`)
if (time < 12) {
  console.log(`Bom dia!`)
} else if (time <= 18) {
console.log(`Boa tarde!`)
} else {
  console.log(`Boa noite!`)
}
