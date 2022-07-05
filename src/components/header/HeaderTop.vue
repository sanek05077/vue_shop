<template>
  <div class="header-top">
    <b-container class="container">
      <b-row align-h="end">
        <b-col col sm="9" md="10" class="d-none d-md-block">
          <div class="top-navigation">
            <ul class="nav justify-content-end">
              <li class="nav-item">
                <b-link class="nav-link" to="/payment">Оплата и доставка</b-link>
              </li>
              <li class="nav-item">
                <b-link class="nav-link" to="/warranty">Гарантия</b-link>
              </li>
              <li class="nav-item">
                <b-link class="nav-link" to="/about">О нас</b-link>
              </li>
              <li class="nav-item">
                <b-link class="nav-link" to="/contacts">Контакты</b-link>
              </li>
            </ul>
          </div>
        </b-col>
        <b-col col sm="3" md="2">
          <form class="check-language text-right">
            <div>
              <b-form-group v-slot="{ ariaDescribedby }">
                <b-form-radio-group
                    id="btn-radios-1"
                    v-model="selected"
                    :options="options"
                    :aria-describedby="ariaDescribedby"
                    name="radios-btn-default"
                    buttons
                ></b-form-radio-group>
              </b-form-group>
            </div>
          </form>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "HeaderTop",
  data() {
    return {
      selected: 'radio1',
      options: [
        { text: 'RU', value: 'radio1' },
        { text: 'UA', value: 'radio2' }
      ]
    }
  },
}
</script>

<style lang="scss">
  @import "@/assets/scss/_custom_variables.scss";
  .header-top {
    background: $secondary_color;
    position: relative;
    z-index: 2;
  }
  .top-navigation {
    font-size: .75rem;
    a {
      color: $white;
      padding: .5rem .875rem .5rem;
      &:hover,
      &:focus {
        color: $brand_color;
      }
    }
  }
  .check-language {
    position: absolute;
    top: 22px;
    right: 10px;
    .btn {
      padding: 0.275rem 0.75rem 0.375rem;
      background: $dark_secondary_color;
      border: 0;
      border-radius: 0;
      &:hover {
        background: $secondary_color;
      }
      &.active {
        box-shadow: none;
      }
    }
    .btn-secondary:not(:disabled):not(.disabled):active,
    .btn-secondary:not(:disabled):not(.disabled).active {
      background: $brand_color;
    }
  }
  @media (min-width: 992px) {
    .check-language {
      position: relative;
      right: auto;
      top: auto;
    }
  }
</style>
