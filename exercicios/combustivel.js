/**
 * Calculo de volume médio de combustivel de um carro. 
 * @Author Denis D'Angelo
 */

//adicionando a bibiloteca readline-sync
const input = require('readline-sync')

//variaveis
let dist, consum, media

//limpar console
console.clear()
console.log("Calculo de Média de consumo de combustivel por KM")

//entrada de dados
dist = Number(input.question("Quantos km voce percorreu: "))
consum = Number(input.question("Quantos litros de combustivel foram consumidos: "))

//processamento
media = dist / consum

//saida
console.log(`A media de combustivel que seu transporte consumiu foi de ${media.toFixed(1)}km por Litro`)
