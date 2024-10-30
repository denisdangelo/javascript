/**
 * Estudo das funções com parametros e retorno
 * @author Denis D'Angelo
 */

//dentro dos parenteses, ficam os parametros que são variaveis
function somar(a, b){
    return (console.log(a + b))
}

//chamo a função e atribuo o valor das variaveis
somar(5, 2)

const somarA = function (a, b){
    return (console.log(a + b))
}

somarA(5, 3)

const somarAF = ( a, b) => {
    return console.log(a + b)
}

somarAF(2, 2)

//na função abaixo o retorno (return) é implícito
const somarAFS = (a,b) => console.log (a + b)
somarAFS(3, 9)