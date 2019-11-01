import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    misicurl:'https://music.163.com/outchain/player?type=2&id=26497466&auto=1&height=66'
  },
  mutations: {
    changemisicurl(state,payload){
      state.misicurl='https://music.163.com/outchain/player?type=2&id='+payload+'&auto=1&height=66'
    }
  },
  actions: {

  }
})
