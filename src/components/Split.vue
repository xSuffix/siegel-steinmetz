<template>
  <div class="split">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'Split'
}
</script>

<style scoped>
.split {
  display: flex;
}

.split span {
  flex: 0 1 100%;
}
</style>