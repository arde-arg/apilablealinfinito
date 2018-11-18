import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      loading: false
    }),
    mutations: {
      SET_LOADING (state, status) {
        state.loading = status
      }
    }
  })
}

export default createStore