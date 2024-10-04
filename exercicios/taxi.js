/**
 * calculo de cobrança no taxímetro
 * @author Denis D'Angelo
 */

//biblioteca
const input = require('readline-sync')
console.clear()
console.log("Valor de cobranca no taximetro")

//variaves
let distancia, valor, cobrar

//entrada
valor = Number (input.question("Qual o valor fixado por KM: R$ "))
distancia = Number (input.question("Quantos KM foram rodados: "))

//processamento
cobrar = valor * distancia

//saida
console.log(`O valor a ser cobrado é R$${cobrar.toFixed(2)}`)
