/**
 * calculo de desconto em %
 * @author Denis D'Angelo
 */

//inserir a biblioteca readline-sync
const input = require('readline-sync')
console.clear()
console.log("calculo de desconto em %")

//variaveis
let totalDesconto, total, desconto

//entrada
total = Number(input.question("Informe o valor da compra: R$ "))
desconto = Number(input.question("Digite o valor do desconto em % (somente numeros): "))

//processamento
totalDesconto = total - (desconto * total) / 100

//saida
console.log (`total com desconto R$ ${totalDesconto.toFixed(2)}`)