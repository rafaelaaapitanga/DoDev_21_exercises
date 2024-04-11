var nome;
var salario;

PerguntarNeS();

function PerguntarNeS() {
    nome = prompt('Nome do colaborador: ');
    salario = prompt('Salário do colaborador: ');
    calcularAumentoSalario(nome, salario);
}

function calcularAumentoSalario(nome, salario) {
    var aumento = 0;

    if (salario <= 1500) {
        aumento = 1.2;
    } else if (salario <= 2000) {
        aumento = 1.15;
    } else if (salario <= 3000) {
        aumento = 1.1;
    } else {
        aumento = 1.05;     
    }

var salario_reaj = salario*aumento

console.log(`Nome do colaborador: ${nome}`);
console.log(`Salário do colaborador: R$${salario}`);
console.log(`Aumento: ${((aumento-1.0)*100)}%`);
console.log(`Salário reajustado: R$${salario_reaj}`);

perguntarNovamente();
}

function perguntarNovamente() {
    var resposta = prompt('Deseja calcular novamente? (s/n)')

    if (resposta == 's') {
        PerguntarNeS(); // pergunta tudo de novo
    } else {
        console.log('Programa encerrado.')
    }
}