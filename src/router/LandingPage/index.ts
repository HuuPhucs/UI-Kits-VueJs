import { createRouter, createWebHistory } from 'vue-router'

const landingPageRouter = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import("@/pages/LandingPage/trangChu.vue")
    }
  ],
})

console.log(landingPageRouter) // By pass convention

// Docs: https://router.vuejs.org/guide/advanced/navigation-guards.html#global-before-guards

export default landingPageRouter
