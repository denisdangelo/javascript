/**
 * Slide show
 * @author Professor José de Assis
 */

// array(vetor) de imagens
let slides = ["banner1.jpg", "banner2.jpg", "banner3.jpg"]
let intervalo = 3000 //(3000ms = 3s (1s por imagem))
let indice = 0 // apoio a lógica (índice do array)


// Função para troca das imagens
function show() {
    // capturar o id do banner
    const slide = document.getElementById('slide')
    
    //Efeito de entrada
    //A estrutura a baixo verifica se a classe 'slideOut' foi atribuido ao identificador slide
    //'contains' verifica, 'revome' remove e 'add' adiciona a classe, respectivamente 
    if(slide.classList.contains('slideOut')){
        slide.classList.remove('slideOut')
    }
    slide.classList.add('slideIn')

    //troca de imagem
    setTimeout(() => {
        indice++
        if(indice >= slides.length){
            indice = 0
        }
        slide.src = `img/${slides[indice]}`
    

    //Efeito de saida

    if(slide.classList.contains('slideIn')){
        slide.classList.remove('slideIn')
    }
    slide.classList.add('slideOut')
    },1000)
    // Intervalo para próxima execução (loop infinito)
    setTimeout(show, intervalo)
}

// executar a função ao iniciar o documento js
show()