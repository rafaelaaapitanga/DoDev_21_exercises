let nomes = [];
let senhas = [];

function solicitarUsuario() {
    let escolha = prompt('Escolha:\n1. Cadastrar\n2. Login\n3. Excluir cadastro\n4. Encerrar programa');
    return escolha;
}

function fazerCadastro() {
    nomes.push(prompt('Seu nome: '));
    senhas.push(prompt('Sua senha: '));
}

function fazerLogin(nome, senha) {
    let indice = nomes.indexOf(nome);
    if (indice != -1 && senhas[indice] == senha) {
        return true;
    } else {
        return false;
    }
}

function excluirCadastro(nome) {
    let indice = nomes.indexOf(nome);
    if (indice !== -1) {
        nomes.splice(indice, 1);
        senhas.splice(indice, 1);
        console.log('Cadastro excluído com sucesso!');
    } else {
        console.log('Usuário não encontrado.');
    }
}

let continuar = true;
while (continuar) {
    let escolha = solicitarUsuario();

    switch(escolha) {
        case "1":
            fazerCadastro();
            break;

        case "2":
            let nomeLogin = prompt('Nome: ');
            let senhaLogin = prompt('Senha: ');
            let login = fazerLogin(nomeLogin, senhaLogin);
            if (login) {
                console.log('Login realizado!');
            } else {
                console.log('Nome ou senha incorreto.');
            }
            break;

        case "3":
            let nomeExcluir = prompt('Nome: ');
            excluirCadastro(nomeExcluir);
            break;

        case "4":
            continuar = false;
            break;

        default:
            console.log('Opção inválida.');
            break;
    }
}