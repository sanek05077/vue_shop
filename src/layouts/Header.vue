<template>
  <div class="main-header">
    <HeaderTop/>
    <HeaderBottom/>
    <HeaderNav/>
  </div>
</template>

<script>

import HeaderTop from '@/components/header/HeaderTop'
import HeaderNav from '@/components/header/HeaderNav'
import HeaderBottom from '@/components/header/HeaderBottom'

export default {
  name: "Header",
  components: {
    HeaderTop, HeaderBottom, HeaderNav
  }
}
</script>

<style lang="scss">
.main-header {
  position: relative;
  z-index: 10;
}
</style>
