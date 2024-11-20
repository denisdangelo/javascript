/**
 * Fundamentos da POO
 * Abtração, Herança e polimorfismo - cliando o Objeto Carro e utilizando em Avião.
 * @author Denis D'Angelo
 */

console.clear()

//criando a classe modelo Carro
class Carro{
    constructor(ano, cor){
        this.ano = ano
        this.cor = cor
    }
    //Metodos
    criarCarro(){
        console.log(`carro ${this.cor}, ano ${this.ano} Criado`)
    }
    ligar(){
        console.log(`carro ${this.cor}, ano ${this.ano} Ligado`)
    }
    desligar(){
        console.log(`carro ${this.cor}, ano ${this.ano} Desligado`)
    }
    acelerar(){
        console.log(`carro ${this.cor}, ano ${this.ano} Acelerando`)
    }
    parar(){
        console.log(`carro ${this.cor}, ano ${this.ano} Parado`)
    }
}

class Aviao extends Carro{
    //se eu não for usar ano e cor preciso colocar também na nova classe?
    constructor (ano, cor, envergadura){
        super(ano, cor)
        this.envergadura = envergadura
    }
    //metodos
    criarAviao(){
        console.log(`Avião ${this.cor}, ano ${this.ano} de ${this.envergadura} metros, foi criado`)
    }
    acelerar(){
        console.log(`Avião ${this.cor}, alçando voo`)
    }
    aterrizar(){
        console.log(`Avião ${this.cor}, aterrizando`)
    }
}


/***************** Tester ******************/
const carro1 = new Carro (1998 , "Vermelho")
carro1.criarCarro()
carro1.ligar()
carro1.acelerar()
carro1.parar()
carro1.desligar()

const carro2 = new Carro (1976 , "Cinza Chumbo")
carro1.criarCarro()
carro1.ligar()
carro1.acelerar()
carro1.parar()
carro1.desligar()

const aviao1 = new Aviao (1985, "Azul", 12)
aviao1.criarAviao()
aviao1.acelerar()
aviao1.aterrizar()