<template>
  <div class="project container-row">
    <div class="project__checkimage">
      <div class="project__checkimage-square">
        <div class="project__checkimage-image enable"> </div>
        <div class="project__checkimage-image disable"> </div>
      </div>
    </div>
    <div class="project__text container-column">
      <div class="project__text-name">
       Prjname
      </div>
      <div class="project__text-describe">
        PrjDescribe
      </div>
      <div class="project__text-taglist container-row">
        <div class="project__text-taglist-tag">
          Javascript
        </div>
        <div class="project__text-taglist-tag">
          CMS
        </div>
      </div>
    </div>
    <div class="project__rating container-column">
      <div class="project__rating-block container-row">
        <img  class="project__rating-block-img" src="../../assets/star.png">
        <div class="project__rating-block-stars">123</div>
      </div>
      <div class="project__rating-language">
        Javascript
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'LineBlock',
    props: { }
  }
</script>

<style lang="scss">
  @import './LineBlock.scss';
</style>
