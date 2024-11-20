/**
 * Estruturas de dados - Objetos
 * @author Denis D'Angelo
 */
//dentro de uma estrutura de dados posso guardar qualque coisa
//outro objeto, função, variavel, o que quiser

// const funcionario1 = {} cria uma constante que recebe um objeto 
console.clear()
const funcionario1 = {}
console.log(typeof(funcionario1))

// adicionar dados à estrutura

funcionario1.nome = "Jose"
funcionario1.cargo = "Professor"
funcionario1.email = "teste@gmail.com"
funcionario1.salario = 1225.45
funcionario1.insta = "instagram.com"
//listar os dados da estrutura
console.log(funcionario1)
console.log(funcionario1.cargo)

//modificar os dados da estrutura
funcionario1.nome = "José de Assis"
console.log(funcionario1)

//excluir dados da estrutura
delete funcionario1.insta
console.log(funcionario1)

const funcionario2 = {
    nome: "Bruce Wayne",
    cargo: "CEO",
    email: "batman@gmail.com",
    salario: 400000,
}
console.log(funcionario2)

const endereco1 = {
    logradouro: "Batcaverna",
    cidade: "Gothan City",
    estado: "Nova Jersey",   
}
console.log(endereco1)

//"... spred operator" União de duas estruturas de dados
const funcionario3 = {
    nome: "Alfred Pennywort",
    cargo: "Mordomo",
    email: "alfred@gmail.com",
    salario: 20000,
    ...endereco1
}
console.log(funcionario3)

const funcionario4 = {
    nome: "Dick Grayson",
    cargo: "Acrobata",
    email: "robin@gmail.com",
    salario: 2000,
    ...endereco1
} 
console.log(funcionario4)

const funcionario5 = {
    nome: "Tony Stark",
    cargo: "Engenheiro",
    email: "ironman@gmail.com",
    salario: 375000,
    armadura:{
        versao: "Mark II",
        ano: 2010,
        reator: "Arc 01",
    },
    suitUp: () => {
        console.log("🤖")
    }
}
console.log(funcionario5)
console.log(funcionario5.cargo)
console.log(funcionario5.armadura.versao)
funcionario5.suitUp() //executar a função interna da estrurura de dados