<!--Main navigation - Restaurierungen | Grabmale | Über uns | Galerien | Kontakt-->
<template>
  <span class="navigation">
    <router-link to="/restaurierungen"><h3>Restaurierungen</h3></router-link>
    <router-link to="/grabmale"><h3>Grabmale</h3></router-link>
    <router-link to="/ueber-uns"><h3>Über uns</h3></router-link>
    <router-link to="/galerie"><h3>Galerie</h3></router-link>
    <router-link to="/kontakt"><h3>Kontakt</h3></router-link>
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
