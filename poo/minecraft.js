/**
 * Fundamentos da POO
 * Abtração, Herança e polimorfismo
 * @author Denis D'Angelo
 */

console.clear()

//criando a classe modelo - letra maiuscula é para classe modelo
class Bloco {
    //atributos
    constructor(textura, resistencia) {
        this.textura = textura
        this.resistencia = resistencia
    }
    //metodos
    criarBloco() {
        console.log("------------------------------------------------------------")
        console.log("┌─┐")
        console.log("└─┘")
        console.log(`Bloco de ${this.textura}`)
        console.log(`Resistencia: ${this.resistencia}`)
    }
    construir() {
        console.log(`Bloco de ${this.textura} colocado`)
    }
    minerar() {
        console.log("□ □ □ □ Recursos obtidos!")
    }
}

// Herança - extends relaciona a classe criada com a classe herdada
//nesse caso a classe Enxada herda os recursos da classe Bloco
//obs: a classe bloco não pode utilizar os recursos da classe Enxada
class Enxada extends Bloco {
    //atributo
    constructor(textura, resistencia, conquista) {
        super(textura, resistencia)//super reutiliza a herança
        this.conquista = conquista
    }
    //metodos
    criarEnxada() {
        console.log("----------------------------------------------")
        console.log("-__")
        console.log("  /")
        console.log(" / ")
        console.log(`Enxada de ${this.textura} criada`)
        console.log(`Resistencia: ${this.resistencia}`)
    }
    arar() {
        console.log("._._._.")
        if (this.conquista === true) {
            console.log("☀ Conquista obtida!")
        }
    }
    //polimorfismo: mudança de comportamento de um método que já existe na classe modelo (pai)
    //no exemplo a classe Bloco
    //Atenção. Obrigatório usar o mesmo nome do metodo a ser alterado
    minerar() {
        console.log("✞ Dano atribuído!")
    }
}

/*****************mundo********************/
console.log(" _____ _____ _____ _____ _____ _____ _____ _____ _____ ")
console.log("|     |     |   | |   __|     | __  |  _  |   __|_   _|")
console.log("| | | |-   -| | | |   __|   --|    -|     |   __| | |  ")
console.log("|_|_|_|_____|_|___|_____|_____|__|__|__|__|__|    |_|  ")
console.log("")

//Instanciando (criando) um objeto
//new serve para criar um novo objeto

const bloco1 = new Bloco("terra", 1)
bloco1.criarBloco()

const bloco2 = new Bloco("madeira", 2)
bloco2.criarBloco()
bloco2.construir()

const bloco3 = new Bloco("pedra", 5)
bloco3.criarBloco()
bloco3.minerar()

const enxada1 = new Enxada("Madeira", 2, false)
enxada1.criarEnxada()
enxada1.arar()

const enxada2 = new Enxada("Ferro", 5, true)
enxada2.criarEnxada()
enxada2.arar()

const enxada3 = new Enxada("Diamante", 10, false)
enxada3.criarEnxada()
enxada3.minerar()