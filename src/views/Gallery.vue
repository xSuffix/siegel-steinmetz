<!--Photo gallery page - siegel-steinmetz.de/galerie-->
<template>
  <div>
    <div class="mt-8 document">
      <h1>Galerie</h1>
      <p>Eine kleine Übersicht über unsere bisherigen Leistungen finden Sie hier.</p>
    </div>
    <div class="mt-8 document card-container">
      <GalleryCardAlbum title="Grabmal-Lager" image="gallery_1.png" amount="34" link="grabmal-lager"/>
      <GalleryCardAlbum title="Grabmalreferenzen" image="gallery_2.png" amount="24" link="grabmalreferenzen"/>
      <GalleryCardAlbum title="Restaurierungen" image="gallery_3.png" amount="7" link="restaurierungen"/>
    </div>
  </div>
</template>

<script>
import GalleryCardAlbum from '@/components/GalleryCardAlbum.vue'

export default {
  components: {
    GalleryCardAlbum
  }
}
</script>

<style scoped>
.card-container {
  display: flex;
  justify-content: space-around;
}
</style>
