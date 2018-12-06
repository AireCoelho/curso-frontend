<template>
    <div>
        <button @click="checkoutHandler">Checkout</button> 
        <div class="produto-dashboard">
        <produto-card
        v-for="produto in produtos"
        :key="produto.id"
        :produto="produto" 
        @add-card="addCardHandler"/>
    </div>
    </div>
</template>

<script>
import Produto from './produto';
import ProdutoCard from './ProdutoCard';
import CarrinhoProdutoService from './CarrinhoProdutoService';

export default {
    name:'ProdutosDashboard',
    data(){
        return {
            produtos: [
                new Produto(
                    {
                        id:1, 
                        nome: 'Gato Falsificado', 
                        descricao: "Gato na Promoção",
                        preco:19.90,
                        imagem:'https://i1.wp.com/omeuanimal.com/wp-content/uploads/2016/07/pancreatite-gato-capa.png?fit=1920%2C1086&ssl=1'
                    }
                        ),
                    
                    
                    new Produto(
                    {
                        id:2, 
                        nome: 'Gato Falsificado 2', 
                        descricao: "Gato na Promoção 2",
                        preco:19.90,
                        imagem:'https://i1.wp.com/omeuanimal.com/wp-content/uploads/2016/07/pancreatite-gato-capa.png?fit=1920%2C1086&ssl=1'
                    }
                        ),


                    new Produto(
                    {
                        id:3, 
                        nome: 'Gato Falsificado 3', 
                        descricao: "Gato na Promoção 3",
                        preco:19.90,
                        imagem:'https://i1.wp.com/omeuanimal.com/wp-content/uploads/2016/07/pancreatite-gato-capa.png?fit=1920%2C1086&ssl=1'
                    }
                        ),
            ]
        }
    },
    methods:{
        addCardHandler(produto){
        CarrinhoProdutoService.add(produto);
        const message = `Total de produtos adicionados = ${CarrinhoProdutoService.getProdutos().length}`;
        alert(message);
        },
        checkoutHandler(){
            this.$router.push({name:'checkout'});
        }
    },
    components:{
        ProdutoCard
    }   
}
</script>

<style scoped>
    .produto-dashboard{
        display: flex;
        flex-wrap: wrap;
    }
</style>
