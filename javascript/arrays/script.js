// ARRAYS 

var videoGames = ["Xbox", "PS4", "Switch", "3DS"];
videoGames[0] // Xbox
videoGames[2] // Switch

for(var item = 0; item < videoGames.length; item++) {
    console.log(videoGames[item]);
    if(videoGames[item] === "Switch") {
        break; // QUEBRA A CONDIÇÃO CASO CHEGUE EM ALGO DESEJADO
    }
}


/* For = Para: (var; açao; açao)
Enquanto numero <= 8 acrescente 1 */

    for (let numero = 1; numero <= 8; numero++) { 
        console.log(numero);
    } 

/* While = Enquanto
Enquanto n <= 5 acrescente 1 */

    n = 1;
    while (n <= 5) {
        console.log(n);
        n++;
    }

// forEach

var frutas = ["Banana", "Morango", "Laranja", "Melancia", "Mamão"] 

frutas.forEach (function(fruta, index) { 
    console.log(fruta, index);
});