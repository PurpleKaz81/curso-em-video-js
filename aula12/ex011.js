var idade = 19
console.log(`Você tem ${idade} anos. Qual a natuireza do seu voto?`)
if (idade < 16) {
  console.log(`Indisponível.`)
} else  if (idade < 18 || idade >= 65) { // idade >= 16 && is redundant{
    console.log(`Optativo.`)
} else {
    console.log(`Obrigatório.`)
}

