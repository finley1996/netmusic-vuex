import Vue from 'vue'
import Router from 'vue-router'
import discover from './pages/discover.vue'
import playlist from './pages/playlist.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'discover',
      component:discover
    },
    {
      path:'/playlist',
      name:'playlist',
      component:playlist
    }
  ]
})
