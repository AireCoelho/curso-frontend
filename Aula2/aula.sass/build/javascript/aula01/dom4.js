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