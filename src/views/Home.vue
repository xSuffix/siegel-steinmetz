<!--Landing page - siegel-steinmetz.de-->
<template>
  <div class="test">
    <img src="@/assets/favicon.svg" height="96px" />
    <LogoClaim></LogoClaim>
    <Navigation></Navigation>

  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'
import LogoClaim from '@/components/LogoClaim.vue'

export default {
  components: {
    Navigation,
    LogoClaim
  }
}
</script>

<style lang="scss" scoped>

</style>
