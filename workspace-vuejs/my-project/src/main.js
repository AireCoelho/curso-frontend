// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResouce from 'vue-resource'
import * as BackendService from './BackendService'

Vue.config.productionTip = false

Vue.use(VueResouce);
const vue = new Vue({});
BackendService.build(vue.$http);


new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

console.log(vue.$http);
BackendService.build(vue.$http);
