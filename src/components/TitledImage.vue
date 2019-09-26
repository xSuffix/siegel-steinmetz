<template>
  <span>
    <figure>
      <img :src="require(`@/assets/img/${image}`)" />
    </figure>
    <slot />
  </span>
</template>

<script>
export default {
  name: "TitledImage",
  props: {
    image: String,
    title: String
  }
};
</script>

<style scoped>
span > p {
  color: #770019;
}

img {
  max-width: 100%;
}
</style>