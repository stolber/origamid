// 1 - CRIE UM CIRCULO COM UMA DIV DE 50x50 E BACKGROUND AZUL;
// 2 - ADICIONE AO WINDOW UMA FUNÇÃO QUE OCORRE AO MOVER O MOUSE
// 3 - NA FUNÇÃO MUDE AS PROPRIEDADES TOP E LEFT DO CURCULO COM BASE NO MOUSE
// 4 - VOCE PODE USAR ELEMENTO.STYLE.PROP PARA MUDAR O CSS DIRETAMENTE

const bola = document.querySelector('.bola');

function mexeBola(e) {
    bola.style.top = e.y + "px";
    bola.style.left = e.x + "px";
}

window.addEventListener('mousemove', mexeBola);