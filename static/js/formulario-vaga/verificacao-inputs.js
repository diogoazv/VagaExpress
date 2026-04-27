// pega os elementos do HTML
const barraContato = document.getElementById("barra-progresso-preenchido-info-contato");
const nome = document.getElementById("nome-empregador");
const telefone = document.getElementById("telefone-empregador");
const email = document.getElementById("email-empregador");
const iconeBarraContato = document.getElementById("icone-verificado");

// Segunda barra de Progresso
const barraInfoVaga = document.getElementById("barra-progresso-preenchido-info-vaga");
const nomeEmpresa = document.getElementById("nome-empresa");
const nomeVaga = document.getElementById("nome-vaga");
const salario = document.getElementById("valor-salario");
const local = document.getElementById("local-vaga");
const tipoContrato = document.getElementById("tipo-contrato");
const modeloTrabalho = document.getElementById("modelo-trabalho");
const iconeBarraVaga = document.getElementById("icone-verificado-vaga");

// VALIDAÇOES
// valida se o campo nao esta vazio
function validarCampo(input) {
    const valor = input.value.trim(); // remove espacos antes/depois

    if (valor !== "") {
        // se tiver algo digitado
        input.classList.add("input-valido");
        input.classList.remove("input-erro");
        return true;
    } else {
        // se estiver vazio
        input.classList.remove("input-valido");
        input.classList.add("input-erro");
        return false;
    }
}

// valida email usando regex (formato padrao)
function validarEmail(input) {
    const valor = input.value.trim();
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // padrao de email

    if (regex.test(valor)) {
        // email válido
        input.classList.add("input-valido");
        input.classList.remove("input-erro");
        return true;
    } else {
        // email inválido
        input.classList.remove("input-valido");
        input.classList.add("input-erro");
        return false;
    }
}

// aplica mascara no telefone enquanto o usuario digita
function aplicarMascaraTelefone(input) {
    let valor = input.value.replace(/\D/g, ""); // remove tudo que nao e numero

    // limita no maximo 11 numeros
    if (valor.length > 11) valor = valor.slice(0, 11);

    // adiciona (11)
    valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2");

    // adiciona traço 98765-4321
    valor = valor.replace(/(\d{5})(\d)/, "$1-$2");

    // atualiza o valor do input ja formatado
    input.value = valor;
}

// valida se o telefone tem 11 digitos (formato celular br)
function validarTelefone(input) {
    const valor = input.value.replace(/\D/g, ""); // pega so numeros

    if (valor.length === 11) {
        // telefone valido
        input.classList.add("input-valido");
        input.classList.remove("input-erro");
        return true;
    } else {
        // telefone incompleto ou invalido
        input.classList.remove("input-valido");
        input.classList.add("input-erro");
        return false;
    }
}

// valida se o campo nao esta vazio
function validarSelect(select) {
    const select_option = select.value.trim();
    
    if (select_option !== "") {
        select.classList.add("input-valido");
        select.classList.remove("input-erro");
        return true;
    } else {
        select.classList.remove("input-valido");
        select.classList.add("input-erro");
        return false;
    }
}




// FUNÇAO PRINCIPAL
function atualizarBarraContato() {
    let preenchidos = 0;    // contador de campos validos

    // valida cada campo e soma se estiver ok
    if (validarCampo(nome)) preenchidos++;
    if (validarTelefone(telefone)) preenchidos++;
    if (validarEmail(email)) preenchidos++;

    const totalCampos = 3;    // total de campos
    const progresso = (preenchidos / totalCampos) * 100;    // calcula porcentagem

    // atualiza largura da barra
    barraContato.style.width = progresso + "%";

    // mostra icone so quando tudo estiver valido
    if (preenchidos === totalCampos) {
        iconeBarraContato.style.display = "flex";
    } else {
        iconeBarraContato.style.display = "none";
    }
}

function atualizarBarraVaga() {
    let preenchidos = 0;

    if (validarCampo(nomeEmpresa)) preenchidos++;
    if (validarCampo(nomeVaga)) preenchidos++;
    if (validarCampo(salario)) preenchidos++;
    if (validarCampo(local)) preenchidos++;
    if (validarSelect(tipoContrato)) preenchidos++;
    if (validarSelect(modeloTrabalho)) preenchidos++;

    const totalCampos = 6;
    const progresso = (preenchidos / totalCampos) * 100;

    barraInfoVaga.style.width = progresso + "%";

    if (preenchidos === totalCampos) {
        iconeBarraVaga.style.display = "flex";
    } else {
        iconeBarraVaga.style.display = "none";
    }
}

function atualizarBarra() {
    atualizarBarraContato();
    atualizarBarraVaga();
}





// Barra-Informacoes-Contato   Somente inputs atualiza a barra
[nome, email].forEach(input => {
    input.addEventListener("input", atualizarBarra);
});

// Barra-Informacoes-Contato   telefone precisa aplicar mascara e atualizar a barra
telefone.addEventListener("input", () => {
    aplicarMascaraTelefone(telefone); // formata enquanto digita
    atualizarBarra(); // recalcula progresso
});

// Barra-Informacoes-Vaga   Somente inputs atualiza a barra
[nomeEmpresa, nomeVaga, salario, local].forEach(input => {
    input.addEventListener("input", atualizarBarra)
});

// Barra-Informacoes-Vaga   Somente Selects atualiza a barra
[tipoContrato, modeloTrabalho].forEach(select => {
    select.addEventListener("change", atualizarBarra);
});

