/**
 * Ficha de um aluno de academia
 * @author Denis D'Angelo
 */

const input = require('readline-sync')
const color = require('colors')

//variaveis
let nome, idade, peso, altura, freqCardMax, imc, consumo

console.clear()


console.log("██   ██ ███████  █████  ██      ████████      ██████  █████  ██       ██████ ██    ██ ██       █████  ████████  ██████  ██████  ".rainbow)
console.log("██   ██ ██      ██   ██ ██         ██        ██      ██   ██ ██      ██      ██    ██ ██      ██   ██    ██    ██    ██ ██   ██ ".rainbow)
console.log("███████ █████   ███████ ██         ██        ██      ███████ ██      ██      ██    ██ ██      ███████    ██    ██    ██ ██████  ".rainbow)
console.log("██   ██ ██      ██   ██ ██         ██        ██      ██   ██ ██      ██      ██    ██ ██      ██   ██    ██    ██    ██ ██   ██ ".rainbow)
console.log("██   ██ ███████ ██   ██ ███████    ██         ██████ ██   ██ ███████  ██████  ██████  ███████ ██   ██    ██     ██████  ██   ██ ".rainbow)
console.log(" ")                                                                                                                              
                                                                                                                                


// entrada de dados
nome = input.question("Digite seu nome: ")
idade = Number (input.question("Digite sua idade: "))
peso = Number (input.question("Digite seu peso em Kg: "))
altura = Number (input.question("Digite sua altura em metros: "))



//processamentos
freqCardMax = 208 - (0.7 * idade)
imc = peso / (altura * altura)
consumo = peso * 0.035

// saida
//o simbolo "``" serve para concatenar, juntar. Igual ao Join no scratch
//A sintase é (`nome do que você quer juntar ${variavel que você quer usar}
console.log("Ficha do Aluno")
console.log("_____________________________")
console.log(`Nome: ${nome}`)
console.log(`Idade: ${idade}`)
console.log(`Peso: ${peso}`)
console.log(`Altura: ${altura}`)
console.log(`"Frequencia Cardiaca Máxima: ${freqCardMax}`)
console.log(`IMC:  ${imc.toFixed(2)}`)
console.log(`Consumo ideal de água: ${consumo.toFixed(3)}Litro(s)`)

// toFixed(2) fixa o valor após a cada decimal em 2 O valor dentro de parenteses determina quantas linhas 
//após a casa decimal serão exibidas
if (imc < 18.5) {
    console.log("IMC: abaixo do peso.".grey)
} else if (imc < 25) {
    console.log("IMC: peso normal.".green)
} else if (imc < 30) {
    console.log("IMC: sobrepeso.".yellow)
} else if (imc < 35) {
    console.log("IMC: Obesidade Grau I".magenta)
} else if (imc < 40) {
    console.log("IMC: Obesidade Grau II".red)
} else {
    console.log("IMC: Obesidade Grau III".bgred)
}