/**
 * Calculo de volume de agua em Litros para um aquiario
 */

//inserir a biblioteca
const input = require('readline-sync')

//Variaveis
let larg, comp, altu, volu

//limpar  console
console.clear()
console.log("Calculo de volume de um aquario")

//entrada de dados
altu = Number(input.question("Digite a altura do aquario em cm: "))
larg = Number(input.question("Digite a largura do aquario em cm: "))
comp = Number(input.question("Digite o comprimento do aquario em cm: "))

//processamento
volu = (altu * larg * comp) / 1000

//saida 
console.log(`O volume de água para o aquario é de ${volu.toFixed(3)} litros`)
