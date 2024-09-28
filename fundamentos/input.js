/**
 * Input de dados via terminal
 * Uso de pacote readline-sync
 * @Author Denis D'Angelo
 */

//Importar o pacote 
const input = require('readline-sync')

let nome

console.clear()

nome = input.question("Digite o seu Nome: ")
console.log(`Hello ${nome}`)