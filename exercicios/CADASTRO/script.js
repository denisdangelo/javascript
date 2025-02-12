function buscarEndereco() {
    // Obtém o valor do CEP, removendo qualquer caractere não numérico
    var cep = document.getElementById('cep').value

    // Verifica se o CEP tem 8 dígitos
    if (cep.length === 8) {
        var url = `https://viacep.com.br/ws/${cep}/json/`;

        // Faz a requisição ao ViaCEP
        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data.erro) {
                    alert('CEP não encontrado');
                } else {
                    // Preenche os campos com os dados retornados
                    document.getElementById('logradouro').value = data.logradouro;
                    document.getElementById('bairro').value = data.bairro;
                    document.getElementById('cidade').value = data.localidade;
                    document.getElementById('uf').value = data.uf;
                }
            })
            .catch(error => {
                alert('Erro ao buscar o CEP');
            });
    } else {
        alert('CEP inválido');
    }
}

function validarCPF() {
    var campo = document.getElementById('ccpf');
    var strCPF = campo.value.replace(/\D/g, ''); // Remove caracteres não numéricos

    if (!TestaCPF(strCPF)) {
        alert("CPF inválido!");
        campo.value = ""; // Limpa o campo
        campo.focus(); // Retorna o foco ao campo
    }
}

function TestaCPF(strCPF) {
    var Soma = 0;
    var Resto;

    if (strCPF.length !== 11 || /^(\d)\1{10}$/.test(strCPF)) return false; // Verifica se são 11 dígitos e se não são repetidos

    for (var i = 1; i <= 9; i++) {
        Soma += parseInt(strCPF.charAt(i - 1)) * (11 - i);
    }
    Resto = (Soma * 10) % 11;

    if (Resto === 10 || Resto === 11) Resto = 0;
    if (Resto !== parseInt(strCPF.charAt(9))) return false;

    Soma = 0;
    for (var i = 1; i <= 10; i++) {
        Soma += parseInt(strCPF.charAt(i - 1)) * (12 - i);
    }
    Resto = (Soma * 10) % 11;

    if (Resto === 10 || Resto === 11) Resto = 0;
    if (Resto !== parseInt(strCPF.charAt(10))) return false;

    return true;
}
