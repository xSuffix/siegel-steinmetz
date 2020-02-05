<template>
  <header>
    <nav>
      <router-link to="/">
        <img src="../assets/favicon.svg" height="80%" />
        <LogoClaim />
      </router-link>
      <div>
        <router-link to="/about">About</router-link>
      </div>
    </nav>
  </header>
</template>

<script>
import LogoClaim from "@/components/LogoClaim.vue";

export default {
  name: "A-Header",
  components: {
    LogoClaim
  }
};
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
  max-height: 96px;
  background: rgb(228, 229, 221, 0.75);
  bottom: 0;
  backdrop-filter: blur(6px);
  padding: 0 4%;
  box-sizing: border-box;
  user-select: none;

  > a {
    height: 100%;
    min-width: 17.5%;
    box-sizing: content-box;
    display: inline-flex;
    align-items: center;
    text-decoration: none;

    > img {
      margin: 0 auto;
    }
  }
}
</style>