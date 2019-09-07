<template>
  <div class="card" :style="{backgroundImage: `url($(require(../assets/img/${image})))`}">
    <div class="overlay">
      <h4>{{title}}</h4>
      <p>{{text}}</p>
      <router-link :to="to" target="_blank" class='button'>WEITER</router-link>
    </div>
  </div>
  <!-- <div class="row">
    <img :src="require(`@/assets/img/${image}`)" :alt="image">
    <div>
      <router-link :to="to"><h3>{{title}}</h3></router-link>
      <p>{{text}}</p>
    </div>
  </div> -->
</template>

<script>

export default {
  name: 'TextImageCard',
  props: {
    image: String,
    title: String,
    to: String,
    text: String
  }
};
</script>

<style lang="scss" scoped>

.card {
  margin: 40px auto;
  height: 450px;
  max-width: 375px;
  width: 100%;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  // background: url('http://www.evanpedrick.com/assets/img/m2-work1.jpg') no-repeat;
  background-size: 140%;
  background-position: center top;
  position: relative;
  overflow: hidden;
  border-radius: 10px;
}

.card:hover .overlay {
  bottom: -25%;
}

.card h4 {
  font-size: 2.2rem;
  transform: rotate(3deg);
  text-align: left;
  margin-bottom: 20px;
  padding: 0;
  padding-left: 80px;
  color: rgba(0,0,0,0.9);
  font-family: Roboto Slab;
  margin-top: 8%;
  font-weight: 200;
  line-height: 1;
}

p {
  font-family: 'Roboto Slab', serif;
  transform: rotate(3deg);
  color: rgba(black, 0.8);
  width: 65%;
  padding: 0;
  margin: 0 auto;
  margin-top: 25px;
  text-align: left;
  margin-left: 80px;
  font-weight: 500;
  font-size: 1rem;
}

.overlay {
  position: absolute;
  left: -10%;
  bottom: -40%;
  display: block;
  background: white;
  height: 400px;
  width: 500px;
  transform: rotate(-3deg) translate3d(0,0,0);
  border-radius: 10px;
  text-align: center;
  transition: .3s all ease-in-out;
  transition-delay: .1s;
}

p {
  white-space: pre-wrap;
}

.button {
  color: #E80000;
  font-size: 1rem;
  text-decoration: none;
  font-weight: 900;
  transform: rotate(3deg) translateX(-70%);
  position: absolute;
  bottom: 35%;
  left: 50%;
}
</style>
