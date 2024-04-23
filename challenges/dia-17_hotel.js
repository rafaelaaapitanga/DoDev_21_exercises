class Hotel {
    Id
    Nome
    Categoria
    Endereco
    Telefone
    constructor(id, nome, categoria, endereco, telefone) {
        this.Id = id;
        this.Nome = nome;
        this.Categoria = categoria;
        this.Endereco = endereco;
        this.Telefone = telefone;
    }
}

class Reserva {
    Id
    IdHotel
    NomeResponsavel
    DiaEntrada
    DiaSaida
    constructor(id, idHotel, nomeResponsavel, diaEntrada, diaSaida) {
        this.Id = id;
        this.IdHotel = idHotel;
        this.NomeResponsavel = nomeResponsavel;
        this.DiaEntrada = diaEntrada;
        this.DiaSaida = diaSaida;
    }
}

let hoteis = [];
let reservas = [];
let idHotel = 0
let idReserva = 0

function cadastratarHotel() {
    let nome = prompt('Digite o nome do hotel: ')
    let categoria = parseInt(prompt('Digite a categoria do hotel: '))
    let endereco = prompt('Digite o endereço do hotel: ')
    let telefone = prompt('Digite o telefone do hotel: ')
    let hotel = new Hotel(idhotel, nome, categoria, endereco, telefone);
    idHotel++;
    hoteis.push(hotel);
}

function cadastratarReserva() {
    let idHotel
    let existe = false
    do {
        idHotel = parseInt(prompt('Digite o id do hotel: '))
        for (let i = 0; i < hoteis.length; i++) {
            if (idHotel == hoteis[i].Id) {
                i = hoteis.length
                existe = true
            } else if (i == hoteis.length - 1) {
                console.log('id de hotel não encontrado.')
            }
        }
    } while (!existe)

    let nomeResponsavel = prompt('Digite o nome do responsável: ')
    let diaEntrada = parseInt(prompt('Digite o dia de entrada: '))
    let diaSaida
    do {
        diaSaida = parseInt(prompt('Digite o dia de saída: '))
        if (diaSaida < diaEntrada) {
            console.log('O dia de saída deve ser maior que o dia de entrada.')
        }
    } while (diaSaida < diaEntrada)

    let reserva = new Reserva(idReserva, idHotel, nomeResponsavel, diaEntrada, diaSaida)
    idReserva++
    reservas.push(reserva)
}

function procurarReservaPorHotel(idHotel) {
    reservas.forEach(reserva => {
        if (idHotel == reserva.IdHotel) {
            let i = idHotel
            console.log('hotel: ', hoteis[i].Nome)
            console.log('responsável: ', reserva.NomeResponsavel)
            console.log('dia de entrada: ', reserva.DiaEntrada)
            console.log('dia de saída: ', reserva.DiaSaida)
        }
    })
}

function procurarHotelPorReserva(idReserva) {
    let idHotel = reservas[idReserva].IdHotel
    console.log('hotel: ', hoteis[idHotel].Nome)
    console.log('endereço: ', hoteis[idHotel].Endereco)
    console.log('dia de entrada: ', reservas[idReserva].DiaEntrada)
    console.log('dia de saída: ', reservas[idReserva].DiaSaida)
}

function procurarReservaPorNome(nome) {
    for (let i = 0; i < reservas.length; i++) {
        if (nome == reservas[i].NomeResponsavel) {
            console.log('id da reserva: ', reservas[i].Id)
            console.log('hotel: ', hoteis[(reservas[i].IdHotel)].Nome)
        }
    }
}

function procurarHotelPorCategoria(categoria) {
    let hoteisProcurados = []
    for (let i = 0; i < hoteis.length; i++) {
        if (categoria == hoteis[i].Categoria) {
            hoteisProcurados.push(hoteis[i].Nome)
        }
    }
    return hoteisProcurados
}

function atualizarTelefone(idHotel, telefone) {
    hoteis[idHotel].Telefone = telefone
    console.log('Número de telefone atualizado!')
}

// funcionamento

let continuar = true
do {
    let opcao = prompt('escolha uma opção: \n1 - Cadastrar hotel \n2 - Cadastrar reserva \n3 - Procurar reserva pelo hotel \n4 - Porcurar hotel pela reserva \n5 - Procurar reserva pelo responsável \n6 - Procurar hoteis por categoria \n7 - Atualizar telefone de um hotel \n8 - Encerrar o programa')

    switch (opcao) {
        case "1":
            cadastratarHotel()
            break;
        case "2":
            cadastratarReserva()
            break;
        case "3":
            procurarReservaPorHotel(prompt('Digite o id do hotel: '))
            break;
        case "4":
            procurarHotelPorReserva(prompt('Digite o id da reserva: '))
            break;
        case "5":
            procurarReservaPorNome(prompt('Digite o nome do responsável pela reserva: '))
            break;
        case "6":
            let hoteisProcurados = procurarHotelPorCategoria(parseInt(prompt('Digite a categoria que deseja procurar: ')))
            console.log(hoteisProcurados)
            break;
        case "7":
            let idHotel = parseInt(prompt('Digite o id do hotel que deseja atualizar: '))
            let telefone = prompt('Digite o novo telefone: ')
            atualizarTelefone(idHotel, telefone)
            break;
        case "8":
            console.log('Programa encerrado.')
            continuar = false
            break;
        default:
            console.log('Opção inválida')
            break;
    }
} while (continuar)