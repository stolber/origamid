// Crie uma array com os anos que o Brasil venceu a copa - 1959, 1962, 1970, 1994, 2002

var venceuCopa = [1959, 1962, 1970, 1994, 2002]

// Interaja com o array utilizando loop para mostrar no console a seguinte mensagem "O Brasil ganhou a copa de ..."

for(var i = 0; i < venceuCopa.length; i++) {
    console.log(`O Brasil ganhou a copa de ${venceuCopa[i]}`)
}

// Interaja com o loop nas frutas e pare ao chegar em Pera

var frutas = ["banana", "maçã", "pêra", "uva", "melancia"];

for(fruta = 0; fruta <= frutas.length; fruta++) {
    console.log(frutas[fruta]);
    if (frutas[fruta] === "pêra") {
        break
    }
}

// Coloque a ultima fruta da array em uma variavel sem removê-la

var ultimaFruta = frutas[frutas.length - 1];
console.log(ultimaFruta);