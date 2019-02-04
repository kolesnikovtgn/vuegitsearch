<template>
  <div class="prj container-column">
    <div class="prj__rating container-row">
      <div class="prj__rating-language">Language</div>
      <div class="prj__rating-block container-row">
        <img class="prj__rating-block-img" src="../../assets/star.png">
        <div class="prj__rating-block-stars">123</div>
      </div>
    </div>
    <div class="prj__text container-column">
      <div class="prj__text-name">
        MyProjectName
      </div>
      <div class="prj__text-describe">
        DescribeThisProject
      </div>
      <div class="prj__text-taglist container-row">
        <div class="prj__text-taglist-tag">
          Javascript
        </div>
        <div class="prj__text-taglist-tag">
          CMS
        </div>
      </div>
    </div>
    <div class="prj__button container-column">
      <button class="prj__button-add"><p class="prj__button-add-text">ADD TO LIST</p></button>
      <button class="prj__button-delete"><p class="prj__button-delete-text"> REMOVE FROM LIST</p></button>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'Block',
    props: { }
  }
</script>

<style lang="scss">
  @import './Block.scss';
</style>
