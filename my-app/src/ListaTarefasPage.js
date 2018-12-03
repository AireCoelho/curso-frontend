import React from 'react';
import ListaTarefas from './ListaTarefas';
import FormTarefas from './FormTarefas';

class ListaTarefaPage extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            tarefas:[
                "Cortar o cabelo",
                "Comprar carne",
                "Comprar os presentes de fim de ano",
                "Levar o carro na oficina"
            ]
        }
    }

    adicionarTarefa = (tarefa)=>{
        this.setState((prevState)=>{
            const tarefas = prevState.tarefas;
            tarefas.push(tarefa);
            return {tarefas};
        })
    }

    removerTarefa = (tarefa)=>{
        this.setState((prevState)=>{
            const tarefas = prevState.tarefas.filter(t => t != tarefa);
            return {tarefas};
        })
    }

    render(){
        return(
            <div>
                <h1> Minhas tarefas</h1>
                <FormTarefas onAdicionar={this.adicionarTarefa}></FormTarefas>
                <ListaTarefas 
                itens={this.state.tarefas}
                onRemover={this.removerTarefa}></ListaTarefas>
               
               
            
            </div>
        );
    } 
}

export default ListaTarefaPage;