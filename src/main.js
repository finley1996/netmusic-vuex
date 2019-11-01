import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import view from 'view-design'
import 'view-design/dist/styles/iview.css'
import '@/assets/css/common.css'
Vue.config.productionTip = false
Vue.use(view)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
