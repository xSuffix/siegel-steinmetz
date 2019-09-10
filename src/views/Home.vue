<!--Landing page - siegel-steinmetz.de-->
<template>
  <div>
    <TextIntroduction class="document mt-8"></TextIntroduction>





    <!-- <div class="wave">
      <div class="bg-lightgray document mt-12">
        <v-card class="mx-auto" max-width="400px">
          <v-img height="200px" src="@/assets/img/Restaurierungen.jpg">
            <v-card-title class="headline align-end fill-height"><b>Restaurierungen</b></v-card-title>
          </v-img>
          
          <v-card-text>
            <span class="text--primary">
              <span>Unsere Firma hat als Schwerpunkt ihrer Arbeit die kompetente und sachgemäße Restaurierung, Aufbereitung und Pflege von alten Kirchen und Gebäuden sowie Grabmälern, Denkmälern und Bildhauerarbeiten im Programm.</span>
            </span>
          </v-card-text>
          <v-card-actions>Action</v-card-actions>
        </v-card>
      </div>
    </div> -->
  </div>  
</template>

<script>
import TextIntroduction from '@/components/TextIntroduction.vue'

const tiles = [
  {
    title: "Restaurierungen",
    text: "Unsere Firma hat als Schwerpunkt ihrer Arbeit die kompetente und sachgemäße Restaurierung, Aufbereitung und Pflege von alten Kirchen und Gebäuden sowie Grabmälern, Denkmälern und Bildhauerarbeiten im Programm.",
    image: "Restaurierungen.jpg",
    link: "/restaurierungen",

  },
  {
    title: "Grabmale",
    text: "Wir gestalten gemeinsam mit Ihnen eine ganz persönliche Erinnerung an Ihren verstorbenen Verwandten, ein individuelles Grabmal. Sie können aus einer Vielfalt an Materialien, Inschriften und Ornamenten wählen.\nHandwerkliche Grabmale werden direkt in Neudenau hergestellt.\nIndustriell hergestellte Steine beziehen wir von unserem Zulieferer.",
    image: "Grabmale.jpg",
    link: "/grabmale",
  }
]

export default {
  components: {
    TextIntroduction,
  }
}
</script>

<style lang="scss" scoped>
.wave {
  background: url('../assets/wave.svg') repeat-x;
  height: 300px;
  width: 100%;
  padding-top: 1px;
  margin-top: 64px;
}
</style>
