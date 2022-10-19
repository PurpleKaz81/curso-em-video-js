let valores = [8, 1, 7, 4, 2, 9]

console.log(valores)
console.log(valores[0])

for (let pos = 0; pos < valores.length; pos++) {
  let el = valores[pos];
  console.log(`A posição ${pos} tem valor de ${valores[pos]}`)
}

for (let pos in valores) {
  console.log(`A posição ${pos} tem valor de ${valores[pos]}`)
}
