import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
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
          path: 'experiences/:experienceSlug',
          name: 'ExperienceDetail',
          component: ExperiencesComponent,
        },
      ]
    }
  ],
})

export default router