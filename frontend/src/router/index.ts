import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import SBhome from "../views/Home.vue";
import SBlogin from "../views/auth/Login.vue";
import SBregister from "../views/auth/Register.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "SBhome",
    component: SBhome,
  },

  {
    path: "/login",
    name: "SBlogin",
    component: SBlogin,
  },

  {
    path: "/register",
    name: "SBregister",
    component: SBregister,
  },

  {
    path: "/:catchAll(.*)",
    redirect: "/",
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
