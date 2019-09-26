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
}

.text-image > span {
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 50%;
}

img {
  max-width: 500px;
}

span + span {
  margin-left: 32px;
}
</style>