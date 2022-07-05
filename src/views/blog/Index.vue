<template>
  <main class="main">
    <b-container>
      <b-row>
        <b-col col-12 lg="3">
          <div class="d-none d-lg-block">
            <CategoriesList/>
          </div>
        </b-col>
        <b-col col-12 lg="9">
          <Breadcrumbs/>
          <h1>{{ currentRouteName }}</h1>
          <div class="blog-nav d-block d-lg-none">
            <CategoriesList/>
          </div>
          <ArticlesList/>
        </b-col>
      </b-row>
    </b-container>
  </main>
</template>


<script>
import CategoriesList from '@/components/blog/CategoriesList'
import ArticlesList from '@/components/blog/ArticlesList'
import { mapGetters, } from 'vuex'

export default {
  name: 'Index',
  components: {
    CategoriesList,
    ArticlesList
  },
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
      'lastArticles',
      'lastComments',
      'popularCategoriesArticles',
    ]),
    currentRouteName() {
      return this.$route.meta.breadcrumb.label;
    }
  },
  created() {
    this.$store.dispatch('loadArticles');
    this.$store.dispatch('loadComments');
    this.$store.dispatch('loadCategories');
  },
  metaInfo() {
    return {
      title: this.$title('Каталог товара')
    }
  },
}
</script>
<style lang="scss">
.blog-nav {
  margin: 0 0 2rem;
  .sidebar-blog h4 {
    padding: .5rem .5rem .625rem;
  }
  ul {
    font-size: .75rem;
    background: #F6F6F0;
    li {
      display: inline-block;
      vertical-align: top;
    }
    a {
      padding: .5rem .5rem .625rem;
    }
  }
}
</style>
