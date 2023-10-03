// MENU ATIVADO

const links = document.querySelectorAll('.header-menu a')

function ativarLink(link) {
    const url = location.href;
    const href = link.href;

    if (url.includes(href)) {
        link.classList.add('ativo');
    }
}

links.forEach(ativarLink);

// ATIVAR ITENS DO ORÇAMENTO

const parametrosUrl = new URLSearchParams(location.search);

if (parametrosUrl) {
    parametrosUrl.forEach((parametro) => {
        const inputSeguro = document.getElementById(parametro)
        inputSeguro.checked = true;
    })
}

// GALERIA DE IMAGENS

const imgBicicleta = document.querySelectorAll('.bicicleta-imagens img');
const galeria = document.querySelector('.bicicleta-imagens')

function trocaImg(event) {
    const clicada = event.currentTarget;
    const media = matchMedia('(min-width: 920px)').matches;
    if (media) {
        galeria.prepend(clicada);
    }
}

function clicarImg(imagem) {
    imagem.addEventListener('click', trocaImg)
}

imgBicicleta.forEach(clicarImg);

// PERGUNTAS FREQUENTES

const perguntas = document.querySelectorAll('.perguntas button');

function ativarPergunta(event) {
    const pergunta = event.currentTarget;
    const controls = pergunta.getAttribute('aria-controls');
    const resposta = document.getElementById(controls);
    
    resposta.classList.toggle('ativa');
    const ativa = resposta.classList.contains('ativa');
    pergunta.setAttribute('aria-expanded', ativa)
}

perguntas.forEach((pergunta) => {
    pergunta.addEventListener('click', ativarPergunta)
});

// ANIMAÇÃO

if (window.SimpleAnime) {
    new SimpleAnime();
}