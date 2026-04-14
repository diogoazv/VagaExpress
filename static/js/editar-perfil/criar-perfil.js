const nomeInput = document.querySelector('#nome');
const sobrenomeInput = document.querySelector('#sobrenome');
const radios = document.querySelectorAll('input[name="tipo"]');

const perfil = document.querySelector('#foto-perfil-img');
const avatares = document.querySelectorAll('.avatar-img');

const btnSalvarPerfil = document.querySelector('#salvar-perfil');

// SALVAR
btnSalvarPerfil.addEventListener('click', () => {
    const selecionado = document.querySelector('input[name="tipo"]:checked');

    const dadosPerfil = {
        nome: nomeInput.value,
        sobrenome: sobrenomeInput.value,
        tipo: selecionado ? selecionado.value : null,
        avatar: perfil.src
    };

    localStorage.setItem('dadosPerfil', JSON.stringify(dadosPerfil));
    console.log('Perfil salvo:', dadosPerfil);
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

//  seleção
radios.forEach(radio => {
    radio.addEventListener('change', () => {
        console.log(radio.value);
    });
});

// troca AVATAR
avatares.forEach(avatar => {
    avatar.addEventListener('click', () => {
        perfil.src = avatar.src;
    });
});
