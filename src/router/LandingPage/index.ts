import { createRouter, createWebHistory } from 'vue-router'

const landingPageRouter = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import("@/pages/Setting/SignIn.vue")
    },
    {
      path: '/SignUp',
      component: () => import("@/pages/Setting/SignUp.vue")
    },
    {
      path: '/Home',
      component: () => import("@/pages/LandingPage/Home.vue"),
      children: [
        // {
        //   path: "course",
        //   name: "DashboardAdmin",
        //   component: DashboardAdmin,
        // },
        // {
        //   path: "chapter",
        //   name: "CourseAdmin",
        //   component: CourseAdmin,
        // },
        // {
        //   path: "lesson",
        //   name: "LessonAdmin",
        //   component: LessonAdmin,
        // },
        // {
        //   path: "tabledata",
        //   name: "TableData",
        //   component: Table,
        // },
        // {
        //   path: "profile",
        //   name: "DataCaNhan",
        //   component: Profile,
        // },
      ],
    },
   
  ],
})

console.log(landingPageRouter) // By pass convention

// Docs: https://router.vuejs.org/guide/advanced/navigation-guards.html#global-before-guards

export default landingPageRouter
