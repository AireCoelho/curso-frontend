let numero1 = parseInt(window.prompt('Digite um numero'));
let numero2 = parseInt(window.prompt('Digite mais um numero'));
let numero3 = parseInt(window.prompt('Digite o ultimo numero'));

let numeroFinal = Math.min(numero1, numero2, numero3);

document.write('O menor número digitado é ' + numeroFinal)