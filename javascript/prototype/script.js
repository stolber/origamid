function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
}

Pessoa.prototype.andar = function() {
    return this.nome + " Pessoa andou";
}

Pessoa.prototype.correr = function() {
    return this.nome + " Pessoa correu";
}

/* console.log(Pessoa.prototype); */
const pedro = new Pessoa("Pedro", 27);

// AULA 2 PROTOTYPE 

const pais = "Brasil";
const cidade = new String("Londrina");


const lista = document.querySelectorAll('li');
console.log(lista);

// TRANSFORMA LISTA EM ARRAY
const listaArray = Array.prototype.slice.call(lista);
console.log(listaArray);
const listaArrayNew = Array.from(lista); // MODO RESUMIDO DE TRANSFORMAR OBJ EM ARRAY
console.log(listaArrayNew);

Object.getOwnPropertyNames(Array);


// ENTENDA O QUE ESTÁ SENDO RETORNADO

const Carro = {
    marca: "Ford",
    preco: 19000,
    acelerar() {
        return true;
    }
}

Carro // OBJETO
Carro.marca // STRING
Carro.preco // NUMBER
Carro.acelerar() // BOOLEAN
Carro.marca.charAt // FUNCTION
Carro.marca.charAt(0) // STRING
