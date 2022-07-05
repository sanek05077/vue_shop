<template>
  <div class="col">
    <div class="news-block">
      <div class="image-news">
        <a href="#">
          <img :src=" require ('../../assets/images/' + news_data.image )" alt="image"/>
        </a>
      </div>
      <h4><a href="#">{{ news_data.title }}</a></h4>
      <p>{{ news_data.preview }}</p>
      <div class="btns-block">
        <a href="#" class="btn btn-item">Подробнее</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "News",
  props: {
    news_data: {
      type: Object,
      default() {
        return {}
      }
    }
  },
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_custom_variables.scss";
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
}
.image-news {
  min-height: 150px;
  margin: 0 0 rem-calc(10);
  img {
    width: 100%;
  }
}

</style>
