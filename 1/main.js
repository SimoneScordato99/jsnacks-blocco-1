
let num1 = parseInt(prompt("enter first number"))
let num2 = parseInt(prompt("enter second number"))
console.log(num1,num2)
if(num1 > num2){
    document.writeln("il primo numero è il migliore")
    document.writeln(`${num1}`)
} else if (num1 < num2) {
    document.writeln("il secondo numero è il migliore")
    document.writeln(`${num2}`)
} else {
    document.writeln(`${num1} è uguale a ${num2}`)
}