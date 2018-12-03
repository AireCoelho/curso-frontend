let peso = parseFloat(window.prompt('Digite seu peso'));
let altura = parseFloat(window.prompt('Digite sua altura'));
let IMC = peso / (altura * altura);
document.write('O valor de seu IMC é igual a ' + IMC)