import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/search/',
    name: 'search',
    component: () => import('../views/SearchView.vue'),
    props: route => ({
      query: route.searchTerm
    })
  },
  {
    path: '/details/:id',
    name: 'details',
    component: () => import('../views/DetailView.vue'),
    props: true
  },
  {
    path: '/trending',
    name: 'trending',
    component: () => import('../views/TrendingView.vue'),
  },
  {
    path: '/popular',
    name: 'popular',
    component: () => import('../views/PopularView.vue'),
  },
  {
    path: '/rated',
    name: 'rated',
    component: () => import('../views/RatedView.vue'),
  },
  {
    path: '/playing',
    name: 'playing',
    component: () => import('../views/PlayingView.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
