/**
 * Conversão de de Dolar para Real
 */

//Adicionar a biblioteca readline-sync
const input = require('readline-sync')

//variaveis
let real, cota, dolar

//limpar o console
console.clear()
console.log("Conversor de Real para Dolar")


//entrada de dados
real = Number(input.question("Quantos reais voce quer converter: R$"))
cota = Number(input.question("Qual a cotação de dolar atual: U$"))

//processamento
dolar = real / cota

//saida de dados
console.log(`Com R$${real} você consegue comprar U$${dolar.toFixed(2)}`)

