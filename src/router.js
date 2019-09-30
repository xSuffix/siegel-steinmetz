import Vue from 'vue'

import Router from 'vue-router'
const Home = () => import('./views/Home.vue')
const Restorations = () => import('./views/Restorations.vue')
const Tombs = () => import('./views/Tombs.vue')
const About = () => import('./views/About.vue')
const Gallery = () => import('./views/Gallery.vue')
const Contact = () => import('./views/Contact.vue')
const Imprint = () => import('./views/Imprint.vue')
const PrivacyPolicy = () => import('./views/PrivacyPolicy.vue')

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: 'Home - Bernd Siegel Steingestaltung'
      }
    },
    {
      path: '/restaurierungen',
      name: 'restaurierungen',
      component: Restorations,
      meta: {
        title: 'Restaurierungen - Bernd Siegel Steingestaltung'
      }
    },
    {
      path: '/grabmale',
      name: 'grabmale',
      component: Tombs,
      meta: {
        title: 'Grabmale - Bernd Siegel Steingestaltung'
      }
    },
    {
      path: '/ueber-uns',
      name: 'ueber-uns',
      component: About,
      meta: {
        title: 'Über uns - Bernd Siegel Steingestaltung'
      }
    },
    {
      path: '/galerie',
      name: 'galerie',
      component: Gallery,
      meta: {
        title: 'Galerie - Bernd Siegel Steingestaltung'
      }
    },
    {
      path: '/galerie/:album',
      name: 'album',
      component: Gallery,
      props: true,
      meta: {
        title: 'Galerie - Bernd Siegel Steingestaltung'
      }
    },
    {
      path: '/galerie/:album/:from',
      name: 'image',
      component: Gallery,
      props: true,
      meta: {
        title: 'Galerie - Bernd Siegel Steingestaltung'
      }
    },
    {
      path: '/galerie/:album/:from/:to',
      name: 'images',
      component: Gallery,
      props: true,
      meta: {
        title: 'Galerie - Bernd Siegel Steingestaltung'
      }
    },
    {
      path: '/kontakt',
      name: 'kontakt',
      component: Contact,
      meta: {
        title: 'Kontakt - Bernd Siegel Steingestaltung'
      }
    },
    {
      path: '/impressum',
      name: 'impressum',
      component: Imprint,
      meta: {
        title: 'Impressum - Bernd Siegel Steingestaltung'
      }
    },
    {
      path: '/datenschutz',
      name: 'datenschutz',
      component: PrivacyPolicy,
      meta: {
        title: 'Datenschutzerklärung - Bernd Siegel Steingestaltung'
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
});

export default router