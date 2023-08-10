// SOME O VALOR DE 500 AO SCROLL ABAIXO, ATRIBUINDO O NOVO VALOR A ELE.

var scroll = 1000;
scroll += 500;
console.log(scroll);

// ATRIBUA TRUE PARA A VARIAVEL darCredito CASO O CLIENTE POSSUA CARRO E CASA E FALSE CASO O CONTRARIO

var possuiCarro = true;
var possuiCasa = true;
var darCredito = (possuiCarro && possuiCasa) ? "Crédito liberado." : "Crédito negado.";
console.log(darCredito);