function logElementos(parent){
    console.log(`${parent.tagName} - ${parent.parentElement.tagName}`);
    const color = parent.getAttribute('cor');
    if(color){
        parent.style.color = color;
    }
    if(parent.children.length > 0){
        for(let i = 0; i< parent.children.length; i++){
            logElementos(parent.children[i]);
        }
    }
}

logElementos(document.body);
const titulo = document.getElementById('titulo');
if(titulo){
    titulo.style.fontSize = '60px';
}
const divs = document.getElementsByTagName('div');
let count = divs.length;
for(let i = 0; i< count; i++){
    divs[i].style.backgroundColor = '#ff6600'
}

const destaques = document.getElementsByClassName('destaque');
count = destaques.length;
for(let i = 0; i < count; i++){
    destaques[i].style.fontSize = '42px';
}

document.querySelector('#titulo').style.backgroundColor = '#ccc';
document.querySelector('p').style.backgroundColor = '#red';
document.querySelector('.menu').style.backgroundColor = '#33ff11';