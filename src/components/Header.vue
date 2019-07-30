<!--Header for each page, includes logo and navigation-->
<template>
  <header class="document">
    <Logo />
    <Navigation />
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
  justify-content: space-between;
  margin-top: 32px;
  
}
</style>
