import React, { Component } from 'react';

const ListaTarefas = (props)=>{
    const itens = props.itens.map((it,index) =>{
        const remover = (event)=>{
            event.preventDefault();
            props.onRemover(it);
        }
        return(<li key={index}>{it}<button onClick={remover}>remover</button></li>)
        return(<li key={index}>{it}</li>);
    });
    return(
        <ul>
            {itens}
        </ul>
    );
}

export default ListaTarefas;