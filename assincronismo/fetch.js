/**
 * Assincronis - uso de promises em API
 * @author Denis D'Angelo
 */

const input = require('readline-sync')

let cep, urlAPI

console.clear()
console.log("VIA CEP")

cep = input.question("Digite o Cep: ")
//console.log(cep)
//consumo da API (Via Cep)
urlAPI = `https://viacep.com.br/ws/${cep}/json/`

//uso de promises para acessar a API
fetch(urlAPI)
    .then((response) => {
        return response.json()
    })
    .then((dados) => {
        console.log(dados.logradouro)
        console.log(dados.bairro)
        console.log(dados.localidade)
        console.log(dados.uf)
    })
    .catch((error) => {
        console.log(error)
    })