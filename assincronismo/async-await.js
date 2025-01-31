/**
 * Uso de async-await (Sintaxe moderna do JS para lidar com assincronismo)
 * @author Denis D'Angelo
 */


//importar biblioteca nativa do JS para trabalhar com arquivos
const fs = require('fs')
const input = require('readline-sync')

function criarArquivo(){
    let conteudo = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\nSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
    gravarArquivo("teste.txt", conteudo)
}
                            //path é para gravar o arquivo no local. Se fosse em outro locar teria que colocar o caminho do diretório
async function gravarArquivo(path, conteudo){
    try {
        await fs.promises.writeFile(path,conteudo)
        console.log("Arquivo criado com sucesso")
    } catch (error) {
        console.log(error)
    }
}

console.clear()
criarArquivo()