import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      showTab: true
    }
  },
  {
    path: '/order',
    name: 'Order',
    component: () => import('../views/Order.vue'),
    meta: {
      showTab: true
    }
  },
  {
    path: '/team',
    name: 'Team',
    component: () => import('../views/Team.vue'),
    meta: {
      showTab: true
    }
  },
  {
    path: '/financial',
    name: 'Financial',
    component: () => import('../views/Financial.vue'),
    meta: {
      showTab: true
    }
  },
  {
    path: '/my',
    name: 'My',
    component: () => import('../views/My.vue'),
    meta: {
      showTab: true
    }
  },
  {
    path: '/mission',
    name: 'Mission',
    component: () => import('../views/Mission.vue'),
    meta: {
      showTab: false
    }
  },
  {
    path: '/totalTeamContribution',
    name: 'TotalTeamContribution',
    component: () => import('../views/TotalTeamContribution.vue'),
    meta: {
      showTab: false
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
    meta: {
      showTab: false
    }
  },
  {
    path: '/changeName',
    name: 'ChangeName',
    component: () => import('../views/ChangeName.vue'),
    meta: {
      showTab: false
    }
  },
  {
    path: '/memberSystem',
    name: 'MemberSystem',
    component: () => import('../views/MemberSystem.vue'),
    meta: {
      showTab: false
    }
  },
  {
    path: '/bankInformation',
    name: 'BankInformation',
    component: () => import('../views/BankInformation.vue'),
    meta: {
      showTab: false
    }
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
