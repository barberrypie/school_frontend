import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import DefaultLayout from '@/layouts/DefaultLayout'
import AuthLayout from '@/layouts/AuthLayout'



Vue.config.productionTip = false

Vue.component('default-layout', DefaultLayout)
Vue.component('auth-layout', AuthLayout)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
