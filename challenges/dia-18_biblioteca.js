class Livro {
    titulo
    autor
    editora
    ano
    disponibilidade

    constructor(titulo, autor, editora, ano) {
        this.titulo = titulo
        this.autor = autor
        this.editora = editora
        this.ano = ano
        this.disponibilidade = true
    }
}

let livro1 = new Livro('Harry Potter', 'J.K. Rowling', 'Editora 1', 1997, true)
let livro2 = new Livro("1984", "George Orwell", "Editora 2", 1949, false)
let livro3 = new Livro("Cem Anos de Solidão", "Gabriel García Márquez", "Editora E", 1967, true)

let acervo = []
acervo.push(livro1, livro2, livro3)

class Biblioteca {
    nome
    endereco
    telefone
    acervo

    constructor(nome, endereco, telefone, acervo = []) {
        this.nome = nome
        this.endereco = endereco
        this.telefone = telefone
        this.acervo = acervo
    }

    buscarLivro(nomeLivro) {
        let livroEncontrado = this.acervo.find(livro => livro.titulo === nomeLivro)
        if (livroEncontrado) {
            console.log(`Informações do livro encontrado: `)
            console.log(`Título do livro: ${livroEncontrado.titulo} \nAutor: ${livroEncontrado.autor} \nEditora: ${livroEncontrado.editora} \nAno de publicação: ${livroEncontrado.ano}`)
        } else {
            console.log('Livro não encontrado.')
        }
    }

    emprestarLivro(nomeLivro) {
        let livroEmprestado = this.acervo.find(livro => livro.titulo === nomeLivro)
        if (livroEmprestado && livroEmprestado.disponibilidade) {
            livroEmprestado.disponibilidade = false
            console.log(`Livro ${nomeLivro} pego emprestado com sucesso!`)
        } else if (livroEmprestado && !livroEmprestado.disponibilidade) {
            console.log('O livro solicitado não está disponível para empréstimo!')
        } else {
            console.log('Livro não encontrado na biblioteca.')
        }
    }

    devolverLivro(nomeLivro) {
        let livroDevolvido = this.acervo.find(livro => livro.titulo === nomeLivro)
        if (livroDevolvido && !livroDevolvido.disponibilidade) {
            livroDevolvido.disponibilidade = true
            console.log(`Livro ${nomeLivro} devolvido com sucesso!`)
        } else {
            console.log(`Livro ${nomeLivro} não encontrado na biblioteca.`)
        }
    }
}

let biblioteca = new Biblioteca('Biblioteca Central', 'Rua Principal, 123', '1234567890', acervo)
biblioteca.buscarLivro('Harry Potter')
biblioteca.emprestarLivro('1984')
biblioteca.devolverLivro('1984')

biblioteca.buscarLivro('kaojsoida')