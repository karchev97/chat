import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      login: '',
      link: ''
    },
    messages: []
  },
  mutations: {
    addUser: (state, obj) => {
      state.user.login = obj.login;
      state.user.link = obj.link;
    },
    addMessage: (state, obj) => {
      state.messages.push(obj);
    }
  },
  getters: {
    getUser: (state) => {
      return state.user;
    },
    getMessages: (state) => {
      return state.messages;
    }
  },
  actions: {
  },
  modules: {
  }
})
