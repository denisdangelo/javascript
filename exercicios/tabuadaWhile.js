/**
 * Tabuada usando estrutura While
 * @author Denis D'Angelo
 */

const input = require('readline-sync')
let valor
let i = 1 //apoio a lógica e laço while

console.clear()
console.log("Tabuada While")

valor = Number(input.question("digite o valor da tabuada: "))

//enquanto i for menor que 11
while (i < 11) {
    console.log(`${valor} x ${i} = ${valor * i}`)
    i++
}