<template>
  <header>
    <nav>
      <div>
        <img src="../assets/favicon.svg" height="80%">
        <LogoClaim/>
      </div>
      
      
    </nav>
  </header>
</template>

<script>
import LogoClaim from '@/components/LogoClaim.vue'

export default {
  name: 'A-Header',
  components: {
    LogoClaim
  }
}
</script>

<style lang="scss" scoped>
header {
  background: url("../assets/banner.jpg") center 35% no-repeat;
  background-size: cover;
  height: calc(128px + 30vw);
  max-height: 768px;
  max-width: 1920px;  
  position: relative;
  margin: 0 auto;
}

nav {
  width: 100%;
  position: absolute;
  height: calc(38.4px + 3vw);
  // height: calc(32px + 5vw);
  max-height: 96px;
  // max-height: 128px;
  background: rgb(228,229,221,0.75);
  bottom: 0;
  backdrop-filter: blur(6px);
  padding: 0 5%;
  box-sizing: border-box;

  > div {
    height: 100%;
    display: flex;
    align-items: center;
  }
}

img + .logo-claim {
  margin-left: 2%;
}

</style>