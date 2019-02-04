import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    reposData: [
      {
        id: '1',
        name: 'MyJSProgram',
        language: 'JavaScript',
        langSearch: 'javascript',
        querySearch: 'cms',
        description: 'react + nodejs',
        stargazers_count: '123',
        myList: false,
      },
      {
        id: '2',
        name: 'MyRubyProject',
        language: 'JavaScript',
        langSearch: 'javascript',
        querySearch: 'cms',
        description: 'angular + rubyOnRails',
        stargazers_count: '321',
        myList: true,
      },
      {
        id: '3',
        name: 'BestJS',
        language: 'JavaScript',
        langSearch: 'javascript',
        querySearch: 'cms',
        description: 'vanile js',
        stargazers_count: '444',
        myList: false,
      },
      {
        id: '4',
        name: 'BestJS',
        language: 'JavaScript',
        langSearch: 'javascript',
        querySearch: 'cms',
        description: 'vanile js',
        stargazers_count: '444',
        myList: false,
      },
    ]
  },
  getters: {
    getAllRepos: state => {
      return state.reposData;
    },
    getMyList: state => {
      return state.reposData.filter(rep => rep.myList)
    },

  },
  mutations: {
    get_repositories(state, payload) {
      return { ...state, userData: payload };
    },
    change_mylist_status(state, payload) {
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
    get_repositories({commit}, data) {
      commit('get_repositories', data);
    },
    change_mylist_status({commit}, data) {
      commit('change_mylist_status', data);
    }
  },

});

export { store as default }
