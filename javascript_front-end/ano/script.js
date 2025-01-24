/**
 * Ano automático
 * @author Professor José de Assis
 */

// inserindo o ano na tag<span>
let ano = document.getElementById('copyrightYear')
let anoAtual = new Date().getFullYear()
ano.innerHTML = anoAtual