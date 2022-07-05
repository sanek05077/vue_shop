<template>
  <div class="row">
    <div class="col"
         v-for='(item) in activeCategoryArticles'
         :key="item.id"
    >
      <b-card :title="item.title" class="article-item-card">
        <router-link :to="getArticleRoute(item)" class="card-link">
          Подробнее
        </router-link>
      </b-card>

    </div>
  </div>
</template>

<script>
import Article from '@/models/Article';
import {mapGetters} from "vuex";

export default {
  name: "ArticlesCategoryList",
  props: {
    item: Article,
  },
  methods: {
    getArticleRoute(item) {
      return {
        name: 'Article',
        params: {
          post_id: item.id,
        },
      };
    },
  },
  computed: {
    ...mapGetters([
      'activeCategoryArticles',
    ]),
  },
  created() {
    this.$store.dispatch('activeCategoryArticles');
  },
}
</script>

<style scoped>

</style>
