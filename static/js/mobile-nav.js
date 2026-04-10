        const itens_mobile = document.querySelectorAll('.itens-mobile');
        function activeLink() {
            itens_mobile.forEach((item) =>
                item.classList.remove('active'));
            this.classList.add('active');
        }
        itens_mobile.forEach((item) =>
            item.addEventListener('click', activeLink));
