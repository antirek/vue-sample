import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";

import User from "../components/user.vue";
import UserRoutes from "../components/user/_routes";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  {
    path: "/user/:userId",
    component: User,
    children: UserRoutes
  }
];

const router = new VueRouter({
  routes
});

export default router;
