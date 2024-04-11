//1 - Crie três arrays, um para guardar os modelos, um para guardar os anos e um para guardar os valores do carro
//2 - Utilizando o WHILE, peça para o usuário cadastrar novos carros(modelo, ano e valor), popule os 3 arrays nas mesmas posições.
//3 - Seu usuário deve definir quando parar de inserir informações.
//4 - Exiba o nome, ano e valor dos carros inseridos. Ex: Celta, 2020 Valor: 50.000
//5 - Ordene seus vetores pelo preço dos carros. (Aqui você deve usar seu algoritmo de ordenação, não use os nativos do javascript, como o OrderBy)

let array_modelos = [];
let array_anos = [];
let array_valores = [];
let continuar = true;
let cont = 0;

while (continuar) {
    let modelo = prompt('Insira o modelo do carro: ')
    let ano = parseInt(prompt('Insira o ano do carro: '))
    let valor = parseFloat(prompt('Insira o valor do carro: '))

    array_modelos[cont] = modelo;
    array_anos[cont] = ano;
    array_valores[cont] = valor;
    cont++

    let pergunta = prompt('Deseja continuar? (s/n) ')
    if (pergunta == 's') {
        continuar;
    } else {
        continuar = false;
    }
}

for (let i = 0; i < array_modelos.length; i++) {
    console.log(`${array_modelos[i]}, ${array_anos[i]}. Valor: ${array_valores[i]}`)
}

for (let i = 0; i < array_valores.length-1; i++) { // a cada passagem pelo array, pelo menos um elemento já está no lugar certo (o maior, que foi para o final), por isso -1
    for (let j = 0; j < array_valores.length-1 - i; j++) { // também percorre a lista de carros, mas ele vai diminuindo a quantidade de carros que precisa ser verificada a cada iteração

        if (array_valores[j] > array_valores[j+1]) { // verifica se o carro atual (j) é mais caro do que o próximo carro (j + 1)
            
            let maior_modelo = array_modelos[j];
            array_modelos[j] = array_modelos[j+1];
            array_modelos[j+1] = maior_modelo;

            let maior_ano = array_anos[j];
            array_anos[j] = array_anos[j+1];
            array_anos[j+1] = maior_ano;

            let maior_valor = array_valores[j];
            array_valores[j] = array_valores[j+1];
            array_valores[j+1] = maior_valor;
        }
    }
}

console.log(`Carros ordenados pelo preço: `)
for (let i = 0; i < array_modelos.length; i++) {
    console.log(`${array_modelos} - ${array_anos} - ${array_valores}`)
}