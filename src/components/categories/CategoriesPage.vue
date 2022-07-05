<template>
  <div class="categories">
    <b-row align-v="stretch" class="row row-cols-1 row-cols-sm-2 row-cols-md-3">
      <b-col col
             v-for="categories in CATEGORIES"
             :key="categories.id"
      >
        <div class="category">
          <a href="#">
            <span class="image-category">
              <img :src=" require ('@/assets/images/' + categories.image )" alt="image"/>
            </span>
            <span class="title-category">{{categories.name}}</span>
          </a>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
  name: "CategoriesPage",
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
.categories {
  padding: 3rem 0 0;
  .col {
    margin-bottom: 2rem;
  }
}
.heading-box {
  position: relative;
  margin: 0 0 2rem;
  &:before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    height: 1px;
    background: $head-color;
  }
  h2 {
    margin: 0;
    @include inline-block();
    background: $white;
    position: relative;
    z-index: 2;
    padding: 0 1.5rem;
    font-weight: 600;
    color: $head-color;
  }
}
.category {
  background: $white;
  box-shadow: 0 2px 8px hsla(0,0%,57.3%,.5);
  padding: 1rem;
  height: 100%;
  a {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    font-weight: 700;
  }
  .image-category {
    @include inline-block();
    margin: 0 rem-calc(10) 0 0;
  }
}
</style>
