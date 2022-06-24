import { createStore } from 'vuex'
import { api } from "@/api/index.js"

export default createStore({
  state: {
    data: [],
    limit: 10,
    url: 'https://randomuser.me/api/',
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
        console.log(res.data.results)
        let resData = res.data.results
        commit('setData', resData)
      } catch (error) {
        console.log(error);
      }
    },

    async moreData({state, commit}, items) {
      try {
        commit('setLimit', state.limit = items)
        let res = await api(state.limit, state.url)
        commit('setData', res.data.results)
      } catch (error) {
        console.log(error);
      }
    },
  },
})
