import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    message: ''
  },
  mutations: {
    setMessage: state => {
      state.message = 'test'
    }
  },
  getters: {
    getMessage (state) {
      return state.message
    }
  }
})

export default store
