import Vue from 'vue'
import Vuex from 'vuex'
import { Service } from '../api/Service'

Vue.use(Vuex);

// const params = {
//   repositories: 'repositories',
//   query: 'cms',
//   language: 'javascript',
// }

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
    toggle_mylist(state, payload) {
      return {
        ...state,
        reposData: state.reposData.map(item =>
            (item.id === payload.id)
                ? {...item, myList: !item.myList}
                : item
        ),
      }
    }
  },
  actions: {
    axiosData({ commit }) {
      Service.axios({
        repositories: 'repositories',
        query: 'cms',
        language: 'javascript',
      })
          .then(response => {
            commit('set_all_repositories', {
              reposData: response,
            })
            // eslint-disable-next-line no-console
            console.log(response);
          });
    },
    toggle_mylist({commit}, data) {
      commit('toggle_mylist', data);
    }
  },

});
