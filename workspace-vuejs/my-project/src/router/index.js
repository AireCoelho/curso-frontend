import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import TodoComponent from '@/components/TodoComponent'
import ProdutosDashboard from '@/components/produtos/ProdutosDashboard'
import CarrinhoDeCompras from '@/components/produtos/CarrinhoDeCompras'
import ListaClientes from '@/components/clientes/ListaClientes'
import FormClientes from '@/components/clientes/FormClientes'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
    path: '/tarefas',
      name: 'tarefas',
      component: TodoComponent
    },
    {
      path: '/produtos',
        name: 'produtos',
        component: ProdutosDashboard
      },
      {
        path: '/carrinho',
          name: 'checkout',
          component: CarrinhoDeCompras
        },
      { path: '/clientes',
        name: 'clientes',
        component: ListaClientes
      },
      { path: '/clientes/:id',
        name: 'formulario',
        component: FormClientes
      }
  ]
})
