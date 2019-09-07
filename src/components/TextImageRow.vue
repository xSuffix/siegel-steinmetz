<template>
  <div class="row">
    <img :src="require(`@/assets/img/${image}`)" :alt="image">
    <div>
      <router-link :to="to"><h3>{{title}}</h3></router-link>
      <p>{{text}}</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'TextImageRow',
  props: {
    image: String,
    title: String,
    to: String,
    text: String
  }
};
</script>

<style lang="scss" scoped>
.row {
  display: flex;
  width: 100%;
  margin: 2em 0;
}

.row div {
  width: 512px;
  max-width: 80%;
  margin-left: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

img {
  width: 448px;
  height: 236px;
  max-width: 80%;
}

p {
  white-space: pre-wrap;
}
</style>
