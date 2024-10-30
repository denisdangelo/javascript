/**
 * Estudo das funções simples
 * @author Denis D'Angelo
*/

    //chamar a função
    
hello()
    
//função literal, pode ser chamada a qualque momento
    //criar a função
function hello(){
    console.log("Hello function")
}
console.log(typeof(hello))

    //função atribuida, só pode ser chamada após sua criação
    //funções atribuidas devem ser criadas no inicio do código (antes da chamada da função)
    //"function()"" é uma função anonima

const hello2 = function() {
    console.log("Hello function2")
}
hello2()
console.log(typeof(hello2))

    //função atribuida, da no mesmo que a hello2. Chamada de arowFunction

const hello3 = () => {
    console.log("Hello function3")
}
hello3()
console.log(typeof(hello3))


    // Arrow Function mais simpçificada (neste caso só é possivel executar 1 linha de codigo)

const hello4 = _ => console.log("Hello function4")
hello4()
console.log(typeof(hello4))
