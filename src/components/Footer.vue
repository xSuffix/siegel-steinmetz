<template>
  <div class="footer">
    <Split class="document">
      <span>
        <h3>Navigation</h3>
        <router-link to="/">Startseite</router-link>
        <router-link to="/restaurierungen">Restaurierungen</router-link>
        <router-link to="/grabmale">Grabmale</router-link>
        <router-link to="/ueber-uns">Über uns</router-link>
        <router-link to="/galerie">Galerie</router-link>
        <router-link to="/kontakt">Kontakt</router-link>
      </span>
      <span>
        <h3>Rechtliches</h3>
        <router-link to="/impressum">Impressum</router-link>
        <router-link to="/datenschutz">Datenschutz</router-link>
      </span>
      <span>
        <h3>Kontakt</h3>
        <a href="tel:+496264926444">
          <i class="material-icons">phone</i>06264 / 92 64 44
        </a>
        <p>
          Bernd Siegel
          <br />Steingestaltung
        </p>
        <p>
          Bahnhofstraße 13
          <br />74861 Neudenau
        </p>
      </span>
    </Split>
  </div>
</template>

<script>
import LinkExternal from '@/components/LinkExternal.vue';
import Split from '@/components/Split.vue'

export default {
  components: {
    LinkExternal,
    Split
  }
};
</script>

<style scoped>
.footer {
  width: 100%;
  background-color: #eeeeee;
  padding: 0 32px;
}

.footer div {
  display: flex;
  justify-content: space-between;
}

a {
  display: block;
  font-weight: bold;
  width: max-content;
}

p,
a,
i {
  color: #757575 !important;
}

h3 {
  padding-top: 32px;
  color: #3c3c3c;
  border-bottom: 2px solid #770019;
  margin-bottom: 12px;
  display: inline-block;
}
</style>