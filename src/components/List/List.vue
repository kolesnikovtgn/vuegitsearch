<template>
  <div class="main">
    <div class="main__menu">
    <span :class="[isActive ? 'active' : 'not-active']" @click="isActive=true" class="main__menu-block">
      <i class="fas fa-th-large fa-3x"></i>
    </span>
      <span :class="[!isActive ? 'active' : 'not-active']" @click="isActive=false" class="main__menu-list">
      <i class="fas fa-bars fa-3x"></i>
    </span>
    </div>
    <div v-if="isActive" class="list">
      <Block v-for="repo in reposData" v-bind:key="repo.id" v-bind="repo" />
    </div>
    <div v-if="!isActive" class="list">
      <LineBlock v-for="repo in reposData" v-bind:key="repo.id" v-bind="repo" />
    </div>
  </div>

</template>

<script>
    import LineBlock from '../LineBlock/LineBlock';
    import Block from '../Block/Block'
    import { mapGetters } from 'vuex'

    export default {
      name: 'List',
      components: { LineBlock, Block },
      props: { },
      data: function () {
        return {
          isActive: true,
        }
      },
      computed: {
        ...mapGetters({
          reposData: 'getAllRepos',
        }),
      },
      methods: {

      }
    }
</script>

<style lang="scss">
    @import './List.scss';
</style>
