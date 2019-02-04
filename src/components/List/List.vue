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
      <Block />
      <Block />
      <Block />
      <Block />
    </div>
    <div v-if="!isActive" class="list">
      <LineBlock />
      <LineBlock />
      <LineBlock />
      <LineBlock />
    </div>
  </div>

</template>

<script>
    import LineBlock from '../LineBlock/LineBlock';
    import Block from '../Block/Block'

    export default {
      name: 'List',
      components: { LineBlock, Block },
      props: { },
      data: function () {
        return {
          isActive: true,
        }
      },
      methods: {
        // toggleRenderBlock: function () {
        //   this.isActive = !this.isActive;
        // }
      }
    }
</script>

<style lang="scss">
    @import './List.scss';
</style>
