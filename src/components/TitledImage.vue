<template>
  <span>
    <img :src="require(`@/assets/img/${image}`)"/>
    <slot />
  </span>
</template>

<script>
export default {
  name: 'TitledImage',
  props: {
    image: String,
    title: String
  }
}
</script>

<style scoped>
span > p {
  color: #770019;
}
</style>