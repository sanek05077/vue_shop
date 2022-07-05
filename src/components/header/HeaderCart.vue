<template>
  <b-col cols="4" md="3">
    <div class="basket" v-b-hover="hoverHandler">
      <div class="basket-icon">
        <b-icon icon="basket-fill"></b-icon>
        <span class="count">0</span>
      </div>
      <span class="basket-text">
              Ваша корзиа пуста
            </span>
      <div class="basket-block" v-if="isHovered">
        <h4>Корзина</h4>
        <p>Ваша корзина пуста</p>
        <ul class="list-products">
          <li>
            <div class="image-product">
              <img :src=" require ('../../assets/images/img-01.png' )" alt="image"/>
            </div>
            <span class="product-name">Керамический полотенцесушитель Stinex 250 Ватт</span>
            <span class="product-price">1 520 грн</span>
            <span href="#" class="remove"><b-icon icon="trash"></b-icon></span>
          </li>
        </ul>
        <div class="total-block">
          <span>Итого:</span>
          <strong>1 520 грн</strong>
        </div>
        <div class="basket-btn">
          <a href="#" class="btn btn-brand">Оформить заказ</a>
        </div>
      </div>
    </div>
  </b-col>
</template>

<script>
export default {
  name: "HeaderCart",
  data() {
    return {
      isHovered: false
    }
  },
  methods: {
    hoverHandler(hovered) {
      this.isHovered = hovered
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_custom_variables.scss";
.basket {
  display: flex;
  position: relative;
  align-items: center;
  cursor: pointer;
  justify-content: flex-end;
  height: 100%;
}
.basket-icon {
  position: relative;
  color: $brand_color;
  font-size: rem-calc(25);
  .count {
    position: absolute;
    left: 15px;
    top: 0;
    font-size: rem-calc(12);
    color: $white;
    background: $red;
    width: 18px;
    height: 18px;
    border: 1px solid $white;
    line-height: 15px;
    border-radius: 50%;
    text-align: center;
  }
}
.basket-block {
  background: $white;
  width: 100%;
  position: absolute;
  right: 0;
  top: 80%;
  text-align: left;
  padding: .625rem;
  box-shadow:  0 .5rem 1rem rgba($black, .15);
  margin-top: rem-calc(9);
  font-size: .875rem;
  transition: all .2s ease-in-out;
  min-width: 300px;
}
.basket-text {
  font-size: .75rem;
  color: $white;
  font-weight: 600;
  @include inline-block();
  margin: 0 0 0 rem-calc(15);
}
.list-products {
  margin: 0;
  padding: 0;
  list-style: none;
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0 1rem;
    margin: 0 0 1rem;
    border-bottom: 1px solid $body-color;
  }
}
.image-product {
  width: 20%;
}
.product-name {
  width: 50%;
  font-size: .75rem;
}
.product-price {
  width: 20%;
  font-size: rem-calc(14);
  font-weight: 600;
}
.remove {
  font-size: rem-calc(16);
  color: $black;
  cursor: pointer;
}
.total-block {
  text-align: right;
  font-size: rem-calc(18);
  text-transform: uppercase;
  line-height: 30px;
  margin: 0 0 1rem;
  span {
    @include inline-block();
  }
  strong {
    font-size: rem-calc(25);
    @include inline-block();
    margin: 0 0 0 rem-calc(10);
  }
}
.basket-btn {
  .btn {
    width: 100%;
    font-size: rem-calc(18);
    font-weight: 600;
  }
}
@include media-breakpoint-up(sm) {
  .basket-block {
    width: 500px;
  }
  .product-name {
    font-size: .875rem;
  }
  .product-price {
    font-size: rem-calc(18);
  }
  .basket-block {
    padding: 1rem 1.5rem;
  }
}
</style>
