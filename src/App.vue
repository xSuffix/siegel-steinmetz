<template>
  <v-app id="app">
    <Header />
    <v-content>
      <router-view />
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import Header from "@/components/Header.vue";
// import HeaderFixed from "@/components/HeaderFixed.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    // HeaderFixed,
    Footer
  },
  data: () => ({
    //
  })
};
</script>

<style lang="scss">
.content-wrapper:after {
  content: '';
  display: table;
  clear: both;
}

.content-wrapper {
  margin-bottom: 1rem;
}

.theme--light {
  background-color: white !important;
}

$siegel-red: #770019;
$siegel-lightgray: #d9d9da;
$siegel-gray: #afafb0;

$light-s2: #3c3c3c;

.siegel-primary {
  color: #770019 !important;
}

.bg-lightgray {
  background-color: $siegel-lightgray;
}

.material-icons {
  margin-right: 4px;
  vertical-align: middle;
  color: #3c3c3c;
}

h1 {
  color: $light-s2;
  margin-bottom: 0.5rem;
  display: inline-block;
  overflow-wrap: break-word;
  white-space: pre-wrap;
}

h2 {
  color: $siegel-red;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
  white-space: nowrap;
  margin: 0.5rem 0;
  display: inline-block;
  overflow-wrap: break-word;
  white-space: pre-wrap;
}

p {
  font-size: 1.1rem;
  margin: 0 0 0.5rem 0;
  line-height: 1.5rem;
  color: #646464;
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
  max-width: 1180px;
  margin-left: auto;
  margin-right: auto;
  padding: 4px 16px;
}

.text-logo {
  color: $light-s2;
  font-size: 24px;
  white-space: nowrap;
  line-height: 1.75rem;
}
</style>