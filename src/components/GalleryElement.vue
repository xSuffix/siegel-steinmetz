<template>
  <img :src="require(`@/assets/img/album/${image}`)"/>
</template>

<script>
export default {
  name: 'GalleryElement',
  props: {
    image
  }
}
</script>

<style scoped>

</style>