/**
 * Desenvolvimento de uma calculadora
 * @author Denis D'Angelo
 */

const input = require('readline-sync')
let a, b, opcao, repeat

do{
console.clear()
console.log(" _____     _         _       _             ")
console.log("|     |___| |___ _ _| |___ _| |___ ___ ___ ")
console.log("|   --| .'| |  _| | | | .'| . | . |  _| .'|")
console.log("|_____|__,|_|___|___|_|__,|___|___|_| |__,|")

a = Number (input.question("Digite o primeiro numero: "))
b = Number (input.question("Digite o segundo numero: "))

console.log("")
console.log("1. Somar")
console.log("2. Subtrair")
console.log("3. Multiplicar")
console.log("4. Dividir")
console.log("5. calcular a porcentagem")

opcao = Number(input.question("Digite a opcao desejada: "))


switch (opcao) {
    case 1:
        console.log("Escolha: Soma")
        soma (a, b)
        break
    case 2:
        console.log("Escolha: Subtração")
        subt(a, b)
        break
    case 3:
        console.log("Escolha: Multiplicação")
        mult(a, b)
        break
    case 4:
        console.log("Escolha: Divisao")
        divs(a, b)
        break
    case 5:
        console.log("Escolha: Porcentagem")
        porc(a, b)
        break
    default:
        console.log("Opção inválida")
        break
}

function soma(a, b){
    return console.log(`A soma de ${a} + ${b} = ${a+b}`)
}
function subt(a, b ){
    return console.log(`A subtracao de ${a} - ${b} = ${a-b}`)
}

function mult(a, b ){
    return console.log(`A multiplicação de ${a} x ${b} = ${a*b}`)
}

function divs(a, b ){
    console.log(`a divisão de ${a} : ${b} = ${a/b}`)
}

function porc(a, b){
    console.log(`${a} % de ${b} = ${((a*b)/100).toFixed(2)}`)
}

repeat = input.question("Deseja fazer um novo calculo[s/n]")
} while (repeat === 's')