import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sidebar: {
      opened:  false,
      withoutAnimation: false
    },
    device: 'desktop',
  },
  getters: {
    sidebar: state => state.sidebar,
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
