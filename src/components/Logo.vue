<template>
  <router-link to="/" class="logo">
    <img src="@/assets/favicon.svg" height="64px" />
    <LogoClaim class="claim" />
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

.claim {
  margin-left: 24px;
}

@media (max-width: 999px) {
  .claim {
    display: none;
  }
}
</style>
