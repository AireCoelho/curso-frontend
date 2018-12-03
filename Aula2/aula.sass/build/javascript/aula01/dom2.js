function logElementos(parent){
    console.log(`${parent.tagName} - ${parent.parentElement.tagName}`);
    if(parent.children.length > 0){
        for(let i = 0; i < parent.children.length; i++){
            logElementos(parent.children[i]);
        }
    }
}

logElementos(document.body);