let parola1 = prompt("inserisci la prima parola")
let parola2 = prompt("inserisci la seconda parola")

console.log(parola1,parola2)
if (parola1.length > parola2.length) {
    document.writeln(`${parola2} è la più corta di ${parola1}`)
} else if (parola2.length > parola1.length) {
    document.writeln(`${parola1} è la più corta di ${parola2}`)
} else {
    document.writeln(`${parola1} ha la stessa lunghezza di ${parola2}`)
}