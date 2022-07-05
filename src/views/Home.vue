<template>
  <div>
    <HomeSlider />
    <CategoriesHome />
    <InfoSection/>
    <InfoBlock/>
    <BannerBottom/>
    <NewsHomeList />
  </div>
</template>

<script>
import HomeSlider from '@/components/home/HomeSlider';
import CategoriesHome from '@/components/categories/CategoriesHome';
import InfoSection from '@/components/home/InfoSection';
import InfoBlock from '@/components/home/InfoBlock';
import BannerBottom from '@/components/banners/BannerBottom';
import NewsHomeList from '@/components/news/NewsHomeList';
export default {
  name: 'Home',
  metaInfo() {
    return {
      title: this.$title('Главная')
    }
  },
  components: {
    HomeSlider,
    CategoriesHome,
    InfoSection,
    InfoBlock,
    NewsHomeList,
    BannerBottom
  }
}
</script>
<style lang="scss">
</style>
