// Solicite o nome e o cpf do seu cliente.
// Pergunte um valor.
// Ofereça a opção de saque ou depósito.
// Caso a opção de saque seja a escolhida, remova o valor inserido do saldo total.
// Caso a opção de depósito seja escolhida, adicione o valor inserido do saldo total.
// Pergunte se o seu usuário deseja continuar. (Insira 1 para continuar e 2 para parar).
// Exiba o saldo total.
// Exiba o maior valor inserido(independente de ser depósito ou saque).
// Exiba a média dos valores inseridos(independente de ser depósito ou saque).
//REGRAS: 
    // 1- Considere iniciar a variável saldo com algum valor;
    // 2- Não deve ser permitido sacar um valor não disponível no saldo;
    // 3- Não deve ser permitido sacar nem depositar um valor negativo.

// criando variáveis
let saldo = 1000;
let maiorvalor = 0;
let somavalores = 0;
let totaltrans = 0;
let continuar = false;

let nome = prompt('Digite o seu nome: ')
let cpf = Number(prompt('Digite o seu CPF: '))

do{
    let valor = parseFloat(prompt('Digite o valor desejado: '))
    let opcao = prompt('Escolha a opção: \n1- Saque \n2- Depósito')

    if (opcao == '1'){
        if(valor > saldo){
            console.log('Saldo insuficiente. Tente novamente.')
        } else if (opcao == '1' && valor < saldo){
            console.log(`Olá, ${nome} (${cpf}). Seu saldo atual é de ${saldo})`);
            saldo -= valor;
            totaltrans++;
            somavalores += valor;

            if (valor > maiorvalor){
                maiorvalor = valor;
            }
            console.log(`Transação realizada com sucesso. Seu saldo atual está no valor de ${saldo}`);
        } 
    } else { // se a opção for '2' (DEPÓSITO)
        console.log(`Olá, ${nome} (${cpf}). Seu saldo atual é de ${saldo})`);
        saldo += valor;
        totaltrans++;
        somavalores += valor;
        if (valor > maiorvalor){
            maiorvalor = valor;
        }
        console.log(`Transação realizada com sucesso. Seu saldo atual está no valor de ${saldo}`);
    }

    let opcao2 = prompt('Deseja continuar? \n1- Continuar \n2- Parar');
        if (opcao2 === '1'){
            continuar = true
        } else if (opcao2 === '2'){
            continuar = false
        } else {
            console.log('Opção inválida. Programa encerrado.');
            continuar = false
        }

} while(continuar) // enquanto continuar for true

console.log(`Saldo final: R$${saldo}`);
console.log(`Maior valor inserido: R$${maiorvalor}`);
console.log(`Média dos valores inseridos: R$${somavalores / totaltrans}`);