<template>
  <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 news-section">
    <div class="col"
         v-for='article in Articles'
         :key="article.id"
    >
      <div class="news-block">
        <div class="image-news"
             v-if="article.image"
        >
          <router-link :to="getArticleRoute(article)">
            <img :src="require ('@/assets/images/' +  article.image)" alt="image"/>
          </router-link>
        </div>
        <div
            class="image-news"
            v-else
        >
          <router-link :to="getArticleRoute(article)">
            <img :src=" require ('@/assets/images/placeholder.png' )" alt="image"/>
          </router-link>
        </div>
        <h4>
          <router-link :to="getArticleRoute(article)">
            {{ article.title }}
          </router-link>
        </h4>
        <div class="text-ellipsis" v-html="article.content"></div>
        <div class="btns-block">
          <router-link :to="getArticleRoute(article)" class="btn btn-item">Подробнее</router-link>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "ArticlesList",
  methods: {
    getArticleRoute(article) {
      return {
        name: 'Article',
        params: {
          post_id: article.id,
        },
      };
    },
  },
  computed: {
    ...mapGetters([
      'Articles',
    ]),
  },
  created() {
    this.$store.dispatch('loadArticles');
  },
}
</script>

<style lang="scss">
@import "@/assets/scss/_custom_variables.scss";
.news-section .col {
  margin-bottom: 1rem;
}
  .news-block {
    display: flex;
    flex-direction: column;
    height: 100%;
    border: 1px solid $dark-success-color;
    position: relative;
    padding: rem-calc(10 10 60);
    font-size: rem-calc(14);
    .btn-item {
      position: absolute;
      bottom: 10px;
      right: 10px;
      left: 10px;
      font-size: rem-calc(12);
    }
    h4 {
      font-size: rem-calc(14);
      color: $head-color;
      font-weight: 700;
      a {
        color: $head-color;
      &:hover {
         text-decoration: underline;
       }
      }
    }
    .text-ellipsis {
      margin: 0;
      -webkit-line-clamp: 4;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      overflow: hidden;
      height: 85px;
    }
  }
  .image-news {
      height: 150px;
      margin: 0 0 rem-calc(10);
    img {
      height: 100%;
    }
  }
</style>
