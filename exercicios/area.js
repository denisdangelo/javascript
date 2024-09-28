/**
 * Calculo da area em m²
 * @Author Denis D'Angelo
 */

//inserindo a biblioteca (readline-sync)
const input = require('readline-sync')

//variaveis
let comp, larg, area

//limpando o console
console.clear()
console.log("Calculo da area de um terreno em m²")

//entrada de dados
comp = Number(input.question("Digite o comprimento do terreno: "))
larg = Number(input.question("Digite a largura do terreno: "))

//processamento
area = comp * larg

//saida
console.log(`A Area do terreno é ${area.toFixed(2)}m²`)
