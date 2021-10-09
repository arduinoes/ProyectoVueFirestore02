import { createStore } from 'vuex'

export default createStore({
  state: {
    usuario: null,
  },
  mutations: {
    setUsuario(state, payload){
      state.usuario = payload
    }
  },
  actions: {
    detectarUsuario({commit}, usuario){
      commit('setUsuario', usuario)
    }
  },
  getters: {
    existeUsuario(state){
      if(state.usuario === null){
        return false;
      }else{
        return true;
      }
    }
  },
  modules: {
  }
})
