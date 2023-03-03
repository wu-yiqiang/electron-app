import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { featureRouters } from "./featureRouters";
export const menus: Array<RouteRecordRaw> = featureRouters
const routes: Array<RouteRecordRaw> = [
  // {
  //   path: "/",
  //   name: "index",
  //   meta: {
  //     title: "首页",
  //     keepAlive: true,
  //     requireAuth: true,
  //   },
  //   component: Index,
  // }
  {
    path: '/',
    redirect: '/send',
    children: menus
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
