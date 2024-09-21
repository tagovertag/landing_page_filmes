
function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = ''; // Limpa o conteúdo original

    let index = 0;

    function escrever() {
        if (index < textoArray.length) {
            elemento.innerHTML += textoArray[index];
            index++;
            setTimeout(escrever, 75); // Chama a função novamente após 75ms
        } else {
            setTimeout(() => {
                elemento.innerHTML = ''; // Limpa o texto após a animação
                index = 0;
                escrever(); // Reinicia a animação
            }, 6000); // Tempo de espera antes de reiniciar a animação
        }
    }

    escrever(); // Inicia a animação
}

const titulo = document.querySelector('.machine');
typeWriter(titulo);

