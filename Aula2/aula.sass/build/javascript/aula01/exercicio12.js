let numero1 = parseInt(window.prompt('Digite um numero'));
let numero2 = parseInt(window.prompt('Digite mais um numero'));
let numero3 = parseInt(window.prompt('Digite mais um numero'));
let numero4 = parseInt(window.prompt('Digite mais um numero'));
let numero5 = parseInt(window.prompt('Digite o ultimo numero'));

let numeroFinal = Math.max(numero1, numero2, numero3, numero4, numero5);

document.write('O maior número digitado é ' + numeroFinal)