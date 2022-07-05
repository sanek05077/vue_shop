<template>
  <div class="banner">
    <a href="#">
      <img :src=" require ('@/assets/images/img-banner.png' )" alt="image"/>
    </a>
  </div>
</template>

<script>
export default {
  name: "BannerTop"
}
</script>

<style lang="scss" scoped>
  .banner {
    position: relative;
    transition: all 0.5s ease-in-out;
    &:hover {
      transform: scale(1.01, 1.01);
    }
  }
</style>
