/**
 * Exemplo de uso do metodo switch case para gerar numeros aleatórios
 * Jogo do Dado
 * @author Denis D'Angelo
 */

const input = require('readline-sync')

let face

console.clear()
console.log("Jogo do dado")
input.question("Pressione a tecla [Enter] para jogar o dado")//pausa para o usuário ter que apertar o "enter"

//Sorteio da face de um dado
//Math classe matemática
//floor() conversão para numeros inteiros
//ramdom() * (gerador de número aleatório)
//sintaxe "Math.random() * 10 (sorteia um numero de 0 à 9 com decimais)"
//sintaxe "Math.floor(Math.random() * 10) (sorteia um numeor de 0 à 9 convertendo para inteiro")

face = Math.floor(Math.random() * 6 + 1)//sorteia de 0 à 5 e soma 1 ao resultado
console.log(`Face do dado: ${face}`)