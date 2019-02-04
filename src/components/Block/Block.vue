<template>
  <div class="prj container-column">
    <div class="prj__rating container-row">
      <div class="prj__rating-language">{{language}}</div>
      <div class="prj__rating-block container-row">
        <img class="prj__rating-block-img" src="../../assets/star.png">
        <div class="prj__rating-block-stars">{{stargazers_count}}</div>
      </div>
    </div>
    <div class="prj__text container-column">
      <div class="prj__text-name">
        {{name}}
      </div>
      <div class="prj__text-describe">
        {{description}}
      </div>
      <div class="prj__text-taglist container-row">
        <div class="prj__text-taglist-tag">
          {{langSearch}}
        </div>
        <div class="prj__text-taglist-tag">
          {{querySearch}}
        </div>
      </div>
    </div>
    <div class="prj__button container-column">
      <button v-if="!myList" class="prj__button-add" v-on:click="toggleMyList(id)" ><p class="prj__button-add-text">ADD TO LIST</p></button>
      <button v-if="myList" class="prj__button-delete" v-on:click="toggleMyList(id)" ><p class="prj__button-delete-text"> REMOVE FROM LIST</p></button>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'Block',
    props: ['id', 'name', 'language', 'querySearch',
      'description', 'langSearch', 'stargazers_count', 'myList'],
    methods: {
      toggleMyList(id) {
        this.$store.dispatch('toggle_mylist', id);
      },
    },
  }
</script>

<style lang="scss">
  @import './Block.scss';
</style>
