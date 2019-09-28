<template>
  <div class="text-image">
    <slot/>
  </div>
</template>

<script>
export default {
  name: "TombsOriginal"
}
</script>

<style lang="scss" scoped>
.text-image {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.text-image > span {
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 100%;
  flex: 0 1 450px
}

img {
  max-height: 375px;
  max-width: 500px;
}
</style>