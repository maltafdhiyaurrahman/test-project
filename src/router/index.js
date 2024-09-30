import { createRouter, createWebHistory } from 'vue-router';
import HomeViews from '../views/HomeViews.vue';
import LoginViews from '../views/LoginViews.vue';

const routes = [
  {
    path: '/',
    component: HomeViews,
    meta: { requiresAuth: true },
  },
  {
    path: '/login',
    component: LoginViews,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Middleware untuk mengatur rute berdasarkan status login
router.beforeEach((to, from, next) => {
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  
  if (to.matched.some(record => record.meta.requiresAuth) && !isLoggedIn) {
    next('/login'); // Jika tidak login, redirect ke halaman login
  } else {
    next();
  }
});

export default router;