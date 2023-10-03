const botao = document.querySelector('.botao');

function somar() {
    const div = document.querySelector('div');
    const total = +div.innerText + 1
    if (total <= 10) {
        div.innerText = total;
    } else {
        div.innerText = "O máximo é 10."
    }
}

if (botao) {
    botao.addEventListener('click', somar);
}
