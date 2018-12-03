let numero = parseInt(window.prompt('Digite um número entre 1 e 10'));
if(numero >= 1 && numero <= 10){
    let fatorial = 1;
    for(let index = 1; index <= numero; index++){
        fatorial *= index;
    }
    document.write('<h3> ' + numero + '! = ' + fatorial + '</h3>')
    } 
    else{
        document.write('<h1>Número Inválido</h1>')
    }
