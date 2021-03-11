import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import About from '@/views/About'
import Work from '@/views/Work'
import Navbar from '@/components/Navbar'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/about'
  },
  {
    path: '/about',
    name: 'About',
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    components: {
      default: About,
      header: Navbar
      // footer: ContactButton
    }
  },
  {
    path: '/work',
    name: 'Work',
    components: {
      default: Work,
      header: Navbar
      // footer: ContactButton
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
