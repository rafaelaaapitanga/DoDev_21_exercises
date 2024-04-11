/// SWITCH CASE: funciona como um if/else, mas em casos

let idade = Number(prompt('Insira a sua idade: '))

switch(idade){
    case 10:
        console.log('Você tem 10 anos.')
        break; // se atendesse a essa condicao, já passaria p segunda sem o break 
    case 20:
        console.log('Você tem 20 anos.')
        break;
    default:
        console.log('Default')
        break;
}