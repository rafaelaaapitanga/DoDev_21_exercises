// 1.1 - Crie um algoritmo que peça 2 números ao usuário; 
// 1.2 - Utilizando o switchCase dê a opção do usuário escolher qual operação matemática será realizada com esses números;
// 1.3 - Exiba no console a operação feita e o resultado da conta

// CONSTRUÇÃO DE VARIÁVEIS
let num1 = parseInt(prompt('Insira o primeiro número: '))
let num2 = parseInt(prompt('Insira o segundo número: '))
let operacao = parseInt(prompt('Insira a operação que deseja realizar: '
+ '\n1 = +; \n2 = -; \n3 = *; \n4 = /'))

// Variáveis para armazenar os resultados
let resulmais, resulmenos, resulmult, resuldiv;

// Cálculos das operações
resulmais = num1 + num2;
resulmenos = num1 - num2;
resulmult = num1 * num2;
resuldiv = num1 / num2;

// SWITCH CASE
switch(operacao){
    case 1:
        console.log(resulmais)
        break;
    case 2:
        console.log(resulmenos)
        break;
    case 3:
        console.log(resulmult)
        break;
    default:
        console.log(resuldiv)
        break;
}