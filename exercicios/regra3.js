/**
 * Calculo de porcentagem de um valor:
 * @Author Denis D'Angelo
 */

//inserir a biblioteca readline-sync
const input = require('readline-sync')
console.clear()
console.log("Regra de Tres")


//variaveis
let X, Y, valor

//entrada
X = Number(input.question("Informe o valor total: "))
Y = Number(input.question("informe a porcentagem a ser calculada (somente numeros): "))

//processamento
valor = (X * Y)/100

//saida
console.log(`${Y}% de ${X} é ${valor.toFixed(2)}`)