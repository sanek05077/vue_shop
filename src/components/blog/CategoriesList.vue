<template>
  <aside class="sidebar-blog">
    <h4>Блог Магазина</h4>
    <ul class="list-categories-blog">
      <li
          v-for='(item) in categoriesArticles'
          :key="item.id"
      >
        <router-link :to="getCategoryRoute(item)">
          {{ item.title }}
        </router-link>
      </li>
    </ul>
  </aside>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "CategoryList",
  data() {
    return {};
  },
  methods: {
    getCategoryRoute(item) {
      return {
        name: 'Category',
        params: {
          category_id: item.id,
        },
      };
    },
  },
  computed: {
    ...mapGetters([
      'categoriesArticles',
    ]),
  },
  created() {
    this.$store.dispatch('loadCategories');
  },
}
</script>

<style lang="scss">
@import "@/assets/scss/_custom_variables.scss";
.sidebar-blog {
  border: 1px solid $light-white;
  h4 {
    font-size: 1rem;
    color: $body-color;
    padding: .5rem 1rem .625rem;
    margin: 0;
  }
}
.list-categories-blog {
  margin: 0;
  padding: 0;
  list-style: none;
  li {
    border-top: 1px solid $light-white;
    &:first-child {
      border-top: 0;
    }
  }
  a {
    display: block;
    padding: .5rem 1rem .625rem;
    background: $dark-white;
    color: $body-color;
    &:hover {
      color: $brand_color;
    }
  }
}

</style>
