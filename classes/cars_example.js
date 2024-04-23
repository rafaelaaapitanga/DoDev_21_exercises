class Carro {
    marca
    modelo
    ano

    constructor(marca, modelo, ano) {
        this.Marca = marca
        this.Modelo = modelo
        this.Ano = ano
        this.ligado = false
    }

    ligar() {
        this.ligado = true
    }

    desligar() {
        this.ligado = false
    }
}

let carro1 = new Carro('Toyota', 'Corolla', 2020)
let carro2 = new Carro('Ford', 'Mustang', 2018)
let carro3 = new Carro('Chevrolet', 'Camaro', 2024)

console.log(`Informações do carro 1: \nMarca: ${carro1.Marca} \nModelo: ${carro1.Modelo} \nAno: ${carro1.Ano}`)
console.log(`Informações do carro 2: \nMarca: ${carro2.Marca} \nModelo: ${carro2.Modelo} \nAno: ${carro2.Ano}`)
console.log(`Informações do carro 3: \nMarca: ${carro3.Marca} \nModelo: ${carro3.Modelo} \nAno: ${carro3.Ano}`)

carro2.ligar()

if (carro1.ligado) {
    console.log('O carro 1 está ligado.')
} else if (carro2.ligado) {
    console.log('O carro 2 está ligado.')
} else if (carro3.ligado) {
    console.log('O carro 3 está ligado.')
}