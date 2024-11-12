/**
 * Simulador de app de cadastro de cliente e venda com if-else e Switch case
 * @author Denis D'Angelo
 */

//bibilotecas 
const input = require('readline-sync')
const colors = require('colors')

//variaveis
let nome, idade, saldo

console.clear()
console.log("cadastro de clientes")

//entrada
nome = input.question("Digite seu nome: ")
idade = Number (input.question("Digite sua Idade: "))
saldo = Number (input.question("Digite o Saldo Inicial: R$ "))


//saida1
consele.log(`Nome: ${nome}`)
console.log(`Idade: ${idade}`)
console.log(``)
