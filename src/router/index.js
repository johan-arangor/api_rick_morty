import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Characters')
  },
  // {
  //   path: '/',
  //   name: 'all-details',
  //   component: alldetails
  // },
  {
    path: '/personajes',
    name: 'personajes',
    component: () => import('@/views/Characters')
  },
  {
    path: '/episodios',
    name: 'episodios',
    component: () => import('@/views/Episodes')
  },
  {
    path: '/locaciones',
    name: 'locaciones',
    component: () => import('@/views/Locations')
  },
  {
    path: '/*',
    name: 'error',
    component: () => import('@/views/Error')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
