(function (){
    let idade = parseInt(window.prompt('Informe sua idade'));
    if (idade >= 18){
document.write('<h1> Você já pode fazer a sua CNH!');
    }
    else if(idade >= 16 && idade < 18 ){
        document.write('<h1> Você ainda não pode tirar a CNH, mas já pode votar!');
    }
    else{
         
        document.write('<h1>Você ainda não pode fazer a CNH </h1>');
        
    }

    console.log('Fim do script');
    })()