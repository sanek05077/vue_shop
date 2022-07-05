<template>
  <div class="home-slider light-section">
    <b-container>
      <b-row>
        <b-col col>
          <b-carousel
              id="home_slider"
              v-model="slide"
              :interval="4000"
              class="home_slider"
              indicators
              fade
              background="#ababab"
              @sliding-start="onSlideStart"
              @sliding-end="onSlideEnd"
          >
            <b-carousel-slide
                v-for="item in carouselItems"
                :key="item.id"
                :text="item.text"
            >
              <template #img>
                <img
                    class="d-block img-fluid"
                    :src="item.image"
                    alt="image slot"
                >
              </template>
            </b-carousel-slide>
          </b-carousel>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>

export default {
  data() {
    return {
      carouselItems: [
        {
          id: 1,
          image: require ('@/assets/images/img-slider-01.jpg' ),
          text: "Lorem ipsum"
        },
        {
          id: 2,
          image: require ('@/assets/images/img-slider-02.jpg' ),
          text: "Lorem ipsum dolor"
        },
        {
          id: 3,
          image: require ('@/assets/images/img-slider-03.jpg' ),
          text: "Lorem ipsum dolor)"
        }
      ],
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart() {
      this.sliding = true
    },
    onSlideEnd() {
      this.sliding = false
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/_custom_variables.scss";
.home-slider {
  img {
    width: 100%;
  }
  .carousel-caption {
    background: rgba(186, 160, 99, .7);
    color: $white;
    bottom: auto;
    top: 20px;
    left: 30%;
    right: 30%;
    p {
      margin: 0;
    }
  }
}


</style>
