<template>
  <div class="main">
    <p class="main__text">My List</p>
    <Myrecord/>
  </div>
</template>

<script>
  import Myrecord from '../Myrecord/Myrecord';

  export default {
    name: 'Mylist',
    components: { Myrecord },
    props: { }
  }
</script>

<style lang="scss">
    @import './Mylist.scss';
</style>
