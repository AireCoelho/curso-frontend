<template>
  <div>
    <h1>Meu nome completo é {{nomeCompleto}}</h1>
    <MeuComponente 
    :mensagem="primeiroNome"
    v-on:clicado="notificarClick($event)"></MeuComponente>
  </div>
</template>

<script>
import MeuComponente from './MeuComponente'
export default {
  name: 'HelloWorld',
  data () {
    return {
      primeiroNome: 'Airê',
      sobrenome: 'Coelho'
    }
  },
  methods:{
    notificarClick($event){
      console.log($event);
    }
  },
  computed:{
    nomeCompleto(){
      return `${this.primeiroNome} ${this.sobrenome}`
    }
  },
  components:{
    MeuComponente
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
