// Crie um algoritmo que peça 5 números ao usuário, coloque eles em um array, depois exiba esse array. 
// Modifique os elementos do array de modo que a sequência de números fique ao contrário.

let array = [];
let array_invertido = [];

for (let i = 0; i <= 4; i++) { // determina os indices
    let numero = Number(prompt(`Digite o ${i + 1}° número: `));
    array[i] = numero;
}
console.log(array);

// deixando o array invertido
let cont = 4

for (let j = 0; j < 5; j++) { // determina os indices
    array_invertido[j] = array[cont];
    cont--;
}
console.log(array_invertido);