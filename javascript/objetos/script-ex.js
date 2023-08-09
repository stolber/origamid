// ** EXERCICIOS ** 

// CRIE UM OBJETO COM SEUS DADOS PESSOAIS

var pessoa = {
    nome: "Pedro",
    sobrenome: "Stolber",
    idade: 27,
}

// CRIE UM MÉTODO NO OBJETO ANTERIOR QUE MOSTRE SEU NOME COMPLETO

var pessoa = {
    nome: "Pedro",
    sobrenome: "Stolber",
    idade: 27,
    nomeCompleto() {
        return this.nome + " " + this.sobrenome;
    }
}
console.log(pessoa.nomeCompleto())

// MODIFIQUE O NOME DA PROPRIEDADE PRECO PARA 3000

var carro = {
    preco: 1000,
    portas: 4,
    marca: "Audi",
}
carro.preco = 3000;
console.log(carro.preco);

// CRIE UM OBJETO DE UM CACHORRO QUE REPRESENTE UM LABRADOR PRETO COM 10 ANOS, QUE LATE AO VER SEU DONO

var cachorro = {
    raca: "Labrador",
    cor: "Preto",
    idade: 10,
    verDono: true,
    late() {
        if (this.verDono === true) {
            console.log("Ele está feliz ao ver seu dono e late.");
        } else {
            console.log("Ele não está latindo.");
        }
    }
}
cachorro.late()