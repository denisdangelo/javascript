/**
 * calculo de consumo de água
 * @author Denis D'Angelo
 */

//biblioteca
const input = require('readline-sync')

//variaveis
let peso, consumo

//entrada
peso = Number(input.question("Informe seu peso em KG: "))

//processamento
consumo = peso * 0.035

//saida
console.log(`O consumo ideal para você é ${consumo.toFixed(3)}Litro(s)`)