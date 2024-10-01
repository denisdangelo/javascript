/**
 * Calculo do tempo necessário para uma viagem
 * @Author Denis D'Angelo
 */

//inserir a biblioteca readline-sync
const input = require('readline-sync')
console.log("Calculo do tempo necessario para uma viagem")

//variaveis
let dist, kmh, temp

//entrada
dist = Number(input.question("Qual a distancia a ser percorrida: KM "))
kmh = Number(input.question("Qual a velocidade media em km/h: km/h "))


//processmento
temp = dist/kmh


//saida
console.log(`O tempo medio dessa viagem sera de ${temp}h`)

