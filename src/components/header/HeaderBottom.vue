<template>
  <div class="header-bottom">
    <b-container>
      <b-row>
        <b-col col sm="4" md="2">
          <strong class="logo"><b-link to="/"><img :src=" require ('@/assets/images/logo.png' )" alt="image"/></b-link></strong>
        </b-col>
        <b-col col sm="5" md="4">
          <form class="search-form">
            <b-form-input
                placeholder="Поиск"
                class="input-text"
            ></b-form-input>
            <button class="button-search"><b-icon icon="search"></b-icon></button>
          </form>
        </b-col>
        <b-col col sm="4" lg="3" offset-lg="1" class="d-none d-md-block">
          <div class="contacts-block">
            <b-dropdown>
              <template #button-content>
                <strong>+38 (067) 225-50-30</strong> <span>ПН - ПТ: 09:00 - 20:00; СБ - НД: 10:00 - 16:00</span>
              </template>
              <b-dropdown-item href="tel:380952255030"> +38 (095) 225-50-30</b-dropdown-item>
              <b-dropdown-item href="tel:380952255030"> +38 (095) 225-50-30</b-dropdown-item>
              <b-dropdown-item href="#"> Заказать звонок</b-dropdown-item>
            </b-dropdown>
          </div>
        </b-col>
        <b-col col sm="4" md="2" class="d-none d-md-block">
          <ul class="social-links text-right">
            <li>
              <a href="#"><b-icon icon="instagram"></b-icon></a></li>
            <li><a href="#"><b-icon icon="facebook"></b-icon></a></li>
          </ul>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "HeaderBottom"
}
</script>

<style lang="scss">
  @import "@/assets/scss/_custom_variables.scss";
  .header-bottom {
    background: $dark_secondary_color;
    padding: rem-calc(10) 0;
  }
  .logo {
    @include inline-block();
    width: 150px;
    img {
      max-width: 100%;
    }
  }
  .search-form {
    position: relative;
    margin-top: rem-calc(10);
  }
  .input-text {
    border-radius: 3px !important;
  }
  .button-search {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    width: rem-calc(40);
    background: $brand_color;
    color: $white;
    border: 0;
    padding: 0;
    line-height: rem-calc(40);
    border-radius: 0 3px 3px 0;
  }
  .contacts-block {
    .btn-secondary {
      background: none;
      color: $white;
      border: 0;
      padding: 0 10px 0  0;
      &:focus,
      &:hover {
        background: none;
      }
    }
    .btn-secondary:not(:disabled):not(.disabled):active, .btn-secondary:not(:disabled):not(.disabled).active, .show > .btn-secondary.dropdown-toggle {
      background: none;
      border: 0;
    }
    span {
      display: block;
      font-size: rem-calc(10);
    }
    strong {
      display: block;
      font-size: rem-calc(14);
      letter-spacing: 3px;
    }
    .dropdown-toggle::after {
      position: absolute;
      right: 0;
      top: 15px;
    }
  }
  .social-links {
    margin: rem-calc(7) 0 0 -.75rem;
    padding: 0;
    list-style: none;
    font-size: rem-calc(25);
    position: relative;
    li {
      @include inline-block();
      margin: 0 0 0 .75rem;
    }
    a {
      color: $brand_color;
      &:hover,
      &:focus {
        text-decoration: none;
      }
    }
  }
  @media (min-width: 992px) {
    .header-bottom {
      padding: 1rem 0;
    }
    .contacts-block {
      strong {
        font-size: rem-calc(14);
      }
    }
    .logo {
      width: auto;
      max-width: 150px;
      margin: 10px 0 0;
    }
    .search-form {
      margin-top: rem-calc(10);
    }
  }
  @media (min-width: 1200px) {
    .contacts-block {
      strong {
        font-size: rem-calc(20);
      }
      span {
        font-size: 12px;
      }
    }
    .logo {
      margin: 0;
    }
  }
</style>
