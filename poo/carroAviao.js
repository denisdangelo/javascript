/**
 * Fundamentos da POO
 * Abtração, Herança e polimorfismo - cliando o Objeto Carro e utilizando em Avião.
 * @author Denis D'Angelo
 */

console.clear()

//criando a classe modelo Carro
class Carro {
    constructor(modelo, ano, cor) {
        this.modelo = modelo
        this.ano = ano
        this.cor = cor
    }

//Metodos
criarCarro(){

    console.log("  ______")
    console.log("  /|_||_\\`.__")
    console.log(" (   _    _ _\\")
    console.log("=`-(_)--(_)-'")
    console.log(`${this.modelo},cor ${this.cor}, ano ${this.ano} Criado`)

}
ligar(){
    console.log(`${this.modelo} Ligado`)
}
desligar(){
    console.log(`${this.modelo} Desligado`)
}
acelerar(){
    console.log(`${this.modelo} Acelerando`)
}
parar(){
    console.log(`${this.modelo} Parado`)
}
}

class Aviao extends Carro {
    //se eu não for usar ano e cor preciso colocar também na nova classe?
    constructor(modelo, ano, cor, envergadura) {
        super(modelo, ano, cor)
        this.envergadura = envergadura
    }
    //metodos
    criarAviao() {
        console.log("       ____")
        console.log("--@--@|____\\__")
        console.log("       |       \\")
        console.log("       |_______/")
        console.log("          O")
        console.log(`Avião ${this.modelo}, ${this.cor}, ano ${this.ano} de ${this.envergadura} metros, foi criado`)
    }
    acelerar() {
        console.log(`Avião ${this.modelo}, alçando voo`)
    }
    aterrizar() {
        console.log(`Avião ${this.modelo}, aterrizando`)
    }
}


/***************** Tester ******************/
const carro1 = new Carro("camaro", 1998, "Vermelho")
carro1.criarCarro()
carro1.ligar()
carro1.acelerar()
carro1.parar()
carro1.desligar()

const carro2 = new Carro("Fusca", 1976, "Cinza Chumbo")
carro2.criarCarro()
carro2.ligar()
carro2.acelerar()
carro2.parar()
carro2.desligar()

const aviao1 = new Aviao("Boeing", 1985, "Azul", 12)
aviao1.criarAviao()
aviao1.acelerar()
aviao1.aterrizar()


