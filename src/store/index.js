import { createStore } from 'vuex'
import { api } from "@/api/index.js"

export default createStore({
  state: {
    data: [],
    limit: 10,
    url: 'https://jsonplaceholder.typicode.com/posts'
  },
  mutations: {
    setData(state, data) {
      state.data = data
    },

    setLimit(state, limit) {
      state.limit = limit
    },
  },
  actions: {
    async fetchData({state, commit}) {
      try {
        let res = await api(state.limit, state.url)
        commit('setData', res.data)
      } catch (error) {
        console.log(error);
      }
    },

    async moreData({state, commit}, items) {
      try {
        commit('setLimit', state.limit = items)
        let res = await api(state.limit, state.url)
        commit('setData', res.data)
      } catch (error) {
        console.log(error);
      }
    },
  },
})
