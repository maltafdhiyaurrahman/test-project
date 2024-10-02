import { createRouter, createWebHashHistory } from 'vue-router'; // Ganti dari createWebHistory
import HomeViews from '../views/HomeViews.vue';
import LoginViews from '../views/LoginViews.vue';
import GaleriViews from '@/views/GaleriViews.vue';

const routes = [
  {
    path: '/',
    component: HomeViews,
    meta: { requiresAuth: true },
  },
  {
    path: '/ourmemory',
    component: GaleriViews,
    meta: { requiresAuth: true },
  },
  {
    path: '/login',
    component: LoginViews,
  },
];

const router = createRouter({
  history: createWebHashHistory(), // Ganti ke createWebHashHistory
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
