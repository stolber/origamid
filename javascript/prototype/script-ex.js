// CRIE UMA FUNÇAO CONSTRUTURA

function Pessoa(nome,sobrenome,idade) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
}

Pessoa.prototype.nomeCompleto = function() {
    return `${this.nome} ${this.sobrenome}`;
}

const pedro = new Pessoa('Pedro', 'Stolber', 27);

// LISTE OS CONTRUTURES DOS DADOS ABAIXO

const li = document.querySelector('li');

li;  // HTMLLIElement
li.click; // FUNCTION
li.innerText; // STRING
li.value; // NUMBER
li.hidden; // BOOLEAN
li.offsetHeight; // NUMBER
li.click(); // UNDEFINED
