        const itens_mobile = document.querySelectorAll('.itens-mobile');
        function activeLink() {
            itens_mobile.forEach((item) =>
                item.classList.remove('active'));
            this.classList.add('active');
        }
        itens_mobile.forEach((item) =>
            item.addEventListener('click', activeLink));




// Filtro mobile

const mostrar_filtros = document.querySelector('.ver_filtros');
const filtro_mobile = document.querySelector('.filtros-mobile');
const texto_exibir = document.querySelector('.exibir');

let aberto = false;

mostrar_filtros.addEventListener('click', function() {

    if (!aberto) {
        // MOSTRAR
        filtro_mobile.style.display = 'flex';

        gsap.fromTo(filtro_mobile,
            { y: -50, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.4, ease: "power2.out" }
        );

        texto_exibir.textContent = 'Ocultar';
        aberto = true;

    } else {
        // ESCONDER
        gsap.to(filtro_mobile, {
            y: -50,
            opacity: 0,
            duration: 0.3,
            ease: "power2.in",
            onComplete: () => {
                filtro_mobile.style.display = 'none';
            }
        });

        texto_exibir.textContent = 'Exibir';
        aberto = false;
    }

});
