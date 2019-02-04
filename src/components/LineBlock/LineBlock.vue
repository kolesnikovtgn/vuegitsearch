<template>
  <div class="project container-row">
    <div class="project__checkimage">
      <div class="project__checkimage-square">
        <div v-if="myList" class="project__checkimage-image enable"> </div>
        <div v-if="!myList" class="project__checkimage-image disable"> </div>
      </div>
    </div>
    <div class="project__text container-column">
      <div class="project__text-name">
       {{name}}
      </div>
      <div class="project__text-describe">
        {{description}}
      </div>
      <div class="project__text-taglist container-row">
        <div class="project__text-taglist-tag">
          {{langSearch}}
        </div>
        <div class="project__text-taglist-tag">
          {{querySearch}}
        </div>
      </div>
    </div>
    <div class="project__rating container-column">
      <div class="project__rating-block container-row">
        <img  class="project__rating-block-img" src="../../assets/star.png">
        <div class="project__rating-block-stars">{{stargazers_count}}</div>
      </div>
      <div class="project__rating-language">
        {{language}}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'LineBlock',
    props: ['name', 'language', 'querySearch',
      'description', 'langSearch', 'stargazers_count', 'myList'],
  }
</script>

<style lang="scss">
  @import './LineBlock.scss';
</style>
