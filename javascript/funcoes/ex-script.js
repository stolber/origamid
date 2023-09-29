// CRIE UMA FUNÇAO (livro) que possui 3 parametros: nome, ano e autor.

// NO ESCOPO DA FUNÇÃO:
// 1 - No corpo da função transforme o nome para uppercase
// 2 - Calcule o total de anos desde o lançamento do livro
// 3 - crie uma variavel com a frase nome + " por" + autor
// 4 - Coloque os 3 valores acima em um objeto

// RETORNE O OBJETO DEFINIDO
// EXECUTE A FUNÇÃO COM OS SEGUINTES ARGUMENTOS (NOME,ANO,AUTOR)
// GUARDE O RETORNO DA FUNÇÃO EM UMA VARIAVEL
// LOG A FRASE FINAL DA FUNÇÃO EXECUTADA NO CONSOLE

function livro(nome, ano, autor) {
    return  {
        nomeMaior: nome.toUpperCase(),
        anosLancamento: 2023 - ano,
        livroAutor: nome + " por " + autor
    }
}

const livroHarry = livro("Harry Potter", 1997, "J. K. Rowling");
console.log(livroHarry);
console.log(livroHarry.livroAutor);





