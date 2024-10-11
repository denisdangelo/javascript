/**
 * Verificação de maioridade
 * @author Denis D'Angelo
 */

const input = require('readline-sync')
let idade

console.clear()
console.log("Verificação de maioridade")
idade = Number(input.question("Digite sua idade: "))
console.log(`Idade: ${idade}`)

if (idade < 18) {
    console.log("Você é menor de idade.")
} else {    
    console.log("você é maior de idade")
}
  
