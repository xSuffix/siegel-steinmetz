<template>
  <v-app>
    <v-app-bar app elevate-on-scroll height="108px">
      <Header />
    </v-app-bar>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  name: 'App',
  components: {
    Header
  },
  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
$siegel-red: #770019;
$siegel-lightgray: #D9D9DA;
$siegel-gray: #AFAFB0;

$light-s2: #3C3C3C;

h3 {
  text-decoration: none;
  color: $siegel-red;
  font-size: 1.5rem;
  font-weight: bold;
  white-space: nowrap;
  margin: 0.5em 0;
}

p {
  margin: 0.5em 0;
  line-height: 1.5rem;
}

a {
  text-decoration: none;
}

br {
  margin-bottom: 10px;
  width: 1px;
}

.document {
  width: 100%;
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
}

.text-logo {
  color: $light-s2;
  font-size: 24px;
  white-space: nowrap;
  line-height: 1.75rem;
}

.siegel-red {
  color: $siegel-red !important;
}
</style>