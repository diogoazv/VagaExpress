const nomeInput = document.querySelector('#nome');
const sobrenomeInput = document.querySelector('#sobrenome');
const radios = document.querySelectorAll('input[name="tipo"]');
const perfil = document.querySelector('#foto-perfil-img');
const avatares = document.querySelectorAll('.avatar-img');
const btnCriarPerfil = document.querySelector('#criar-perfil');
const avatarInput = document.querySelector('#avatar-input');


//FUNÇAO popup
function mostrarpopup(mensagem) {
    const popup = document.getElementById("popup");
    const texto = document.getElementById("popup-msg");

    texto.textContent = mensagem;

    popup.classList.add("show");

    setTimeout(() => {
        popup.classList.remove("show");
    }, 4000);
}




// TROCAR AVATAR
avatares.forEach(avatar => {
    avatar.addEventListener('click', () => {
        const src = avatar.getAttribute('src');
        perfil.src = src;
        avatarInput.value = src; // envia pro backend
    });
});

// DEFINE AVATAR PADRÃO
window.addEventListener('DOMContentLoaded', () => {
    avatarInput.value = perfil.src;
});

// VALIDAÇÃO
document.querySelector("form").addEventListener("submit", (e) => {
    const selecionado = document.querySelector('input[name="tipo"]:checked');

    if (!nomeInput.value || !sobrenomeInput.value || !selecionado) {
        e.preventDefault();
        mostrarpopup("Preencha todos os campos!");
    }
});




