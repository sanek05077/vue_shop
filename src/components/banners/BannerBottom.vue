<template>
  <b-container>
    <b-row>
      <b-col col>
        <div class="banner-bottom">
          <b-row class="row align-items-center text-center text-sm-left justify-content-md-around">
            <b-col col md="8">
              <h4>Получить профессиональную консультацию! </h4>
              <p>Поможем сделать правильный выбор и предоставим скидку!</p>
            </b-col>
            <b-col col md="3" class="text-center text-md-right">
              <a href="#" class="btn btn-secondary">Заказать</a>
            </b-col>
          </b-row>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "BannerTop"
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_custom_variables.scss";
.banner-bottom {
  @include horizontalGradient($brand_color,$dark_brand_color);
  padding: 1rem;
  color: $head-color;
  margin-top: 2rem;
  h4 {
    color: $head-color;
    font-size: rem-calc(18);
  }
}
@include media-breakpoint-up(md) {
  .banner-bottom {
    padding: 2rem 1rem;
  }
}
</style>
