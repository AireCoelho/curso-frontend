import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import TodoComponent from '@/components/TodoComponent'
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
    }
  ]
})
