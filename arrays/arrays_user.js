// 1 - Crie 2 arrays: um para nomes e um para senhas
// 2- Solicite ao seu usuário o que ele deseja fazer: cadastrar, fazer login, excluir um cadastro ou encerrar o programa.
// 3 - Faça o fluxo de funcionamento do código, considere que o usuário pode escolher quando encerrar o programa conforme as opções.
// 4 - Se a opção escolhida for cadastro, solicite dois valores ao usuário, um nome e uma senha e guarde cada um no seu respectivo array.
// 5 - Se a opção escolhida for login solicite ao usuário um nome e uma senha, depois procure o nome recebido no array de nomes e em caso positivo 
//compare a senha no array de senhas. Se as duas comparações forem válidas exiba uma mensagem de sucesso

// 6 - Se a opção escolhida for excluir um cadastro solicite um nome ao usuário, então procure pelo nome no array de nomes e exclua ele e a senha 
//correspondente do outro array, por fim organize o array para eliminar os espaços vazios.

let array_nomes = [];
let array_senhas = [];
let continuar = true;
let cont = 0;

while(continuar) {
    let solicitacao = prompt('Você deseja cadastrar (c), fazer login (l), excluir um cadastro (e) ou encerrar o programa (q)? ')

    switch(solicitacao) {
        case 'c':
            array_nomes[cont] = prompt('Qual o nome? ')
            array_senhas[cont] = prompt('Qual a senha? ')
            cont++
            break;

        case 'l':
            let nome = prompt('Qual o nome? ')
            let senha = prompt('Qual a senha? ')
            let login_valido = false;

            for (let i = 0; i < array_nomes.length; i++) {
                if (nome == array_nomes[i] && senha == array_senhas[i]) {
                    login_valido = true;
                }
            }

            if (login_valido) {
                alert('Login realizado!')
            } else {
                alert('Login ou senha incorreto. Tente novamente.')
            }
            break;

        case 'e': // REFAZER DEPOIS COM OUTRA LÓGICA
            let nome_e = prompt('Qual nome deseja excluir? ')
            let nomesAux = []; // armazenar temporariamente os nomes e senhas após a exclusão
            let senhasAux = [];
            let contAux = 0;

            for (let i = 0; i < cont; i++) {
                if (nome_e == array_nomes[i]) {
                    alert('Cadastro excluído com sucesso!')
                } else {
                    nomesAux[contAux] = array_nomes[i];
                    senhasAux[contAux] = array_senhas[i];
                    contAux++;
                }
            }

            array_nomes = nomesAux;
            array_senhas = senhasAux;
            cont--

            break;

        case 'q':
            continuar = false;
            break;

        default:
            console.log('Solicitação inválida.')
            break;
    }
}