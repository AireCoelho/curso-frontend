let nota1 = parseInt(window.prompt('Digite a primeira nota'));
let nota2 = parseInt(window.prompt('Digite a segunda nota'));
let nota3 = parseInt(window.prompt('Digite a terceira nota'));

let media = (nota1 * 3 + nota2 * 2 + nota3 * 5) / (3 + 2 + 5)
document.write('A média final é '  + media)