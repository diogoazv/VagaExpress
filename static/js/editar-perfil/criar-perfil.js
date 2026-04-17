const nomeInput = document.querySelector('#nome');
const sobrenomeInput = document.querySelector('#sobrenome');
const radios = document.querySelectorAll('input[name="tipo"]');
const perfil = document.querySelector('#foto-perfil-img');
const avatares = document.querySelectorAll('.avatar-img');
const btnCriarPerfil = document.querySelector('#criar-perfil');


//FUNÇAO popup
function mostrarToast(mensagem) {
    const popup = document.getElementById("popup");
    const texto = document.getElementById("popup-msg");

    texto.textContent = mensagem;

    popup.classList.add("show");

    setTimeout(() => {
        popup.classList.remove("show");
    }, 4000);
}


// SALVAR
btnCriarPerfil.addEventListener('click', () => {

    const selecionado = document.querySelector('input[name="tipo"]:checked');

    //VALIDAÇAO
    if (!nomeInput.value || !sobrenomeInput.value || !selecionado) {
        mostrarToast("Preencha todos os campos!");
        return;
    }

    const dadosPerfil = {
        nome: nomeInput.value,
        sobrenome: sobrenomeInput.value,
        tipo: selecionado.value,
        avatar: perfil.src
    };

    localStorage.setItem('dadosPerfil', JSON.stringify(dadosPerfil));

    console.log('Perfil salvo:', dadosPerfil);

    //POP UP SUCESSO
    mostrarToast("Perfil salvo com sucesso!");

});


// CARREGAR
const dadosPerfilSalvos = localStorage.getItem('dadosPerfil');

if (dadosPerfilSalvos) {
    const dadosPerfil = JSON.parse(dadosPerfilSalvos);

    nomeInput.value = dadosPerfil.nome;
    sobrenomeInput.value = dadosPerfil.sobrenome;

    radios.forEach(radio => {
        if (radio.value === dadosPerfil.tipo) {
            radio.checked = true;
        }
    });

    perfil.src = dadosPerfil.avatar;
}


// TROCAR AVATAR
avatares.forEach(avatar => {
    avatar.addEventListener('click', () => {
        perfil.src = avatar.getAttribute('src');
    });
});