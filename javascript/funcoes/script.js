// FUNÇÕES

function areaQuadrado(lado) {
    return lado * lado;
}

console.log(areaQuadrado(5));

// PARAMETROS E ARGUMENTOS

function imc(peso, altura) {
    const imc = peso / (altura ** 2);
    return imc;
}
console.log(imc(80, 1.8))

// EXEMPLO

function corFavorita(cor) {
    var cor = "";

    if (cor == "azul") {
        return "Você gosta do mar.";
    } else if (cor == "verde") {
        return "Você gosta do mato.";
    } else {
        return "Você gosta de outras coisas.";
    }
}
console.log(corFavorita());

// EVENTOS 

function mostraConsole(){
    console.log("Clicou");
}
addEventListener("click", mostraConsole);
