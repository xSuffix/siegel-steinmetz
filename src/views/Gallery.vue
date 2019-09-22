<!--Photo gallery page - siegel-steinmetz.de/galerie-->
<template>
  <div>
    <div class="mt-8 document">
      <router-link to="/galerie">
        <h1>Galerie</h1>
      </router-link>
      <p>Eine kleine Übersicht über unsere bisherigen Leistungen finden Sie hier.</p>
    </div>
    <section class="mt-8 document">
      <div class="card-container">
        <GalleryCardAlbum
          @click.native="loadAlbum(albums[0])"
          title="Grabmal-Lager"
          image="gallery_1.jpg"
          :amount="albums[0].images.length"
        />
        <GalleryCardAlbum
          @click.native="loadAlbum(albums[1])"
          title="Grabmalreferenzen"
          image="gallery_2.jpg"
          :amount="albums[1].images.length"
        />
        <GalleryCardAlbum
          @click.native="loadAlbum(albums[2])"
          title="Restaurierungen"
          image="gallery_3.jpg"
          :amount="albums[2].images.length"
        />
      </div>

      <div v-if="this.loadedAlbum != null" class="mt-8 image-container">
        <span
          v-for="image in loadedAlbum.images"
          :key="image.key"
          :style="`width:${image.width*300/image.height}px;flex-grow:${image.width*300/image.height}`"
        >
          <i :style="`padding-top:${image.height/image.width*100}%`"></i>
          <img :src="image.path" />
        </span>
      </div>
    </section>
  </div>
</template>

<script>
import GalleryCardAlbum from "@/components/GalleryCardAlbum.vue";
import { isUndefined } from "util";

function importAll(r) {
  return r.keys().map(r);
}

const albums = [
  { url: "grabmallager" },
  { url: "grabmalreferenzen" },
  { url: "restaurierungen" }
];

const albumImports = [
  importAll(
    require.context(
      "../assets/img/album/grabmallager/",
      false,
      /\.(png|jpe?g|svg)$/
    )
  ),
  importAll(
    require.context(
      "../assets/img/album/grabmalreferenzen/",
      false,
      /\.(png|jpe?g|svg)$/
    )
  ),
  importAll(
    require.context(
      "../assets/img/album/restaurierungen/",
      false,
      /\.(png|jpe?g|svg)$/
    )
  )
];

for (let i = 0; i < albumImports.length; i++) {
  albums[i].images = [];
  for (let j = 0; j < albumImports[i].length; j++) {
    let image = new Image();
    image.src = albumImports[i][j];
    image.addEventListener("load", function() {
      albums[i].images.push({
        key: `${i}i${j}`,
        path: albumImports[i][j],
        height: image.height,
        width: image.naturalWidth
      });
    });
  }
}

export default {
  data() {
    return {
      albums: albums,
      loadedAlbum: null
      // pageSize: 12
    };
  },
  props: {
    album: String,
    from: {
      type: String
    },
    to: {
      type: String
    }
  },
  components: {
    GalleryCardAlbum
  },
  computed: {
    // shownImages: function() {
    //   let imageIndexes = [];
    //   let from = this.from;
    //   if (from == null) from = 1;
    //   else from = parseInt(from);
    //   let to = parseInt(this.to);
    //   if (to > this.imageCount) to = this.imageCount;
    //   if (isNaN(this.to)) {
    //     if (isUndefined(this.to)) {
    //       if (this.from == null) {
    //         to = this.imageCount;
    //       } else {
    //         to = from;
    //       }
    //     } else {
    //       to = this.imageCount;
    //     }
    //   }
    //   console.log(`from: ${from}  to: ${to}`);
    //   for (let i = from; i <= to; i++) {
    //     if (i <= this.imageCount) imageIndexes.push(i);
    //   }
    //   return imageIndexes;
    // }
  },
  watch: {
    album() {
      this.loadedAlbum = this.getAlbumByName(this.album);
    }
  },
  methods: {
    loadAlbum: function(album) {
      if (album != null) {
        if (this.album != album.url) {
          this.$router.push({ name: "album", params: { album: album.url } });
        }
      }
    },
    getAlbumByName: function(name) {
      for (let i = 0; i < this.albums.length; i++) {
        if (this.albums[i].url == name) {
          return this.albums[i];
        }
      }
    }
  },
  mounted() {
    this.loadedAlbum = this.getAlbumByName(this.album);
  }
};
</script>

<style scoped>
.card-container {
  display: flex;
  justify-content: space-around;
}

.image-container {
  display: flex;
  flex-wrap: wrap;
}

.image-container::after {
  content: "";
  flex-grow: 999999999;
}

.image-container span {
  margin: 2px;
  background-color: #eeeeee;
  position: relative;
}

.image-container i {
  display: block;
}

.image-container img {
  position: absolute;
  top: 0;
  width: 100%;
  vertical-align: bottom;
}
</style>
