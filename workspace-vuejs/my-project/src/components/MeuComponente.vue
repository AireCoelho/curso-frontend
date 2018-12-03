<template>
    <h3 @click="show()" class="mensagem">{{mensagem}}</h3>
</template>

<script>
export default {
    name:'MeuComponente',
    props:['mensagem'],
    methods:{
        show(){
            alert('Você clicou no primeiro nome');
            this.$emit('clicado','click no primeiro nome')
        }
    }    
}
</script>

<style>
.mensagem{
    cursor: pointer;
}
</style>
