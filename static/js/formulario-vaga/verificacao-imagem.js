        const inputImagem = document.getElementById('inputImagem');
        const nomeArquivo = document.getElementById('nomeArquivo');
        const previewImagem = document.getElementById('preview');

        inputImagem.addEventListener('change', () => {
            const arquivo = inputImagem.files[0];

            if (!arquivo) return;

            // valida se é imagem
            if (!arquivo.type.startsWith('image/')) {
                alert('Por favor, selecione apenas imagens.');
                inputImagem.value = "";
                return;
            }

            // mostra nome
            nomeArquivo.textContent = "Arquivo: " + arquivo.name;

            // preview da imagem
            const leitor = new FileReader();

            leitor.onload = (e) => {
                previewImagem.innerHTML = `<img src="${e.target.result}" alt="Preview">`;
            };

            leitor.readAsDataURL(arquivo);
        });
