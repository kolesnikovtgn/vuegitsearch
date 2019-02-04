<template>
  <div class="main">
    <div class="search container-row">
      <select class="search__rep">
        <option v-for="rep in this.repositoriesSelect" v-bind:key="rep">{{rep}}</option>
      </select>
        <select class="search__lang">
          <option hidden selected>Language</option>
          <option v-for="lang in this.languageSelect" v-bind:key="lang">{{lang}}</option>
        </select>
        <input class="search__input" placeholder="Type here for search" type="text">
          <div class="q">
            <button class="search__btn" @click="searchRequest"><p class="search__btn-text">SEARCH</p></button>
          </div>
    </div>
      <List />
  </div>
</template>

<script>
  import List from '../List/List';
//  import { mapGetters } from 'vuex';

  // const params = {
  //   repositories: 'repositories',
  //   query: 'cms',
  //   language: 'javascript',
  // }

  export default {
    name: 'Search',
    components: { List },
    data: function () {
      return {
        repositoriesSelect: ['Type', 'repositories'],
        languageSelect: ['javascript', 'css', 'php', 'ruby', 'c++', 'python', 'c#', 'java', 'go', 'haskel'],
      }
    },
    props: { },
//    computed: {
//        ...mapGetters({
//          reposData: 'getAllRepos',
//        }),
//    },
    methods: {
      searchRequest() {
        this.$store.dispatch('axiosData');
      },
    },
  }
</script>

<style lang="scss">
    @import './Search.scss';
</style>
