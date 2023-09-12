import { createRouter, createWebHistory } from 'vue-router';
// import HomeView from '../views/HomeView.vue'
import Profile from '../views/Profile.vue';
import Education from "../views/Education.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView
    // },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      meta: {
        icon: 'user'
      }
    },
    {
      path: '/education',
      name: 'Education',
      component: Education,
      meta: {
        icon: 'school'
      }
    }
  ]
})

export default router
