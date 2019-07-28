import Vue from 'vue'
import Router from 'vue-router'

import Test from './views/Test.vue'

import Home from './views/Home.vue'
import Restorations from './views/Restorations.vue'
import Tombs from './views/Tombs.vue'
import About from './views/About.vue'
import Gallery from './views/Gallery.vue'
import Contact from './views/Contact.vue'
import Imprint from './views/Imprint.vue'
import PrivacyPolicy from './views/PrivacyPolicy.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/test',
      name: 'test',
      component: Test
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/restaurierungen',
      name: 'restaurierungen',
      component: Restorations
    },
    {
      path: '/grabmale',
      name: 'grabmale',
      component: Tombs
    },
    {
      path: '/ueber-uns',
      name: 'ueber-uns',
      component: About
    },
    {
      path: '/galerie',
      name: 'galerie',
      component: Gallery
    },
    {
      path: '/kontakt',
      name: 'kontakt',
      component: Contact
    },
    {
      path: '/impressum',
      name: 'impressum',
      component: Imprint
    },
    {
      path: '/datenschutz',
      name: 'datenschutz',
      component: PrivacyPolicy
    },
  ]
})
