/**
 * Fundamentos da POO
 * poo Encapsulamento (Segurança)
 * @author Denis D'Angelo
 */

console.clear()

//criando a classe modelo
class User {
    //atributos - variaveis da classe
    constructor(login, senha){
        this.login = login
        //Encapsulamento
        let _senha = senha //colcoar o underline "_" antes da variavel deixa ela privada, encapsulada.
        this.getSenha = () => _senha //leitura do atributo senha
        this.setSenha = (novaSenha) => _senha = novaSenha //escrita do atributo senha
    }
    //metodo
    logar(){
        console.log("__________________________________________")
        console.log(`Usuário: ${this.login}`)
        console.log(`Senha: ${this.getSenha()}`)
        if (this.login === 'admin' && this.getSenha() === '123@senac') {
            console.log("Usuário autenticado")
        } else {
            console.log("Usuário e ou senha invalido")            
        }
    }
}

//criando um novo objeto
const user1 = new User("admin", "1234") //parametros dentro dos parênteses
user1.logar()
user1.setSenha("123@senac")
user1.logar()

