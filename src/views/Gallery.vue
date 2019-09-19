<!--Photo gallery page - siegel-steinmetz.de/galerie-->
<template>
  <div>
    <div class="mt-8 document">
      <router-link to="/galerie"><h1>Galerie</h1></router-link>
      <p>Eine kleine Übersicht über unsere bisherigen Leistungen finden Sie hier.</p>
    </div>
    <div class="mt-8 document card-container">
      <GalleryCardAlbum @click.native="loadAlbum()" title="Grabmal-Lager" image="gallery_1.jpg" amount="34" link="grabmal-lager" />
      <GalleryCardAlbum @click.native="loadAlbum()" title="Grabmalreferenzen" image="gallery_2.jpg" amount="24" link="grabmalreferenzen"/>
      <GalleryCardAlbum @click.native="loadAlbum()" title="Restaurierungen" image="gallery_3.jpg" amount="7" link="restaurierungen"/>
    </div>
  </div>
</template>

<script>
import GalleryCardAlbum from '@/components/GalleryCardAlbum.vue'

export default {
  components: {
    GalleryCardAlbum
  },
  methods: {
    loadAlbum: function() {
      console.log("loading")
    }
  },
  mounted() {
    console.log(this.$route.params.album);
  }
}

</script>

<style scoped>
.card-container {
  display: flex;
  justify-content: space-around;
}
</style>
