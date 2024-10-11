/**
 * Comparação de valores de Alcool e gasolina
 * @Author Denis D'Angelo
 */

//importar a biblioteca read-linesync
const input = require('readline-sync')
const color = require('colors')

//variaveis
let alcool, gasolina

console.clear()
console.log ("Calculadora de Alcool X Gasolina")

alcool = Number (input.question("Qual o valor do Alcool: R$"))
gasolina = Number(input.question("Qual o valor da Gasolina: R$"))


if (alcool< 0.7 * gasolina ) {
    console.log("Abasteça com Alcool")
} else {
    console.log("Abasteça com Gasolina")
}
console.log(alcool/gasolina)