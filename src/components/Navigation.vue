<!--Main navigation - Restaurierungen | Grabmale | Über uns | Galerien | Kontakt-->
<template>
  <span class="navigation">
    <router-link to="/restaurierungen">Restaurierungen</router-link>
    <router-link to="/grabmale">Grabmale</router-link>
    <router-link to="/ueber-uns">Über uns</router-link>
    <router-link to="/galerie">Galerie</router-link>
    <router-link to="/kontakt">Kontakt</router-link>
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

@media (max-width: 800px) {
  .navigation {
    display: none;
  }
}

.small a {
  font-size: 1.25rem;
}

a {
  color: #770019 !important;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
  white-space: nowrap;
  margin: 0.5rem 0;
  display: inline-block;
}
</style>
