<!--Link navigating to external websites-->
<template>
  <a>
    <slot/>
  </a>
</template>

<script>
export default {
  name: 'LinkExternal'
}
</script>

<style lang="scss" scoped>
a {
  color: #0090CD;
}
</style>
