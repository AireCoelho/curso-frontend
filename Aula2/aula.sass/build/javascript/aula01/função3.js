let nota1 = parseInt(window.prompt('Informe a primeira nota'));
let nota2 = parseInt(window.prompt('Informe a segunda nota'));
let nota3 = parseInt(window.prompt('Informe a terceira nota'));
let media = (nota1 + nota2 + nota3) / 3
if (media >= 7) {
    document.write('<h1> Parabéns, você está passado com média ' + media.toFixed(2) + '!');
}

else {

    document.write('<h1>Que pena, você está em recuperação </h1>');

}

console.log('Fim do script');