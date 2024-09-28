/**
 * Sintaxe básica da linguagem js
 * @Author Denis D'Angelo
 */

//Limpar a tela do console
console.clear()

//JS - Sentença e ";" opcional
console.log("Hello World");

// Concatenação - Unir textos e variaveis
let nome = "Denis"
console.log(`Nome:  ${nome}`)
console.log("Nome: " + nome) //não recomendado pois transforma a variavel numa string e pode gerar erros no código

// Arredondamento
let media = 5.789
console.log(`Media: ${media.toFixed(1)}`) // toFixed(2) fixa o valor após a cada decimal em 2 O valor dentro de parenteses determina quantas linhas 
                                          //após a casa decimal serão exibidas

// identificando variáveis inteira e não inteiras
console.log(Number.isInteger(idade))
console.log(Number.isInteger(altura))

//particularidade do JS
console.log(10 / 0)
console.log(0.5 + 0.5)
console.log(0.1 + 0.1)
console.log("3" + 2)
console.log("3" - 2)
console.log("3x" - 2)