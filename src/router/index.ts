import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'main',
    component: () => import('@/page/main.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
