<template>
  <div>
    <div v-if="category">
      <h1>
        {{ category.title }}
      </h1>
      <ArticlesCategoryList/>
    </div>
    <div v-else>
      Категория не найдена
    </div>
  </div>
</template>

<script>
import ArticlesCategoryList from '@/components/blog/ArticlesCategoryList.vue'
import {
  mapActions,
} from 'vuex'


export default {
  name: 'Category',
  components: {
    ArticlesCategoryList,
  },
  computed: {
    categoryId() {
      return this.$route.params['category_id'] || null;
    },
    category() {
      return this.$store.state.activeCategory;
    },
    articles() {
      return this.$store.getters.activeCategoryArticles;
    },
  },
  methods: {
    ...mapActions([
      'loadActiveCategory',
    ]),
  },
  mounted() {
    this.loadActiveCategory(this.categoryId);
  },
}
</script>
