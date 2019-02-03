<template>
    <div class="main">
      <div class="header container-row">
        <div class="header__logo container-row">
          <div class="header__logo-image">
            <img class="header__logo-image-cat" src="./assets/logo.png">
            <img class="header__logo-image-search" src="./assets/logo_search.png">
          </div>
          <div class="header__logo-text container-column">
            <div class="header__logo-text-top">GitHub</div>
            <div class="header__logo-text-down">search</div>
          </div>
        </div>
        <div class="header__nav container-row">
          <router-link to="/search" class="header__nav-search">Search</router-link>
          <router-link to="/mylist" class="header__nav-mylist">My List</router-link>
        </div>
      </div>
      <router-view></router-view>
      <div class="footer">
        <div class="footer__text">copyright @lodossteam 2018</div>
      </div>
    </div>
</template>

<script>

export default {
  name: 'App',
  components: { }
}
</script>

<style lang="scss">
  @import './App.scss';
</style>
