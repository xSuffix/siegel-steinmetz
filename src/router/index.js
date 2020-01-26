import Vue from 'vue'

import Router from 'vue-router'
const Home = () => import('../views/Home.vue')
const Restorations = () => import('../views/Restorations.vue')
const Tombs = () => import('../views/Tombs.vue')
const About = () => import('../views/About.vue')
const Gallery = () => import('../views/Gallery.vue')
const Contact = () => import('../views/Contact.vue')
const Imprint = () => import('../views/Imprint.vue')
const Policy = () => import('../views/Policy.vue')

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
      path: '/home',
      redirect: '/'
    },
    {
      path: '/restorations',
      name: 'restorations',
      component: Restorations,
      meta: {
        title: 'Restaurierungen - Bernd Siegel Steingestaltung'
      }
    },
    {
      path: '/restaurierungen',
      redirect: '/restorations'
    },
    {
      path: '/tombs',
      name: 'tombs',
      component: Tombs,
      meta: {
        title: 'Grabmale - Bernd Siegel Steingestaltung'
      }
    },
    {
      path: '/grabmale',
      redirect: '/tombs'
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      meta: {
        title: 'Über uns - Bernd Siegel Steingestaltung'
      }
    },
    {
      path: '/ueber-uns',
      redirect: '/about'
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: Gallery,
      meta: {
        title: 'Galerie - Bernd Siegel Steingestaltung'
      }
    },
    {
      path: '/galerie',
      redirect: '/gallery'
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
      meta: {
        title: 'Kontakt - Bernd Siegel Steingestaltung'
      }
    },
    {
      path: '/kontakt',
      redirect: '/contact'
    },
    {
      path: '/imprint',
      name: 'imprint',
      component: Imprint,
      meta: {
        title: 'Impressum - Bernd Siegel Steingestaltung'
      }
    },
    {
      path: '/impressum',
      redirect: '/imprint'
    },
    {
      path: '/policy',
      name: 'policy',
      component: Policy,
      meta: {
        title: 'Datenschutzerklärung - Bernd Siegel Steingestaltung'
      }
    },
    {
      path: '/datenschutz',
      redirect: '/policy'
    }
  ]
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
});

export default router