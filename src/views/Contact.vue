<template>
  <div>
    <div class="mt-8 document">
      <router-link to="/kontakt"><h3>Kontakt</h3></router-link>
      <h4>Anschrift</h4>
      <p>Bernd Siegel<br/>Steingestaltung</p>
      <p>Bahnhofstraße 13<br/>74861 Neudenau</p>
      <a href="tel:+496264926444" class="link-in address phone">06264 / 92 64 44</a><br/>
      <a href="tel:+496264926445" class="link-in address fax">06264 / 92 64 45</a><br/>
      <a href="mailto:siegel.neudenau@t-online.de" class="link-in address mail">info@siegel-steinmetz.de</a>

      <div id="map"></div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    let location = {
      lat: 49.288690, lng: 9.271360
    };
    this.map = new google.maps.Map(document.getElementById("map"), {
      zoom: 16,
      center: location
    });

    
  }
}
</script>

<style scoped>
#map {
  width: 100%;
  height: 500px;
}

a.address {
  font-size: 1.2rem;
  color: #770019;
}

a:before {
  margin-right: 4px;
  font-family: "Material Icons";
  vertical-align: middle;
  color: #3C3C3C;
}

.phone:before {
  content: "phone";
}

.fax:before {
  content: "print"
}

.mail:before {
  content: "mail"
}
</style>
