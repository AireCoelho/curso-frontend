<template>
    <div class="card">
        <div class="card__image-container">
            <img v-bind:src="produto.imagem" class="card__image">
        </div>
        
        <div class="card__content">
            <h3 class="card__title">{{produto.nome}}</h3>
            <p class="card__value">R$ {{produto.preco.toFixed(3).replace('.',',')}}</p>
            <p class="card__description"> {{produto.descricao}}</p>
            <hr class="card__divider"> 
            <button class="card__button-checkout" @click="add(produto)">Adicionar ao carrinho</button>
        </div>
    </div>

</template>

<script>


export default {
    name:"ProdutoCard",
    props: ['produto'],
    methods:{
        add(produto){
            
            this.$emit('add-card',produto)
        }
    }
    }

</script>

<style scoped>
.card{
    display: flex;
    flex-direction: column;
    margin:10px;
    width: 300px;
    height: 450px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.card__image-container{
    width: 100%;
    height: 200px;
    overflow: hidden;
}

.card__image{
    width: 100%;
    height: 100%;
}

.card__content{
    width: 100%;
    flex-grow: 1;
    overflow: hidden;
}

.card__title{
    font-size: 32px;
    color: #333;
    text-align: center;
    font-family: sans-serif;
    margin: 10px;    
}

.card__value{
    font-size: 28px;
    color: #777;
    text-align: center;
    font-family: sans-serif;
}

.card__description{
    max-height: 50px;
    overflow: hidden;
}

.card__divider{
    height: 1px;
    border: none;
    background-color: #333;
    width: 90%;
    margin: 10px auto;
}

.card__button-checkout{
    border: none;
    width: 90%;
    height: 30px;
    font-size: 16px;
    color: #fff;
    background-color: #16A085
}
</style>
