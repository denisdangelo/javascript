/**
 * Calculo de valor da conta de luz
 * @author Denis D'Angelo
 */

//biblioteca
const input = require('readline-sync')
const colors = require('colors')
let cons, klwH, total

console.clear()
console.log("Valor da conta de luz com base em KwH")

//entrada
klwH = Number(input.question("Insira o valor da tarifa: R$ "))
cons = Number(input.question("Insira o consumo nos últimos 30 dias em Klw: "))

//processamento
total = cons * klwH

//saida
console.log(`sua conta será R${total.toFixed(2)}`)




