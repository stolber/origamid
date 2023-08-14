const titulo = document.querySelector('.tituloPrincipal')

titulo.innerText; // RETORNA O TEXTO
titulo.classList; // RETORNA AS CLASSES
titulo.id; // RETORNA O ID
titulo.offsetHeight; // RETORNA A ALTURA DO ELEMENTO



function clicou() {
    console.log('Cliclou em ', titulo.innerText);
}

titulo.addEventListener('click', clicou);