<template>
  <div class="main">
    <div class="search container-row">
      <select class="search__rep" v-model="searchData.valueRep">
        <option v-for="rep in this.repositoriesSelect" v-bind:key="rep">{{rep}}</option>
      </select>
        <select class="search__lang" v-model="searchData.valueLang">
          <option hidden selected>Language</option>
          <option v-for="lang in this.languageSelect" v-bind:key="lang">{{lang}}</option>
        </select>
        <input class="search__input" placeholder="Type here for search" type="text" v-model="searchData.valueQuery">
          <div class="q">
            <button class="search__btn" @click="searchRequest(searchData)"><p class="search__btn-text">SEARCH</p></button>
          </div>
    </div>
      <List />
  </div>
</template>

<script>
  import List from '../List/List';

  export default {
    name: 'Search',
    components: { List },
    data: function () {
      return {
        searchData: {
          valueRep: null,
          valueLang: null,
          valueQuery: null,
        },
        repositoriesSelect: ['Type', 'repositories'],
        languageSelect: ['javascript', 'css', 'php', 'ruby', 'c++', 'python', 'c#', 'java', 'go', 'haskel'],
      }
    },
    props: { },
    methods: {
      searchRequest(data) {
        this.$store.dispatch('axiosData', data);
      },
    },
  }
</script>

<style lang="scss">
    @import './Search.scss';
</style>
