const imgBicicleta = document.querySelectorAll('.bicicleta-imagens img');

function trocaImg(event) {
    const principal = document.querySelector('.bicicleta-principal');
    const clicada = event.currentTarget;
    console.log(clicada);
    principal.src = clicada.src;
}

function clicarImg(imagem) {
    imagem.addEventListener('click', trocaImg)
}

imgBicicleta.forEach(clicarImg);
