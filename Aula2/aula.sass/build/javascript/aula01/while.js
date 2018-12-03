(function(){
    let count = 1;
    document.write('<p>Iniciando repetidor while</p>');
    while(count <= 10){
        document.write('<h3>' + count + '</h3>');
        count++;
    }
    document.write('<p>Fim do repetidor while</p>');
})()