<!--Landing page - siegel-steinmetz.de-->
<template>
  <div class="document mt-8">
    <TextIntroduction></TextIntroduction>
    <Split class="mt-8">
      <div>
        <h2><router-link to="/restaurierungen" class="siegel-primary">Restaurierungen</router-link></h2>
        <figure>
          <img src="@/assets/img/home_1.jpg" />
        </figure>
        <p
          class="mt-4"
        >Unsere Firma hat als Schwerpunkt ihrer Arbeit die kompetente und sachgemäße Restaurierung, Aufbereitung und Pflege von alten Kirchen und Gebäuden sowie Grabmälern, Denkmälern und Bildhauerarbeiten im Programm.</p>
      </div>

      <div>
        <h2><router-link to="/grabmale" class="siegel-primary">Grabmale</router-link></h2>
        <figure>
          <img src="@/assets/img/home_2.jpg" />
        </figure>
        <p class="mt-4">
          Wir gestalten gemeinsam mit Ihnen eine ganz persönliche Erinnerung an Ihren verstorbenen Verwandten, ein individuelles Grabmal.
          <br />Sie können aus einer Vielfalt an Materialien, Inschriften und Ornamenten wählen. Handwerkliche Grabmale werden direkt in Neudenau hergestellt. Industriel hergestellte Steine, beziehen wir von unserem Zulieferer.
        </p>
      </div>
    </Split>
    <!-- <TextImageCard image="home_1.jpg"></TextImageCard> -->
  </div>
</template>

<script>
import TextIntroduction from "@/components/TextIntroduction.vue";
import TextImageCard from "@/components/TextImageCard.vue";
import Split from "@/components/Split.vue";

const tiles = [
  {
    title: "Restaurierungen",
    text:
      "Unsere Firma hat als Schwerpunkt ihrer Arbeit die kompetente und sachgemäße Restaurierung, Aufbereitung und Pflege von alten Kirchen und Gebäuden sowie Grabmälern, Denkmälern und Bildhauerarbeiten im Programm.",
    image: "Restaurierungen.jpg",
    link: "/restaurierungen"
  },
  {
    title: "Grabmale",
    text:
      "Wir gestalten gemeinsam mit Ihnen eine ganz persönliche Erinnerung an Ihren verstorbenen Verwandten, ein individuelles Grabmal. Sie können aus einer Vielfalt an Materialien, Inschriften und Ornamenten wählen.\nHandwerkliche Grabmale werden direkt in Neudenau hergestellt.Industriell hergestellte Steine beziehen wir von unserem Zulieferer.",
    image: "Grabmale.jpg",
    link: "/grabmale"
  }
];

export default {
  components: {
    TextIntroduction,
    TextImageCard,
    Split
  }
};
</script>

<style scoped>
.split {
  justify-content: space-between;
}

.split > div {
  max-width: 450px;
}

.split > figure + p {
  margin-left: 32px;
}

.split figure,
.split p {
  max-width: 450px;
}

.split figure {
  /* max-width: 450px; */
  background-color: #eeeeee;
}

.split img {
  max-width: 100%;
}

.wave {
  background: url("../assets/wave.svg") repeat-x;
  height: 300px;
  width: 100%;
  padding-top: 1px;
  margin-top: 64px;
}
</style>
