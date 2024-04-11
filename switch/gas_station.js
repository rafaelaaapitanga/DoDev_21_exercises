// 1.1 - Crie um algoritmo que peça para o usuário escolher entre 3 opções em um posto de gasolina: abastecer com gasolina, com álcool ou calibrar os pneus.
// 1.2 - Se o usuário escolher abastecer com gasolina, você deve solicitar o valor desejado e exibir no console a quantidade em litros que foi abastecida (litro de gasolina = R$5)
// 1.3 - Se o usuário escolher abastecer com álcool, você deve solicitar o valor desejado e exibir no console a quantidade em litros que foi abastecida (litro de álcool = R$3)
// 1.4 - Se o usuário escolher calibrar os pneus, exiba no console a mensagem: "pneus calibrados com sucesso".

let opcao = parseInt(prompt('Escolha uma opção:'
+ '\n1 - Abastecer com gasolina; \n2 - Abastecer com álcool; \n3 - Calibrar os pneus'));

switch(opcao){
    case 1:
        let valor_g = parseInt(prompt('Quanto você deseja colocar de gasolina? '))
        let litros_g = valor_g / 5;
        console.log('A quantidade de gasolina abastecida foi de ' + litros_g + ' litros.')
        break;
    case 2:
        let valor_a = parseInt(prompt('Quanto você deseja colocar de álcool? '))
        let litros_a = valor_a / 3;
        console.log('A quantidade de álcool abastecida foi de ' + litros_a + ' litros.')
        break;
    default:
        console.log('Pneus calibrados com sucesso.')
        break;
}