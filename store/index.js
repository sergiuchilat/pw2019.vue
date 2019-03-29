import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    message: '',
    students: []
  },
  mutations: {
    setMessage: state => {
      state.message = 'test'
    },
    setStudents (state, data) {
      state.students = data
    }
  },
  getters: {
    getMessage (state) {
      return state.message
    },
    getStudents (state) {
      return state.students
    }
  },
  actions: {
    fetchData (context) {
      fetch('http://localhost:3000/students')
        .then(response => {
          return response.json()
        })
        .then(data => {
          context.commit('setStudents', data)
        })
    }
  }
})

export default store
