import { createRouter, createWebHistory } from "vue-router";

const landingPageRouter = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      component: () => import("@/pages/Setting/SignIn.vue"),
    },
    {
      path: "/SignUp",
      component: () => import("@/pages/Setting/SignUp.vue"),
    },
    {
      path: "/",
      component: () => import("@/pages/LandingPage/Home.vue"),
    },
    {
      path: "/itme",
      component: () => import("@/pages/LandingPage/components/layoutsItemProduct.vue"),
    },
    {
      path: "/home/listHotel",
      component: () => import("@/pages/User/showListHoTel.vue"),
    },
    {
      path: "/hotel/:id",
      component: () => import("@/pages/User/showListHoTel.vue"),
    },
    {
      path: "/admin/admin",
      component: () => import("@/pages/Admin/index.vue"),
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
    {
      path: "/ProductFilter",
      component: () => import("@/pages/User/ProductFilter.vue"),
    },    
  ],
});

//console.log(landingPageRouter); // By pass convention

// Docs: https://router.vuejs.org/guide/advanced/navigation-guards.html#global-before-guards

export default landingPageRouter;
