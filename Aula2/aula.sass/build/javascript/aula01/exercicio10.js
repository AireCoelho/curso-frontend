let idade = parseInt(window.prompt('Digite sua idade em dias'));
let ano = parseInt(idade / 360);
let mes = parseInt(idade % 360) / 30;
let dia = (idade % 360) % 30

document.write('Você tem ' + ano + ' anos, ' + mes + '  meses, e ' + dia + ' dias')
