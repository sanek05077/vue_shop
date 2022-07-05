<template>
  <div class="news-section">
    <div class="container">
      <div class="row">
        <div class="col">
          <h3>Статьи</h3>
        </div>
      </div>
      <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-4">
        <NewsHome
            v-for="news in NEWS"
            :key="news.id"
            :news_data="news"
        />

      </div>
    </div>
  </div>
</template>

<script>
import NewsHome from './NewsHome'
import {mapActions, mapGetters} from 'vuex'

export default {
  name: "News",
  components: {
    NewsHome
  },
  computed: {
    ...mapGetters([
      'NEWS'
    ]),
  },
  methods: {
    ...mapActions([
      'GET_NEWS_FROM_API'
    ]),
  },
  mounted(){
    this.GET_NEWS_FROM_API()
        .then((response) => {
          if(response.data) {
            console.log('Data arrived!');
          }
        })
  }
}
</script>
<style lang="scss" scoped>
@import "@/assets/scss/_custom_variables.scss";
.news-section {
  padding: 2rem 0 1rem;
  h3 {
    font-size: 1.25rem;
    font-weight: 600;
  }
  .row {
    flex-direction: row;
    align-items: stretch;
    .col {
      margin-bottom: rem-calc(10);
    }
  }
}

</style>
