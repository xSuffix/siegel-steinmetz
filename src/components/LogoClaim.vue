<!--The 'Bernd Siegel Steingestaltung' Claim-->
<template>
  <div class="logo-claim">
    <div class="claim-top">
      <span>Bernd</span>
      <span style="color: var(--color-primary)">Siegel</span>
    </div>
    <span>Steingestaltung</span>
  </div> 
</template>

<script>
export default {
  name: 'LogoClaim'
}
</script>

<style lang="scss" scoped>
.claim-top {
  display: flex;
  justify-content: space-between;
}

span {
  color: #3C3C3C;
  font-size: 24px;
  line-height: 34px;
  text-decoration: none;
}

@media screen and (max-width: 1920px) {
  span {
    font-size: calc(0.8vw + 9px);
    line-height: calc(1.2vw + 12px);
  }
}
</style>
