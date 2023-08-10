// OPERADORES DE ATRIBUICAO

var x = 5;
var y = 10;

x += y // x = x + y (15)
x -= y // x = x - y (5)
x *= y // x = x * y (50)
x /= y // x = x / y (0.5)
x %= y // x = x % y (0)
x **= y // x = x + y (9765625)

var numero = 20;
var numero2 = 10;
numero += numero2;

console.log(numero);

// OPERADOR TERNÁRIO - ABREVIAÇÃO DE IF E ELSE

var idade = 27;
var podeDirigir = (idade >= 18) ? "Pode Dirigir" : "Ainda é menor de idade, não pode dirigir.";
console.log(podeDirigir);