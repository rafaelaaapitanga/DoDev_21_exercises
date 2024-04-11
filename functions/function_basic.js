// FUNÇÃO - precisa ser chamada para executar

function somar1(){
    let num = 5
    console.log(num)
}

function somar(num1, num2){
    return num1 + num2;
}

somar1()
let resultadoSomar = somar(1, 2) // determinando os valores das variáveis apresentadas na função somar, que antes não tinha valor definido
console.log(resultadoSomar)