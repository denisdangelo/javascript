/**
 * Ficha de um aluno de academia
 * @author Denis D'Angelo
 */

//variaveis
let nome
let idade
let peso
let altura
let vip
let FreqCardMax

console.clear()

// entrada de dados
nome = "Denis"
idade = 31
peso = 65
altura = 1.69
vip = true

//processamentos
freqCardMax = 208 - (0.7 * idade)
imc = peso / (altura * altura)

// saida
//o simbolo "``" serve para concatenar, juntar. Igual ao Join no scratch
//A sintase é (`nome do que você quer juntar ${variavel que você quer usar}
console.log("Ficha do Aluno")
console.log("_____________________________")
console.log(`Nome: ${nome}`)
console.log(`Idade: ${idade}`)
console.log(`Peso: ${peso}`)
console.log(`Altura: ${altura}`)
console.log(`Vip: ${vip}`)
console.log(`"Frequencia Cardiaca Máxima: ${freqCardMax}`)
console.log(`"IMC: " ${imc.toFixed(2)}`)

// toFixed(2) fixa o valor após a cada decimal em 2 O valor dentro de parenteses determina quantas linhas 
//após a casa decimal serão exibidas
