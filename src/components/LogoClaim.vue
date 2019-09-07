<!--The 'Bernd Siegel Steingestaltung' Claim-->
<template>
  <div class="logo-claim">
    <div class="claim-top">
      <span class="text-logo">Bernd</span>
      <span class="text-logo siegel-red">Siegel</span>
    </div>
    <span class="text-logo">Steingestaltung</span>
  </div> 
</template>

<script>
export default {
  name: 'LogoClaim'
}
</script>

<style lang="scss" scoped>
.logo-claim {
  margin: auto auto auto 24px;
}

.claim-top {
  display: flex;
  justify-content: space-between;
}

@media (max-width: 999px) {
  .logo-claim {
    display: none;
  }
}
</style>
