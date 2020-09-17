import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";

import User from "../components/user.vue";
import UserHome from "../components/user/home.vue";
import UserProfile from "../components/user/profile.vue";
import UserEdit from "../components/user/edit.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  {
    path: "/user/:userId",
    component: User,
    children: [
      {
        path: "",
        component: UserHome,
        name: "userHome"
      },
      {
        path: "profile",
        component: UserProfile,
        name: "userProfile"
      },
      {
        path: "edit",
        component: UserEdit,
        name: "userEdit"
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
