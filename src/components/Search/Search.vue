<template>
  <div class="main">
    <div class="search container-row">
      <select class="search__rep">
        <option>Type</option>
        <option>repositories</option>
      </select>
        <select class="search__lang">
          <option hidden selected>Language</option>
          <option></option>
        </select>
        <input class="search__input" placeholder="Type here for search" type="text">
          <div class="q">
            <button class="search__btn" @click="searchRequest"><p class="search__btn-text">SEARCH</p></button>
          </div>
    </div>
    <p v-for="repo in reposData" v-bind:key="repo.id">{{ repo.name }}</p>
      <List />
  </div>
</template>

<script>
  import List from '../List/List';
  import { mapGetters } from 'vuex';

  // const params = {
  //   repositories: 'repositories',
  //   query: 'cms',
  //   language: 'javascript',
  // }

  export default {
    name: 'Search',
    components: { List },
    props: { },
    computed: {
        ...mapGetters({
          reposData: 'getAllRepos',
        }),
      todo() {
          return this.$store.getters.getAllRepos;
      }
    },
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
