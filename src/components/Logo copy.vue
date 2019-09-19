<template>
  <router-link to="/" class="logo">
    <img src="@/assets/favicon.svg" class="favicon" />
    <LogoClaim />
  </router-link>
</template>

<script>
import LogoClaim from '@/components/LogoClaim.vue'

export default {
  name: 'Logo',
  components: {
    LogoClaim
  }
}
</script>

<style lang="scss" scoped>


.favicon {
  height: 64px;
}

.logo {
  display: flex;
  text-decoration: none;
  align-self: center;
}
</style>