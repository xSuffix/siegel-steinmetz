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
  
}

img {
  max-width: 500px;
}

span + img {
  margin-left: 32px;
}

img + span {
  margin-left: 32px;
}
</style>