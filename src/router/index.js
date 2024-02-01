import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/register", component: Home },
  { path: "/login", component: Home },
  { path: "/profolio", component: Home },
  { path: "/product", component: Home },
  { path: "/cart", component: Home },
  { path: "/order", component: Home },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
