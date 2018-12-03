// let idade = parseInt(window.prompt('Informe sua idade'));

// const mensagem = idade >= 18 ? 'Maior de Idade': 'Menor de Idade';
// window.alert(mensagem)

let opcao = parseInt(window.prompt('Digite um número entre 1 e 7:'));
let mensagem = ' '
switch(opcao){
    case 1:
    mensagem = 'Domingo';
    break;
    case 2:
    mensagem = 'Segunda-feira';
    break;
    case 3:
    mensagem = 'Terça-feira';
    break;
    case 4:
    mensagem = 'Quarta-feira';
    break;
    case 5:
    mensagem = 'Quinta-feira';
    break;
    case 6:
    mensagem = 'Sexta-feira';
    break;
    case 7:
    mensagem = 'Sábado'
    break;

    default: mensagem = 'Código inválido';
    break;
}

window.alert(mensagem)