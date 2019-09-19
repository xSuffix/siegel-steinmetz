<template>
  <span>
    <img :src="require(`@/assets/img/${image}`)"/>
    <slot/>
  </span>
</template>

<script>
export default {
  name: 'TileImage',
  props: {
    image: String,
    title: String
  }
}
</script>

<style scoped>
/* img {
  max-width: 100%;
}

span {
  min-width: 375px;
} */
</style>