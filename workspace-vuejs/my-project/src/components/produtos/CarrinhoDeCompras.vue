<template>
  <div>
    <h1>Meus Produtos</h1>
    <table>
      <thead>
        <tr>
          <th>Código</th>
          <th>Imagem</th>
          <th>Nome</th>
          <th>Preco</th>
        </tr>
      </thead>
      <tbody>
          <tr v-for="produto in produtos" :key="produto.id">
            <td>{{produto.id}}</td>
            <td><div class="tumb">
                <img :src="produto.imagem" :alt="produto.nome">
              </div></td>
            <td>{{produto.nome}}</td>
            <td>{{produto.preco.toFixed(2).replace('.',',')}}</td>
          </tr>
      </tbody>
      <tfoot>
        <tr style="font-size:20px">
          <td colspan="3" style="text-align:left">
            <strong>Total</strong>
          </td>
          <td>{{total.toFixed(2).replace('.',',')}}</td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>
<script>
import CarrinhoProdutoService from './CarrinhoProdutoService';


export default {
  name:'CarrinhoDeCompras',
  data(){
    return {
      produtos: []
    }
  },
  computed:{
    total(){
      return this.produtos.reduce((a,c)=> a+c.preco,0);
    }
  },
  created() {
    this.produtos = CarrinhoProdutoService.getProdutos();
  },

}
</script>
<style scoped>
.tumb{
  width:100px;
  height: 100px;
}
.tumb img{
  width: 100%;
  height: 100%;
}
table{
  max-width: 1200px;
  margin: 10px auto;
  border-collapse: collapse;
}
td, th{
  border: 1px solid #ccc;
}
</style>
