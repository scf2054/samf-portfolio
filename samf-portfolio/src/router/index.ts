import { createRouter, createWebHistory } from 'vue-router';
// import HomeView from '../views/HomeView.vue'
import Profile from '../views/Profile.vue';
import Education from "../views/Education.vue";
import EmploymentHistory from "../views/EmploymentHistory.vue";
import Projects from '../views/Projects.vue';
import LeadershipExperience from '../views/LeadershpExperience.vue';

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
    }, 
    {
      path: '/employement-history',
      name: 'Employment History',
      component: EmploymentHistory,
      meta: {
        icon: 'briefcase'
      }
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects,
      meta: {
        icon: 'computer'
      }
    },
    {
      path: '/leadership-experience',
      name: 'Leadership Experience',
      component: LeadershipExperience,
      meta: {
        icon: 'handshake'
      }
    }
  ]
})

export default router
