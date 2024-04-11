// Classe e objeto - introdução

class Aluno {
    nome
    idade
    area_atuacao

    constructor (nome, idade) {
        this.nome = nome // se refere ao nome da classe
        this.idade = idade
    }

    apresentar() { // nao preciso chamar FUNCTION dentro da classe, basta colocar os parênteses
        console.log('')
    }
}

let alunos = [];
let continuar = true;
let cont_aluno = 0;

while(continuar) {
    let nome = prompt('Insira o nome do aluno: ')
    let idade = parseInt(prompt('Insira a idade do aluno: '))
    let aluno = new Aluno(nome, idade) // vai pegar as duas informações da classe para atribuir ao objeto aluno criado

    let area_atuacao = prompt('Insira a sua área de atuação: ')
    aluno.area_atuacao = area_atuacao

    alunos[cont_aluno] = aluno;

    let deseja_continuar = prompt('Digite 1 caso deseje continuar a adicionar alunos: ')
    if (deseja_continuar != 1) {
        continuar = false;
    } else {
        cont_aluno++
    }
}