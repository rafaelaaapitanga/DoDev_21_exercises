// let: pode ser alterado
//const: constante q nao se altera

let nome = prompt('Digite o seu nome: ')
let idade = parseInt(prompt('Digite sua idade: '))
let altura = parseFloat(prompt('Digite sua altura: '))
let peso = parseInt(prompt('Digite seu peso: '))

let anoNasc = 2023 - idade
let imc = peso / (altura*altura)

console.log('Olá, ' + nome + ', você tem ' + idade + ' anos, nasceu em ' + anoNasc + ', tem ' + altura + ' de altura, pesa ' + peso + ' kg e seu IMC é ' + imc + 'kg/m')