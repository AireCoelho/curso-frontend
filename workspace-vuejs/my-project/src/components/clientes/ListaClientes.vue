<template>
    <div>
      <h1> Tenho que colocar uma lista de clientes aqui </h1>
      <table>
          <thead>
              <tr>
                <th>Id</th>
                <th>nome</th>
                <th>email</th>
                <th>telefone</th>
                  
              </tr>
          </thead>
            <tbody>
                <tr v-for="(cliente,index) in clientes" :key='index'>
                    <td>{{cliente.id}}</td>
                    <td><router-link :to="getUrl(cliente)">{{cliente.nome}}</router-link></td>
                    <td>{{cliente.email}}</td>
                    <td>{{cliente.telefone}}</td>
                   
                        
                    
                </tr>
            </tbody>
            <tfoot>
                
            </tfoot>
      </table>                    
  </div>
</template>

<script>
import * as ClienteService from './ClienteService'
export default {
    name: 'ListaClientes',
    data(){
        return{
            clientes: []
        }
    },
    methods:{
      getUrl(cliente){
          return `/clientes/${cliente.id}`
      }  
    },
    created(){
        ClienteService
        .buscarTodos()
        .then(response=>{
            this.clientes = response.body;
            console.log(this.clientes)
        })
    },

}
</script>

<style scoped>
table{
  max-width: 1200px;
  margin: 10px auto;
  border-collapse: collapse;
}
td, th{
  border: 1px solid #ccc;
}
</style>
