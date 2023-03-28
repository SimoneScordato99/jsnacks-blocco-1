let numeri = [

]
console.log(numeri)
for (let i = 0 ; i < 6 ; i++) {
    let numero = parseInt(prompt("dammi un numero"))

    if (numero % 2 != 0) {
        numeri.push(`${numero}`)
    }
}
console.log(numeri)