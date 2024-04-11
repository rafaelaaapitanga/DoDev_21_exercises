//1 - Crie um array para receber os nomes dos alunos e outro para receber as notas;
//2 - Para cada aluno inserido pergunte o nome e a nota da prova;
//3 - Seu usuário deve ter a opção de parar de inserir informações quando desejar;
//4 - No final exiba a nota de cada aluno, a soma das notas e a média geral da turma.

array_nomes = [];
array_notas = [];
let cont = 0;
continuar = true;

while(continuar) {
    let nome = prompt('Qual o seu nome? ')
    let nota = parseFloat(prompt('Qual a sua nota? '))
    array_nomes[cont] = nome;
    array_notas[cont] = nota;
    cont++;

    let pergunta = prompt('Deseja inserir mais dados? (s/n) ')
    if (pergunta === 's') {
        continuar;
    } else {
        continuar = false;
    }
}

for (let i = 0; i < array_nomes.length; i++) {
    console.log(`${array_nomes[i]} - ${array_notas[i]}`);
}

let somaNotas = 0
for (let j = 0; j < array_notas.length; j++) {
    somaNotas += array_notas[j];
}

console.log(`Soma das notas: ${somaNotas}`)
console.log(`Média geral da turma: ${somaNotas/array_nomes.length}`)