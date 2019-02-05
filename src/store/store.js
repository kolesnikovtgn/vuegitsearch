import Vue from 'vue'
import Vuex from 'vuex'
import { Service } from '../api/Service'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    reposData: [],
  },
  getters: {
    getAllRepos: state => state.reposData,
    getMyList: state => state.reposData.filter(rep => rep.myList),

  },
  mutations: {
    set_all_repositories: (state, {reposData}) => {
      Vue.set(state, 'reposData', reposData)
    },
    toggle_mylist: (state, payload) => {
      var item = state.reposData.find(repo => repo.id === payload);
      item.myList = !item.myList;
    },
  },
  actions: {
    axiosData({ commit }, data) {
      Service.axios(data)
          .then(response => {
            commit('set_all_repositories', {
              reposData: response,
            })
          });
    },
    toggle_mylist({commit}, data) {
      commit('toggle_mylist', data);
    }
  },

});
