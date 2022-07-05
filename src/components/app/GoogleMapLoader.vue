<template>
  <GmapMap
      ref="mapRef"
      :center="map_center"
      :zoom="7"
      map-type-id="terrain"
      style="width: 100%; height: 300px"
  >
  </GmapMap>
</template>

<script>

export default {
  data() {
    return {
      map_center: { lat: 41.693206, lng: -86.228631 },
    };
  },
  mounted () {
    this.$refs.mapRef.$mapPromise.then((map) => {
      map.panTo({lat: 41.693206, lng: -86.228631})
    })
  }
}
</script>

