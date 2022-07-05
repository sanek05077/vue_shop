<template>
  <div class="navigation-section">
    <b-container>
      <b-row class="row">
        <HeaderMainNav/>
        <HeaderMobileNav/>
        <HeaderCart/>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import HeaderMainNav from '@/components/header/HeaderMainNav'
import HeaderMobileNav from '@/components/header/HeaderMobileNav'
import HeaderCart from '@/components/header/HeaderCart'
export default {
  name: "HeaderNav",
  components: {
    HeaderMainNav, HeaderMobileNav, HeaderCart
  }
}
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/_custom_variables.scss";
  .navigation-section {
    background: $secondary_color;
    padding: rem-calc(10 0);
  }
  @media (min-width: 992px) {
    .navigation-section {
      padding: 0;
    }
  }
</style>
