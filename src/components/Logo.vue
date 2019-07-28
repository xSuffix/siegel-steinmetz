<template>
  <router-link to="/" class="logo">
    <img src="@/assets/favicon.svg" height="96px" class="margin" />
    <LogoClaim />
  </router-link>
</template>

<script>
import LogoClaim from '@/components/LogoClaim.vue'
export default {
  name: 'logo',
  components: {
    LogoClaim
  }
}
</script>

<style lang="scss" scoped>
.logo {
  display: flex;
  text-decoration: none;
}

.margin {
  margin-right: 32px;
}
</style>
