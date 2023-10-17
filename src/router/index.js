import { createRouter, createWebHistory } from "vue-router";

import NewsView from "../views/NewsView.vue";
import JobsView from "../views/JobsView.vue";
import AskView from "../views/AskView.vue";

const routes = [
  {
    path: "/",
    redirect: "/news",
  },
  {
    path: "/news",
    // name: "",
    component: NewsView,
  },
  {
    path: "/ask",
    // name: "",
    component: AskView,
  },
  {
    path: "/jobs",
    // name: "",
    component: JobsView,
  },
  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
