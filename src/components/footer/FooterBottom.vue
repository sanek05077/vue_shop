<template>
  <b-container>
    <b-row>
      <b-col col>
        <div class="footer-bottom">
          <p>{{ sitename }} © 2017 - {{ new Date().getFullYear() }}. Все права защищены.</p>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "FooterBottom",
  data () {
    return {
      sitename: process.env.VUE_APP_SITENAME,
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_custom_variables.scss";
  .footer-bottom {
    margin: 1rem 0 0;
    padding: 1rem 0 0 0;
    border-top: 1px solid $footer-color;
  }
</style>
