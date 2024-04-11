import { createRouter, createWebHistory } from 'vue-router'
import Pick from '../components/Pick.vue'
import Result from '../components/Result.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Pick
    },
    {
      path: '/pick/:id',
      name: 'pick',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Result
    }
  ]
})

export default router
