<template>
  <b-col cols="9" class="d-none d-md-block">
    <div class="main-nav">
      <b-navbar type="dark" variant="dark">
        <b-navbar-nav>
          <b-nav-item to="/catalog" class="catalog-link"><span><b-icon icon="menu-button-wide"></b-icon></span>Каталог товара </b-nav-item>
          <b-nav-item to="/news">Полезные статьи</b-nav-item>
          <b-nav-item href="#">Сертификаты</b-nav-item>
          <b-nav-item href="#">Акции</b-nav-item>
          <b-nav-item href="#">Бренды</b-nav-item>
        </b-navbar-nav>
      </b-navbar>
    </div>
  </b-col>
</template>

<script>
export default {
  name: "HeaderMainNav"
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_custom_variables.scss";
.main-nav {
  font-size: rem-calc(14);
  li {
    position: relative;
    &:before {
      content: '';
      display: block;
      width: 1px;
      height: 25px;
      position: absolute;
      top: 12px;
      left: 0;
      background: #4b4b4b;
    }
    &:first-child {
      &:before {
        display: none;
      }
    }
  }
  .nav-link {
    padding: .75rem .5rem .875rem !important;
    font-size: .75rem;
    position: relative;
    &:hover,
    &:focus {
      background: $brand_color;
    }
  }
  .catalog-link {
    position: relative;
    .nav-link {
      font-size: rem-calc(12);
      background: $brand_color;
      position: relative;
      padding: .75rem .5rem .875rem .5rem !important;
      span {
        @include inline-block();
        margin: 0 rem-calc(5) 0 0;
      }
    }
  }
  .dropdown-menu {
    li {
      &:before {
        display: none;
      }
      &:first-child {
        a {
          border-top: 0;
        }
      }
    }
    a {
      border-top: 1px solid $brand_color;
      padding: .5rem 1rem;
    }
  }
}
@include media-breakpoint-up(lg) {
  .navbar-expand .navbar-nav .nav-link {
    padding: .75rem 1rem .875rem !important;
    font-size: .875rem;
  }
  .main-nav {
    .catalog-link {
      .nav-link {
        font-size: rem-calc(18) !important;
        padding: .625rem 2rem .625rem 1rem !important;
        span {
          margin: 0 rem-calc(10) 0 0;
        }
      }
    }
  }
}

</style>
