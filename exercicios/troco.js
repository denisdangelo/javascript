/**
 * Calculo de troco
 * @author Denis D'Angelo
 */

//biblioteca
const input = require('readline-sync')
console.clear()
console.log("Calculo de troco automatizada")

//variaveis
let total, valorPago, troco

//entrada
total = Number(input.question("Digite o valor da compra: R$ "))
valorPago = Number(input.question("Digite o valor pago: R$ "))

//processamento
troco = valorPago - total

//saida
console.log(`O troco é R$ ${troco.toFixed(2)}`)
