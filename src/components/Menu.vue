<template>
  <span class="material-icons">menu</span>
</template>

<script>
export default {
  name: 'Menu'
}
</script>

<style scoped>
.small span {
  font-size: 32px;
}

span {
  color: #3C3C3C;
  user-select: none;
  align-self: center;
  font-size: 48px;
  cursor: pointer;
}

@media (min-width: 801px) {
  span {
    display: none;
  }
}
</style>