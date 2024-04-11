// LOOP - WHILE - lembrar que tem que haver a condição de saída

// Desenvolva um algoritmo que receba a nota e o sexo do aluno, usando a estrutura WHILE, e pergunte ao usuario se ele deseja cadastrar outra nota.
// No final, exiba no console:
// - A média geral dos alunos
// - Quantos homens enviaram as notas
// - Quantas mulheres tiveram nota acima de 7
// - Qual a maior nota entre os homens

// criando variáveis
let mediageral = 0;
let qtdhomens = 0;
let qtdmulheres7 = 0;
let maiornotaH = 0;
let cont = 1;

while(cont <= 10){
    nota = parseFloat(prompt('Insira a nota do ' + cont + 'o aluno: '))
    sexo = prompt('Insira o sexo do aluno (M/F): ')

    if (sexo == 'M'){
        if (nota > maiornotaH){
            maiornotaH = nota
        }
        qtdhomens++
    }

    if (sexo == 'F' && nota > 7){
        qtdmulheres7++
    }

    mediageral += nota
    cont++
}

mediageral = mediageral / 10

console.log('A média geral dos alunos foi ' + mediageral)
console.log(qtdhomens + ' homens enviaram as notas')
console.log(qtdmulheres7 + ' mulheres tiveram notas acima de 7')
console.log('A maior nota entre os homens foi ' + maiornotaH)