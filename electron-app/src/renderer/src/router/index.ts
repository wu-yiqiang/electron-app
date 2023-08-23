import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { featureRouters } from "./featureRouters";
export const menus: Array<RouteRecordRaw> = featureRouters
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/receive',
    children: menus
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
