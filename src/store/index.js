import { createStore } from 'vuex'
import axios from "axios";

export default createStore({
  state: {
    data: [],
    limit: 10,
  },
  mutations: {
    setData(state, data) {
      state.data = data
    },

    setLimit(state, limit) {
      state.limit = limit
    }
  },
  actions: {
    async fetchData({state, commit}) {
      try {
        let res = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              _limit: state.limit,
            },
          }
        );
        commit('setData', res.data)
      } catch (error) {
        console.log(error);
      }
    },

    async moreData({state, commit}, items) {
      try {
        commit('setLimit', state.limit = items)

        let res = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              _limit: state.limit,
            },
          }
        );
        commit('setData', res.data)
      } catch (error) {
        console.log(error);
      }
    },
  },
})
