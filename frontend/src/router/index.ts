import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import SBhome from "../views/Home.vue";
import SBlogin from "../views/auth/Login.vue";
import SBregister from "../views/auth/Register.vue";
import SBbarsList from "../views/barsList/barsList.vue";
import SBbar from "../views/bar/bar.vue";
import SBprofile from "../views/profile/profile.vue";
import SBcreateBar from "../components/CreateBar/createBar.vue";

const noAuthGuard = (to: any, from: any, next: any) => {
  (localStorage.getItem("token")) ? next("/") : next()
}

const authGuard = (to: any, from: any, next: any) => {
  (!localStorage.getItem("token")) ? next("/login") : next()
}

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "SBhome",
    component: SBhome
  },

  {
    path: "/login",
    name: "SBlogin",
    component: SBlogin,
    beforeEnter: noAuthGuard
  },

  {
    path: "/register",
    name: "SBregister",
    component: SBregister,
    beforeEnter: noAuthGuard
  },
  {
    path: "/bares",
    name: "SBbarsList",
    component: SBbarsList,
  },
  {
    path: "/bar/:slug",
    name: "SBbar",
    props:true,
    component: SBbar,
  },
  {
    path:"/create",
    name:"SBcreateBar",
    component:SBcreateBar,
    beforeEnter:authGuard
  },
  {
    path: "/profile/:check/:username",
    name: "SBprofile",
    props: true,
    beforeEnter: authGuard,
    component: SBprofile,

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
