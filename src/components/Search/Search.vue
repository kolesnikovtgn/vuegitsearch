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
            <button class="search__btn"><p class="search__btn-text">SEARCH</p></button>
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
    props: { }
  }
</script>

<style lang="scss">
    @import './Search.scss';
</style>
