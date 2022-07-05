<template>
  <b-col cols="8" class="d-block d-md-none">
    <div class="mobile-nav">
      <template>
        <b-navbar toggleable type="dark" variant="dark">
          <b-navbar-toggle target="navbar-toggle-collapse">
            <template #default="{ expanded }">
              <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
              <b-icon v-else icon="chevron-bar-down"></b-icon>
            </template>
          </b-navbar-toggle>

          <b-collapse id="navbar-toggle-collapse" is-nav>
            <b-navbar-nav>
              <b-nav-item
                  v-for="categories in CATEGORIES"
                  :key="categories.id"
                  href="#"
              >
                {{categories.name}}</b-nav-item>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </template>
    </div>
  </b-col>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  name: "HeaderMobileNav",
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
.mobile-nav {
  padding-top: 5px;
  .navbar-nav {
    font-size: .875rem;
    padding: 1rem 0;
    li {
      border-top: 1px solid $brand_color;
      &:first-child {
        border-top: none;
      }
    }
  }
}

</style>
