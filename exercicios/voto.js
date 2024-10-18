/**
 * Obrigatoriedade do voto
 * @Author Denis D'Angelo
 */


//bibiloteca
const input = require('readline-sync')
const color = require('colors')

//variaveis
let idade
console.clear()

//entrada
idade = Number(input.question("Insira sua idade: "))

//processamento * saida
if (idade < 16) {
    console.log("Voto proibido".red)
} else if (idade > 17 && idade < 71) {
    console.log("Voto obrigatório".blue)
} else {
    console.log("Voto facultativo".green)
}