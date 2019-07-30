<!--Main navigation - Restaurierungen | Grabmale | Über uns | Galerien | Kontakt-->
<template>
  <span class="navigation">
    <router-link to="/restaurierungen" class="text-navigation">Restaurierungen</router-link>
    <router-link to="/grabmale" class="text-navigation">Grabmale</router-link>
    <router-link to="/ueber-uns" class="text-navigation">Über uns</router-link>
    <router-link to="/galerie" class="text-navigation">Galerie</router-link>
    <router-link to="/kontakt" class="text-navigation">Kontakt</router-link>
  </span>
</template>

<script>
export default {
  name: 'Navigation'
}
</script>

<style lang="scss" scoped>
.navigation {
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  width: 100%;
}
</style>
