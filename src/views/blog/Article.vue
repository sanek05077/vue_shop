<template>
  <b-row v-if="article">
    <b-col md="8" lg="9">
      <img :src="require ('@/assets/images/' +  article.image)" alt="image"/>
      <h3>{{ article.image }}</h3>
      <h2>
        {{ article.title }}
      </h2>
      <p class="mb-4" >
        <span v-html="article.content"></span>
      </p>
      <table class="table table-bordered">
        <tbody>
          <tr>
            <td class="w-50">
              <router-link v-if="prevArticle" :to="getArticleRoute(prevArticle)">
                {{ prevArticle.title }}
              </router-link>
            </td>
            <td class="text-right">
              <router-link v-if="nextArticle" :to="getArticleRoute(nextArticle)">
                {{ nextArticle.title }}
              </router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </b-col>
  </b-row>
</template>

<script>
import {
  mapActions,
  mapGetters,
} from 'vuex'

export default {
  name: 'Article',
  components: {
  },
  computed: {
    ...mapGetters([
      'nextArticle',
      'prevArticle',
    ]),
    articleId() {
      return this.$route.params['post_id'] || null;
    },
    article() {
      return this.$store.state.activeArticle;
    },
  },
  methods: {
    ...mapActions([
      'loadActiveArticle',
    ]),
    getArticleRoute(item) {
      return {
        name: 'Article',
        params: {
          post_id: item.id,
        },
      };
    },
  },
  mounted() {
    this.loadActiveArticle(this.articleId);
  },
  watch: {
    articleId(value) {
      this.loadActiveArticle(value);
    },
  },
}
</script>
