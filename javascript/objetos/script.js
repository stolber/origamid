// OBJETOS - CONJUNTO DE VARIAVEIS E FUNÇÕES

var pessoa = {
    nome: "Pedro",
    idade: 27,
    profissao: "Desenvolvedor",
    possuiFaculdade: true,
}

console.log(pessoa.nome); // "Pedro"

// MÉTODOS

var quadrado = {
    lados: 4,
    area: function(lado) {
        return lado * lado;
    },
    perimetro: function(lado) {
        return lado * this.lados;
    }
}
console.log(quadrado.area(5))


// CRIAR OBJETOS

var a = {} // objeto
var menu = {
    width: 800,
    height: 50,
    backgroundColor: "#84e",
}
menu.backgroundColor = "#000"; // TROCANDO A COR DE DENTRO DO OBJETO
menu.color = "blue" // ADICIONANDO PROPRIEDADE AO OBJETO

var bg = menu.backgroundColor; // ACESSANDO 

// TUDO É OBJETO

var nome = "Pedro";
    nomeMinusculo = nome.toLowerCase();

console.log(nomeMinusculo)