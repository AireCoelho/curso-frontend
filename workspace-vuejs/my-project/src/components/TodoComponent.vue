<template>
    <div>
        <h1>Minhas Tarefas</h1>
    
    <div>
    <input type="text" v-model="tarefaAtual"/>
    <button @click="addTarefa()">Add</button>
    </div>
    <ul>
        <li v-for="t in tarefas" v-bind:key="t.id">
            <input type="checkbox" v-model="t.concluida"/>
            <span v-bind:class="{'concluida':t.concluida }">{{t.titulo}}</span> 
            <button @click="remover(t.id)">Remover</button>
        </li>
    </ul>
   
    </div>
    
</template>

<script>
export default {
    name:'TodoComponent',
    data(){
        return{
            tarefas:[],
            tarefaAtual:''
        };
    },   
    methods:{
        addTarefa(){
            const tarefa = {
                id: new Date().getTime(),
                titulo: this.tarefaAtual,
                concluida: false
            }
            this.tarefas.push(tarefa);
            this.tarefaAtual = '';
        },
        remover(id){
            this.tarefas = this.tarefas.filter(t => t.id !== id);
        }

    }
}
</script>

<style>
    ul{
    list-style: none;
    
}
    .concluida{
        text-decoration: line-through;
    }
</style>
