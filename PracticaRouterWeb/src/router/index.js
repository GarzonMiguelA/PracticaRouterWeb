import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DestinosComponent from '@/components/destinosComponent.vue';
import ExperiencesComponent from '@/components/experiencesComponent.vue';
import DestinosView from '../views/DestinosView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/Todos/:id',
      name: 'Todos',
      component: DestinosView,
      children: [
        {
          path: '/Todos/experiencesComponent',
          name: 'DestinosView',
          component: DestinosComponent,
        }
      ]
      /* component: () => import('../views/DestinosView.vue') */
    },
  ],
})

export default router