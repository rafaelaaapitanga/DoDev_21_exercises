// Crie um algoritmo que peça um número inteiro positivo para o usuário. 
// Em seguida, popule um array com os números de Fibonacci (o próximo número da sequência é a soma dos 2 números anteriores).
// Na hora de somar com os termos anteriores, some com elementos anteriores do array. 
// Faça com que o array tenha no máximo 10 elementos
// Para iniciar a sequência use o (número inserido - 1)

let numero = parseInt(prompt('Insira um número inteiro positivo: '));
let array = [];
array[0] = numero-1;
array[1] = numero;

for (i = 2; i <= 9; i++) {
    array[i] = array[i-2] + array[i-1]
}

console.log(array)