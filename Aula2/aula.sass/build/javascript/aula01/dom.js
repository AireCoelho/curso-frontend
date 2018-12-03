let titulo = 'Bem vindo ao JavaScrip';
let frutas = ['Maçã','Banana','Uva','Melancia','Abaca'];

let elTitulo = document.getElementById('titulo');
let elLista = document.getElementById('lista');

elTitulo.innerText = titulo;

elLista.innerHTML = frutas.map(fruta => `<li> ${fruta}</li>`).join('');