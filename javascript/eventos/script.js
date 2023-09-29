/* const ativar = document.querySelector('.ativar');

/** @param {MouseEvent} event */
/* function ativarAoClick(event) {
    console.log(event.x)
}
ativar.addEventListener('click', ativarAoClick); */

const botao = document.querySelector('.botao');

function mostrar() {
    const texto = document.querySelector('.texto');
    texto.classList.toggle('ativar');
}

botao.addEventListener('click', mostrar);

// WINDOWN

const larguraTela = window.innerWidth;

function cordenadaMouse(e) {
    const cordenadas = {
        x: e.x,
        y: e.y
    }
    console.log(cordenadas)
}

function scroll() {
    console.log(window.scrollY)
}

window.addEventListener('mousemove', cordenadaMouse);
window.addEventListener('scroll', scroll)