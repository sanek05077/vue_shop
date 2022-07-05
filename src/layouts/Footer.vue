<template>
  <footer class="footer">
    <FooterTop />
    <FooterBottom />
  </footer>
</template>

<script>
import FooterTop from '@/components/footer/FooterTop'
import FooterBottom from '@/components/footer/FooterBottom'
export default {
  name: "Footer",
  components: {
    FooterTop, FooterBottom
  }
}

</script>

<style lang="scss">
@import "@/assets/scss/_custom_variables.scss";
.footer {
  background: $secondary_color;
  padding: 2rem 0;
  color: $footer-color;
  font-size: rem-calc(14);
}
</style>
