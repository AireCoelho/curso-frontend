<template>
    
    <div class="form">
    <div class="field">
    <label>Id</label>
    <input type="text" v-model="cliente.id"/>
    </div>
    <div class="field">
    <label>Nome</label>
    <input type="text" v-model="cliente.nome"/>
    </div>
    <div class="field">
    <label>Email</label>   
    <input type="text" v-model="cliente.email"/>
    </div>
    <div class="field">    
    <label>Telefone</label>  
    <input type="text" v-model="cliente.telefone"/>
    </div>
    <div class="field">
    <label>Rua</label>    
    <input type="text" v-model="cliente.endereco.rua"/>
    </div>
    <div class="field">
    <label>Numero</label>
    <input type="text" v-model="cliente.endereco.numero"/>
    </div>
    <div class="field">
    <label>Complemento</label>
    <input type="text" v-model="cliente.endereco.complemento"/>
    </div>
    <div class="field">
    <label>Bairro</label>
    <input type="text" v-model="cliente.endereco.bairro"/>
    </div>
    <div class="field">
    <label>Cidade</label>
    <input type="text" v-model="cliente.endereco.cidade"/>
    </div>
    <div class="field">
    <label>UF</label>
    <select v-model="cliente.endereco.uf">
        <option value="" disabled > Selecione um Estado </option>
        <option v-for="(uf,index) in UnidadesFederativas" :key="index" :value="uf">
            {{uf}}
        </option>
    </select>
    </div>
    <div class="field">
        <button @click="salvar()">Salvar</button>
    </div>
    </div>
</template>

<script>
import * as ClienteService from './ClienteService'
export default {
    name: "FormClientes",
    data(){
        return{
            cliente:{
                id:'',
                nome:'',
                email:'',
                telefone:'',
                endereco:{
                    rua:'',
                    numero:'',
                    complemento:'',
                    bairro:'',
                    cidade:'',
                    uf:''
                }
            },
            UnidadesFederativas: ['AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MT','MS','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO']
        }
    },
   methods:{
       salvar(){
           alert('Salvar')
       }
   },
   created(){
       const id = this.$route.params.id;
       console.log(id);
       if(id && id != "novo"){
           ClienteService
           .buscarPorId(id)
           .then((response)=>{
               this.cliente = response.body;
           })
           .catch((e)=> console.log(e));
       }
   }
}
</script>

<style scoped>
.form,
.field{
  display: flex;
  flex-direction: column;
  text-align: left;
}

.form{
  width:1200px;
  margin: 10px auto;
}

.field input,
.field button,
.field select{
  width:100%;
  height: 30px;
  margin:5px
}
.field label{
  margin:5px;
}
</style>
