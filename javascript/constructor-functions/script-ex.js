// TRANSFORME O OBJETO ABAIXO EM UMA CONSTRUCTOR FUNCTION
function Pessoa(nome, idade) {
    this.nome = nome;
    this.nome = idade;
    this.andar = function() {
        console.log(nome + ' andou muito' + ' com ' + idade + ' anos.');
    }
}

// CRIE 3 PESSOAS
const pedro = new Pessoa('Pedro', 27);
pedro.andar();

const joao = new Pessoa('João', 73);
joao.andar();

const maria = new Pessoa('Maria', 44);
maria.andar();

// CRIAR UMA CONSTRUCTOR FUNCTION COM TODAS AS LISTAS, INSERIR CLASSE E REMOVE-LAS

function Dom(seletor) {
    const elementList = document.querySelectorAll(seletor);
    this.elements = elementList;
    this.addClass = function(classe) {
        elementList.forEach((element) => {
            element.classList.add(classe);
        });
    }
    this.removeClass = function(classe) {
        elementList.forEach((element) => {
            element.classList.remove(classe);
        });
    }
}

const li = new Dom('li');
