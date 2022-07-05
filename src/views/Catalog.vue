<template>
  <main class="main">
    <b-container>
      <b-row>
        <b-col col sm="3">
          <Sidebar />
        </b-col>
        <b-col col lg="9">
          <Breadcrumbs/>
          <h1>{{ currentRouteName }}</h1>
          <CategoriesPage />
          <BannerBottom/>
        </b-col>
      </b-row>
    </b-container>
  </main>
</template>

<script>
import Sidebar from '@/components/sidebar/Sidebar'
import CategoriesPage from '@/components/categories/CategoriesPage'
import BannerBottom from '@/components/banners/BannerBottom'
export default {
  name: "CategoriesHome",
  components: {
    Sidebar, CategoriesPage, BannerBottom
  },
  metaInfo() {
    return {
      title: this.$title('Каталог товара')
    }
  },
  computed: {
    currentRouteName() {
      return this.$route.meta.breadcrumb.label;
    }
  }
}
</script>


