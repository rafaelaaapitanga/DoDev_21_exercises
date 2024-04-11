// Refaça o script anterior, mas agora pergunte ao usuário quantos números ele deseja inserir no array. 
// Depois, o usuário vai preenchendo elemento por elemento do vetor, ao final, exiba o array e o array ao contrário

let quantidade = Number(prompt('Quantos números você deseja inserir no array? '));
let array = [];
let array_invertido = [];

for (i = 0; i <= quantidade-1; i++) {
    let valores = parseInt(prompt('Digite os valores que você deseja adicionar ao array: '));
    array[i] = valores;
}

console.log(array); // 2 5 7 9 0 2 (ex.)

let cont = quantidade-1;
for (j = 0; j < quantidade; j++) {
    array_invertido[j] = array[cont]; // a posicao 0 do array invertido vai equivaler à última posição do array normal
    cont--;
}

console.log(array_invertido) 