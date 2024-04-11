// Imagine que você trabalha num banco e sua missão é fazer um algoritmo para prever o aumento de salário de seus clientes.
// 1 - Peça para seu cliente informar seu nome, idade e salário atual e exiba essas informações em tela.
// 2 - Peça para que seu cliente confirme as informações, se ele informar que digitou errado, peça para colocar TODAS as informações novamente, repita as perguntas até o usuário informar que digitou as informações corretamente.
// 3 - Faça a previsão do salário dele para os próximos 10 anos considerando que:
//- O cliente recebe anualmente aumento salarial. 
//- Sabe-se que: no primeiro ano, ele receberá um aumento de 1,5%, sobre o seu salário atual; A partir do segundo ano, os aumentos salariais sempre corresponderam ao dobro do percentual do ano anterior. Apresente todos os valores com o ano correspondente. Ex: 2024 - R$1600.

let nome, idade, salario;
let confirmar = true

while (confirmar) {
    nome = prompt('Insira o seu nome: ')
    idade = Number(prompt('Insira a sua idade: '))
    salario = parseFloat(prompt('Insira o seu salário atual: '))
    console.log(`${nome}, ${idade} anos, salário: R$${salario}`)

    confirmar = prompt('As informações estão corretas? (s/n)')
    if (confirmar === 's') {
        confirmar = false
    } else {
        confirmar = true
    }
}

let anos = 2025
let aumento_inicial = 0.015
let salario_inicial = salario

for (anos; anos <= 2034; anos++) {
    let aumento_salario = (aumento_inicial*salario_inicial) + salario_inicial
    let aumento_anual = aumento_inicial*2
    salario_inicial = aumento_salario
    aumento_inicial = aumento_anual
    console.log(`${anos} - ${salario_inicial}`)
}