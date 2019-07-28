<!--Header for each page, includes logo and navigation-->
<template>
  <header>
    <Logo />
    <Navigation class="margin" />
  </header>
</template>

<script>
import Logo from '@/components/Logo.vue'
import Navigation from '@/components/Navigation.vue'

export default {
  components: {
    Logo,
    Navigation
  }
}
</script>

<style lang="scss" scoped>
header {
  display: flex;
}

.margin {
  margin: 0 32px;
}
</style>
