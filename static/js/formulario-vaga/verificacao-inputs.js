// barra de progresso (contato)
const barraContato = document.getElementById("barra-progresso-preenchido-info-contato");
const nome = document.getElementById("nome-empregador");
const telefone = document.getElementById("telefone-empregador");
const email = document.getElementById("email-empregador");
const iconeBarraContato = document.getElementById("icone-verificado");

// barra de progresso (vaga)
const barraInfoVaga = document.getElementById("barra-progresso-preenchido-info-vaga");
const nomeEmpresa = document.getElementById("nome-empresa");
const nomeVaga = document.getElementById("nome-vaga");
const salario = document.getElementById("valor-salario");
const local = document.getElementById("local-vaga");
const tipoContrato = document.getElementById("tipo-contrato");
const modeloTrabalho = document.getElementById("modelo-trabalho");
const iconeBarraVaga = document.getElementById("icone-verificado-vaga");



// VALIDACOES CONTATO

// valida nome (minimo 3 caracteres)
function validarNomeEmpregador(input) {
    const valor = input.value.trim();

    if (valor === "") {
        // campo vazio
        input.classList.remove("input-valido", "input-erro");
        return false;
    }

    if (valor.length >= 3) {
        // valido 
        input.classList.add("input-valido");
        input.classList.remove("input-erro");
        return true;
    } else {
        // invalido menor que 3 caracter
        input.classList.remove("input-valido");
        input.classList.add("input-erro");
        return false;
    }
}

// valida email com regex
function validarEmail(input) {
    const valor = input.value.trim();
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (valor === "") {
        // campo vazio nada digitado
        input.classList.remove("input-valido", "input-erro");
        return false;
    }

    if (regex.test(valor)) {
        // valido
        input.classList.add("input-valido");
        input.classList.remove("input-erro");
        return true;
    } else {
        // formato errado
        input.classList.remove("input-valido");
        input.classList.add("input-erro");
        return false;
    }
}

// mascara telefone enquanto digita
function aplicarMascaraTelefone(input) {
    let valor = input.value.replace(/\D/g, "");

    if (valor.length > 11) valor = valor.slice(0, 11);

    valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2");
    valor = valor.replace(/(\d{5})(\d)/, "$1-$2");

    input.value = valor;
}

// valida telefone (11 numeros)
function validarTelefone(input) {
    const valor = input.value.replace(/\D/g, "");

    if (valor === "") {
        input.classList.remove("input-valido", "input-erro");
        return false;
    }

    if (valor.length === 11) {
        input.classList.add("input-valido");
        input.classList.remove("input-erro");
        return true;
    } else {
        input.classList.remove("input-valido");
        input.classList.add("input-erro");
        return false;
    }
}



// VALIDACOES VAGA

// valida campos de texto (empresa, vaga, local)
function validarNomes(input) {
    const valor = input.value.trim();

    if (valor === "") {
        input.classList.remove("input-valido", "input-erro");
        return false;
    }

    if (valor.length >= 3) {
        input.classList.add("input-valido");
        input.classList.remove("input-erro");
        return true;
    } else {
        input.classList.remove("input-valido");
        input.classList.add("input-erro");
        return false;
    }
}

// valida select (nao pode estar vazio)
function validarSelect(select) {
    const valor = select.value.trim();

    if (valor === "") {
        select.classList.remove("input-valido", "input-erro");
        return false;
    }

    select.classList.add("input-valido");
    select.classList.remove("input-erro");
    return true;
}


// SALARIO
// formata salario enquanto digita (R$ 1.234,56)
function formatarSalario(input) {
    let valor = input.value.replace(/\D/g, ""); // remove tudo que nao e numero

    valor = Number(valor) / 100; // transforma em decimal

    valor = valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });

    input.value = valor;
}

// valida salario (maior que 0)
function validarSalario(input) {
    const valorLimpo = input.value.replace(/\D/g, "");

    // campo vazio
    if (valorLimpo === "") {
        input.classList.remove("input-valido", "input-erro");
        return false;
    }

    const numero = Number(valorLimpo) / 100;

    if (numero === 0) {
        input.classList.remove("input-valido");
        input.classList.add("input-erro");
        return false;
    }

    input.classList.add("input-valido");
    input.classList.remove("input-erro");
    return true;
}


function obterSalarioNumerico(input) {
    return Number(input.value.replace(/\D/g, "")) / 100;
}



// BARRAS DE PROGRESSO
// barra contato
function atualizarBarraContato() {
    let preenchidos = 0;

    if (validarNomeEmpregador(nome)) preenchidos++;
    if (validarTelefone(telefone)) preenchidos++;
    if (validarEmail(email)) preenchidos++;

    const progresso = (preenchidos / 3) * 100;
    barraContato.style.width = progresso + "%";

    iconeBarraContato.style.display = preenchidos === 3 ? "flex" : "none";
}

// barra vaga
function atualizarBarraVaga() {
    let preenchidos = 0;

    if (validarNomes(nomeEmpresa)) preenchidos++;
    if (validarNomes(nomeVaga)) preenchidos++;
    if (validarSalario(salario)) preenchidos++;
    if (validarNomes(local)) preenchidos++;
    if (validarSelect(tipoContrato)) preenchidos++;
    if (validarSelect(modeloTrabalho)) preenchidos++;

    const progresso = (preenchidos / 6) * 100;
    barraInfoVaga.style.width = progresso + "%";

    iconeBarraVaga.style.display = preenchidos === 6 ? "flex" : "none";
}

// funcao geral
function atualizarBarra() {
    atualizarBarraContato();
    atualizarBarraVaga();
}



// valida nome enquanto digita
nome.addEventListener("input", () => {
    validarNomeEmpregador(nome);
});

// inputs contato atualizam barra
[nome, email].forEach(input => {
    input.addEventListener("input", atualizarBarra);
});

// telefone aplica mascara e atualiza barra
telefone.addEventListener("input", () => {
    aplicarMascaraTelefone(telefone);
    atualizarBarra();
});

// salario com formatacao e barra
salario.addEventListener("input", () => {
    formatarSalario(salario);
    atualizarBarra();
});

// inputs vaga atualizam barra
[nomeEmpresa, nomeVaga, local].forEach(input => {
    input.addEventListener("input", atualizarBarra);
});

// selects atualizam barra
[tipoContrato, modeloTrabalho].forEach(select => {
    select.addEventListener("change", atualizarBarra);
});