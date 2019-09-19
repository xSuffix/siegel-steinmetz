<!--Informational page about resoration - siegel-steinmetz.de/restaurierungen-->
<template>
  <div class="mt-8 document">
    <router-link to="/restaurierungen"><h1>Restaurierungen</h1></router-link>
    <TextImageOriginal class="mt-4">
      <span>
        <p>Unsere Firma hat als einen Schwerpunkt ihrer Arbeit die Komplette und fachgemäße Restaurierung von historischen Gebäuden, Baudenkmalen und Bildhauerarbeiten.</p>
        <p>Bei der klassischen Vorgehensweise in der Denkmalpflege wird fogender Weg beschritten: Zuerst erfolgt die Reinigung von dieversen Bauteilen der Fassade wie Eckquadern, Balustraden,Treppen, Fenster- und Türumrahmungen usw. Schäden, wie z.B. Risse, Ausbrüche und Rückwitterungen werden je nach Schadensumfang durch Antragungen oder Vierungen(nur teilweiser Austausch an den beschädigten Bauteilen) ersetzt.</p>
        <p>Bei allen auszuführenden Arbeiten orientieren wir uns so weit wie  möglich am Original. Das beinhaltet die Materialauswahl bis hin zur Oberflächenstruktur. Auch wenn wir bei unseren Eingriffen in die historische Bausubstanz sehr zurückhaltend und vorsichtig agieren. Sobedeutet es doch für unsere Auftraggeber ein optimales Kosten-Nutzenverhältnis.</p>
      </span>
      <TileImage image="restorations_1.jpg">
        <p>Restaurierung: Fensterumrahmung Solitudestr. Ludwigsburg</p>
      </TileImage>
    </TextImageOriginal>
    <TextImageOriginal class="mt-6">
      <TileImage image="restorations_2.jpg">
        <p>Austausch einer Säulenbasis aus dem Jahr 1890</p>
      </TileImage>
      <span>
        <p>Für das Reinigen von Natursteinoberflächen nutzen wir das Niederdruckstrahlverfarn. Das Ergebnis entspricht der Reinigung mit dem Jos- bzw dem Nebelstrahlverfahren. Die Reinigung kann individuell auf den Verschmutzungsgrad eingestellt werden. Dazu werden die Parameter unterschiedlich verändert. Veränderbar sind die Zufur von Wasser, Luftdruck (0,5-10 bar) und der Strahldüsenabstand. Unter denkmalpflegerischer Hinsicht darf die original Oberflächenstruktur nicht zerstört werden. Meistens befindet man sich bei dieser Problemstellung auf einer Gratwanderung. Schwarze Krusten können nur aufgehellt werden, um die kostbare originale Oberflächenbearbeitung zu erhalten.</p>
      </span>
    </TextImageOriginal>
    <TextImageOriginal class="mt-6">
      <span>
        <p>Sie können von uns perfekte, handwerkliche und traditionelle Arbeit erwarten, die wir mit viel Hingabe, Erfahrung und Engagement übernehmen. Daneben aber setzen wir modernste Technik ein, um optimale Ergebnisse zu erzielen, die Sie zufrieden stellen.</p>
        <p>Selbstverständlich übernehmen wir diese Arbeiten in wiederkehrenden Abständen für Sie, um das perfekte Aussehen jederzeit zu gewährleisten.</p>
      </span>
      <TileImage image="restorations_3.jpg"></TileImage>
    </TextImageOriginal>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.gradient {
  height: 2000px;
  background: linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(0,212,255,1) 100%);
}
</style>

<script>
import TileImage from '@/components/TileImage.vue'
import TextImageOriginal from '@/components/TextImageOriginal.vue'

export default {
  components: {
    TileImage,
    TextImageOriginal
  }  
}
</script>