import Vue from 'vue'
import Router from 'vue-router'

import TestPage from './views/TestPage.vue'

import HomePage from './views/HomePage.vue'
import RestorationsPage from './views/RestorationsPage.vue'
import TombsPage from './views/TombsPage.vue'
import AboutPage from './views/AboutPage.vue'
import GalleryPage from './views/GalleryPage.vue'
import ContactPage from './views/ContactPage.vue'
import ImprintPage from './views/ImprintPage.vue'
import PrivacyPolicyPage from './views/PrivacyPolicyPage.vue'

Vue.use(Router)


const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/test',
      name: 'test',
      component: TestPage,
      meta: {
        title: 'Test'
      }
    },
    {
      path: '/',
      name: 'home',
      component: HomePage,
      meta: {
        title: 'Home - Bernd Siegel Steingestaltung'
      }
    },
    {
      path: '/restaurierungen',
      name: 'restaurierungen',
      component: RestorationsPage,
      meta: {
        title: 'Restaurierungen - Bernd Siegel Steingestaltung'
      }
    },
    {
      path: '/grabmale',
      name: 'grabmale',
      component: TombsPage,
      meta: {
        title: 'Grabmale - Bernd Siegel Steingestaltung'
      }
    },
    {
      path: '/ueber-uns',
      name: 'ueber-uns',
      component: AboutPage,
      meta: {
        title: 'Über uns - Bernd Siegel Steingestaltung'
      }
    },
    {
      path: '/galerie',
      name: 'galerie',
      component: GalleryPage,
      meta: {
        title: 'Galerie - Bernd Siegel Steingestaltung'
      }
    },
    {
      path: '/kontakt',
      name: 'kontakt',
      component: ContactPage,
      meta: {
        title: 'Kontakt - Bernd Siegel Steingestaltung'
      }
    },
    {
      path: '/impressum',
      name: 'impressum',
      component: ImprintPage,
      meta: {
        title: 'Impressum - Bernd Siegel Steingestaltung'
      }
    },
    {
      path: '/datenschutz',
      name: 'datenschutz',
      component: PrivacyPolicyPage,
      meta: {
        title: 'Datenschutzerklärung - Bernd Siegel Steingestaltung'
      }
    },
  ]
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
});

export default router