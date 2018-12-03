let nota1 = parseInt(window.prompt('Informe a primeira nota'));
let nota2 = parseInt(window.prompt('Informe a segunda nota'));
let nota3 = parseInt(window.prompt('Informe a terceira nota'));
let media = (nota1 + nota2 + nota3) / 3
  
    if (media >= 9){
        document.write('<h1> Conceito A </h1>');
    }
    else if (media >= 8){
        document.write('<h1> Conceito B </h1>');
    }
    else if (media >= 6){
        document.write('<h1> Conceito C </h1>');
    }
    else if (media >= 5){
        document.write('<h1> Conceito D </h1>');
    }
    else if (media < 5){
        document.write('<h1> Conceito insuficiente </h1>');
    }

    console.log('Fim do script');