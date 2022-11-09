import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Layout from "@/layout/index.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Layout,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
