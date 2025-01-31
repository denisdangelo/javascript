/**
 * Assincronismo
 * Promise
 * @author Denis D'Angelo
*/

const input = require('readline-sync')

let login, senha
//estrutura de dados (simular um banco de dados)

const database = {
    admin: {
        usuario: "Administrador",
        senha: "password"
    },
    prof: {
        usuario: "Leandro Ramos",
        senha: "123456"
    }
}

//autenticação do usuário
console.clear()
console.log("-----------------------------")
console.log("          USUARIO")
console.log("-----------------------------")
login = input.question("login: ")
senha = input.question("senha: ")
console.log("-----------------------------")

function logar(login, senha) {
    //uso de promise (acesso ao banco)
    return new Promise((resolv, reject) => {
        //simulação de delay no acesso ao banco
        setTimeout(() => {
            //se existir no banco de dados o usuário
            if (database.hasOwnProperty(login)) {
                //se a senha estiver correta
                if(database[login].senha === senha) {
                    resolv("Autenticação bem sucedida. Ola " + database[login].usuario)
                } else {
                    reject("Senha incorreta. Por favor tente novamente.")
                }
            } else {
                reject("Usuario nao encontrado. Por favor verifique o login")
            }
        }, 2000)
    })
}

//executar a função logar
// no uso de promise é necessário usar o .then
logar(login, senha)
    .then((message) => {
        console.log(message)
    })
    .catch((error) => {
       console.log("Erro de autenticacao. " + error)
    })


    