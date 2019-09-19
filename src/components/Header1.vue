<!--Header for each page, includes logo and navigation-->
<template>
  <div>
    <header class="document">
      <Logo />
      <Navigation />
      <Menu @click.native="openNavigation()"/>
    </header>
    <!-- <NavigationDrawer :drawer="open"/> -->
    <v-navigation-drawer
        v-model="drawer"
        class="white nav-drawer"
        dark
        temporary
        absolute
        @close="drawer = false"
      >
        <v-list>
          <v-list-item
            v-for="item in items"
            :key="item.title"
            link
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
  
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
  </div>
</template>

<script>
import Logo from '@/components/Logo.vue'
import Navigation from '@/components/Navigation.vue'
import Menu from '@/components/Menu.vue'
import NavigationDrawer from '@/components/NavigationDrawer.vue'

export default {
  data() {
    return {
      drawer: false
    }
  },
  components: {
    Logo,
    Navigation,
    Menu,
    NavigationDrawer
  },
  methods: {
    openNavigation: function() {
      this.drawer = !this.drawer;
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  height: 128px;
  display: flex;
  justify-content: space-between;
  z-index: 1000;
}

.nav-drawer {
  // transition: all 0.5s;
  // left: -256px;
}

.nav-drawer.show-drawer {
  // left: 0;
}
</style>
