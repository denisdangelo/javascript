/**
 * PDV
 * @author Denis D'Angelo
 */

const input = require('readline-sync')
const color = require('colors')

//varivais
let total, desconto, totalDesconto, valorDesconto, valorPago ,troco

console.clear()



console.log("")
console.log("░▒▓███████▓▒░░▒▓███████▓▒░░▒▓█▓▒░░▒▓█▓▒░ ".underline.red)
console.log("░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░ ".underline.red)
console.log("░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒▒▓█▓▒░  ".underline.red)
console.log("░▒▓███████▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒▒▓█▓▒░  ".underline.red)
console.log("░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░ ░▒▓█▓▓█▓▒░   ".underline.red)
console.log("░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░ ░▒▓█▓▓█▓▒░   ".underline.red)
console.log("░▒▓█▓▒░      ░▒▓███████▓▒░   ░▒▓██▓▒░    ".underline.red)
console.log("")

//entrada
total = Number(input.question("Digite o valor da compra: R$ "))
desconto = Number(input.question("Digite o valor do desconto em % (somente numeros): "))

//processamento
totalDesconto = total - (desconto * total) / 100

//processamento2
valorDesconto = total - totalDesconto

//saida 1
console.log("")
console.log("_______________________________________")
console.log(`Total: R$ ${total.toFixed(2)}`)
console.log(`Desconto: ${desconto}%`)
console.log(`Valor do desconto: R$ ${valorDesconto.toFixed(2)}`)
console.log(`Total com desconto: R$ ${totalDesconto.toFixed(2)}`)
console.log("")
console.log("_______________________________________")

//entrada2
valorPago = Number(input.question("Digite o valor pago em dinheiro: R$"))

//processamento3
troco = valorPago - totalDesconto

//saida2
console.log("_______________________________________")
console.log(`Valor pago: R$ ${valorPago.toFixed(2)}`)
console.log(`Troco: R$ ${troco}`)
console.log("_______________________________________")


                                         
                                         
                                         
                                         
                                         
                                         
                                         
                                         
                                         
                                         

