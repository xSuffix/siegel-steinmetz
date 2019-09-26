<template>
  <div>
    <slot/>
  </div>
</template>

<script>
export default {
  name: "TombsOriginal"
}
</script>

<style lang="scss" scoped>
div {
  display: flex;
  justify-content: space-between;
}

div span {
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 100%;
  flex: 0 1 450px; 
}

img {
  max-width: 500px;
}

// span + span {
//   margin-left: 32px;
// }
</style>