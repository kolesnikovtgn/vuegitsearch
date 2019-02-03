import Vue from 'vue'
import Router from 'vue-router'
import Search from './components/Search/Search.vue'
import Mylist from './components/Mylist/Mylist.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'search',
      component: Search,
    },
    {
      path: '/search',
      name: 'search',
      component: Search,
    },
    {
      path: '/mylist',
      name: 'mylist',
      component: Mylist,
    },
  ],
});