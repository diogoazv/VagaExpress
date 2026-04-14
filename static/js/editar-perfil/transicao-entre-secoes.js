const btnComecar = document.querySelector('.btn-comecar');
const btnVoltar = document.querySelector('.btn-voltar');

const secao1 = document.querySelector('.secao1');
const secao2 = document.querySelector('.secao2');






btnComecar.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
            // secao1 sai pra esquerda
    secao1.style.transform = "translateX(-100%)";
    secao1.style.opacity = "0";

    // secao2 entra da direita
    secao2.style.transform = "translateX(0%)";
    secao2.style.opacity = "1";
}
    else {
        // efeito para desktop: secao 2 tem um leve desfoque
       secao2.style.transition = "filter 0.3s ease";
        secao2.style.filter = "blur(2px)";

        setTimeout(() => {
            secao2.style.filter = "blur(0px)";
        }, 300);
    }

});

btnVoltar.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
        // secao2 sai pra direita
    secao2.style.transform = "translateX(100%)";
    secao2.style.opacity = "0";

    // secao1 volta
    secao1.style.transform = "translateX(0%)";
    secao1.style.opacity = "1";

}
    
});