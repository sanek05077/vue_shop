<template>

  <b-container>
    <b-row>
      <b-col col sm="6" md="3">
        <h5>Информация</h5>
        <ul class="footer-nav">
          <li><a href="#">Полезные статьи</a></li>
          <li><a href="#">Оплата и доставка</a></li>
          <li><a href="#">Сертификаты</a></li>
          <li><a href="#">Публичная оферта</a></li>
        </ul>
      </b-col>
      <b-col col sm="6" md="3">
        <h5>Категории</h5>
        <ul class="footer-nav">
          <li><a href="#">Керамические обогреватели</a></li>
          <li><a href="#">Экономные обогреватели</a></li>
          <li><a href="#">Электрический теплый пол</a></li>
          <li><a href="#">Электрорадиаторы</a></li>
        </ul>
      </b-col>
      <b-col col sm="6" md="3">
        <h5>Категории</h5>
        <ul class="footer-nav">
          <li><a href="#">Кондиционеры</a></li>
          <li><a href="#">Наружный обогрев</a></li>
          <li><a href="#">Уничтожители насекомых</a></li>
        </ul>
      </b-col>
      <b-col col sm="6" md="3">
        <h5>Контакты</h5>
        <ul class="footer-nav">
          <li><span class="icon"><b-icon icon="map"></b-icon></span>Ирпень, ул. Чехова, 11</li>
          <li><span class="icon"><b-icon icon="telephone"></b-icon></span><a href="#">+38 (067) 225-50-30</a></li>
          <li><span class="icon"><b-icon icon="telephone"></b-icon></span><a href="#">+38 (067) 225-50-30</a></li>
          <li><span class="icon"><b-icon icon="envelope"></b-icon></span><a href="mailto:info@gaston.com.ua">info@gaston.com.ua</a></li>
        </ul>
      </b-col>
    </b-row>

  </b-container>
</template>

<script>
export default {
  name: "FooterTop"
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_custom_variables.scss";
.footer {
  h5 {
    color: $white;
    font-size: rem-calc(14);
    font-weight: 600;
    margin: 0 0 rem-calc(15);
  }
}
.footer-nav {
  margin: 0 0 1rem;
  padding: 0;
  list-style: none;
  li {
    padding: 0 0 3px;
  }
  a {
    color: $footer-color;
    &:hover {
      color: $footer-color-hover;
    }
  }
  .icon {
    @include inline-block();
    margin: 0 rem-calc(10) 0 0;
  }
}

</style>
