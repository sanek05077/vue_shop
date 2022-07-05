<template>
  <aside class="sidebar">
    <ul
        v-for="categories in CATEGORIES.slice(0, 6)"
        :key="categories.id"
        class="sidebar-nav"
    >
      <li><a href="#">{{categories.name}} <b-icon icon="chevron-right"></b-icon></a></li>
    </ul>
  </aside>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "Sidebar",
  computed: {
    ...mapGetters([
      'CATEGORIES'
    ]),
  },
  methods: {
    ...mapActions([
      'GET_CATEGORIES_FROM_API'
    ]),
  },
  mounted(){
    this.GET_CATEGORIES_FROM_API()
        .then((response) => {
          if(response.data) {
            console.log('Data categories arrived!');
          }
        })
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_custom_variables.scss";
.sidebar {
  padding: 2rem 0;
}
.sidebar-nav {
  margin: 0;
  padding: 0;
  list-style: none;
  font-size: .875rem;
  li {
    border-bottom: 1px solid $dark-white;
  }
  a {
    display: block;
    padding: .625rem 2rem .7rem 1.25rem;
    position: relative;
    color: $body-color;
    &:hover {
      background: $dark-white;
    }
  }
  .b-icon.bi {
    font-size: rem-calc(10);
    position: absolute;
    right: 1rem;
    top: 50%;
    margin-top: -5px;
  }
}
</style>
