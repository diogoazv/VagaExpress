        const secao_vagas = document.querySelectorAll('.secao-vagas');
        const footer = document.querySelectorAll('.footer');
        const nav_mobile = document.querySelectorAll('.nav-mobile');
        const buscar_vaga = document.getElementById('buscar_vaga');


        buscar_vaga.addEventListener('click', () => {
            secao_vagas.forEach(secao => {
                secao.style.display = 'block';
            });
            footer.forEach(rodape => {
                rodape.style.display = 'block';
            });
            nav_mobile.forEach(nav => {
                nav.style.display = 'flex';
            });
        });
