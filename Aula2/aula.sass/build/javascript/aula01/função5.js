let valor = parseInt(window.prompt('Informe o valor do produto'));
let desconto1 = parseFloat( valor - (valor * 0.02));
let desconto2 = parseFloat( valor - (valor * 0.05));
let desconto3 = parseFloat( valor - (valor * 0.10));
let desconto4 = parseFloat( valor - (valor * 0.13));
  
    if (valor <= 300){
        document.write('O valor do produto é ' + desconto1)
    }
    else if (valor <= 500){
        document.write('O valor do produto é ' + desconto2)
    }
    else if (valor <= 1000){
        document.write('O valor do produto é ' + desconto3)
    }
    else {
        document.write('O valor do produto é ' + desconto4)
    }

    console.log('Fim do script');