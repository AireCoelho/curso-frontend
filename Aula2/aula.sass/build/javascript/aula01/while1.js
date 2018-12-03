let numero = window.prompt('Escreva qualquer número');
let count = 1;
document.write('<p>Escrevendo os números</p>');
while(count <=10){
    document.write('<h3>' + numero + '</h3>');
    count++;
}
document.write('<p>Fim do repetidor while</p>');