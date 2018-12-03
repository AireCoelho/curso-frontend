import React from 'react';

class FormTarefas extends React.Component{

    constructor(props){
        super(props);
    }

    adicionarHandler = (event) =>{
        event.preventDefault();
        this.props.onAdicionar(event.target.texto.value)
        event.target.texto.value = '';
    }
    
    render(){
        return(
            <div>
                <form onSubmit={this.adicionarHandler}>
                <input name="texto" />
                <button type="submit">Adicionar</button>
                </form>
            </div>
        )
    }
}

export default FormTarefas