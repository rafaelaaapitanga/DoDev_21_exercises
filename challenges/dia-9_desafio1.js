// Escreva um algoritmo onde seu usuário deve informar nome, idade, peso, altura e profissão, a partir disso você deve exibir um texto com todas essas informações.
// Verifique se o usuário é maior ou menor de idade, se ele for maior exiba na tela “Está liberado para tomar umas geladas”, se ele for menor exiba “Sem gelada para você”.
// Utilize a idade informada pelo usuário, e mostre sua idade em meses, semanas e dias. Considere ano com 365 dias, mês com 30 dias e semana com 7 dias. 
// Calcule o IMC do seu usuário e informe a faixa dele.
// A partir da idade informada descubra o ano que o seu usuário nasceu(Considere o ano atual como 2023, faça essa conta usando apenas o ano)
// Agora você deve exibir todos os anos que o usuário já viveu até o ano atual e informar qual a idade dele no determinado ano.
// Utilizando o loop WHILE/DOWHILE, pergunte a seu usuário se ele deseja inserir novos dados ou se deseja finalizar o programa

// Criando variáveis
let nome = prompt('Insira o seu nome: ')
let idade = Number(prompt('Insira a sua idade: '))
let peso = parseFloat(prompt('Insira o seu peso: '))
let altura = parseFloat(prompt('Insira a sua altura: '))
let profissao = prompt('Insira a sua profissão: ')
let ano_atual = 2024

console.log(`Olá, ${nome}, você tem ${idade} anos, é ${profissao}, tem ${altura}m de altura e pesa ${peso}kg.`)
if (idade >= 18) {
    console.log('Está liberado(a) para tomar umas geladas.')
} else {
    console.log('Sem gelada para você.')
}

let idade_meses = idade*12
let idade_semanas = (idade*365) / 7
let idade_dias = idade*365
console.log(`Sua idade em meses é ${idade_meses} meses.`)
console.log(`Sua idade em semanas é ${idade_semanas} semanas.`)
console.log(`Sua idade em dias é ${idade_dias} dias.`)

// Cálculo do IMC
let imc = parseFloat(peso / (altura*altura))
console.log(`Seu IMC é de ${imc}kg/m2.`)

if (imc < 18.5) {
    console.log('Você se encontra na faixa da magreza.')
} else if (18.5 <= imc <= 24.9) {
    console.log('Você está na faixa normal.')
} else if (24.9 <= imc <= 30) {
    console.log('Você está na faixa do sobrepeso.')
} else {
    console.log('Você está na faixa da obesidade.')
}

let ano_nascimento = ano_atual - idade
console.log(`Você nasceu no ano ${ano_nascimento}`)

// Idade em todos os anos que o usuário já viveu
let anos_vividos = ano_nascimento
let idade_atual = 0

for (let anos_vividos = ano_nascimento; anos_vividos <= ano_atual; anos_vividos++) {
    console.log(`${anos_vividos} - ${idade_atual} anos de idade.`)
    idade_atual++
}

// LOOP DOWHILE