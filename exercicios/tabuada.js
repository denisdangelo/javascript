/**
 * tabuada com laço for
 * @author Denis D'Angelo
 */

const input = require('readline-sync')
let valor

console.clear()
console.log("Tabuada")
valor = Number(input.question("Digite o valor da Tabuada: "))
for (let i = 1; i < 11; i++){
    console.log(`${valor} x ${i} = ${valor * i}`)
}