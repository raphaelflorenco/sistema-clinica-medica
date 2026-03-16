import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import AgendamentosView from '../views/AgendamentosView.vue' // <--- Importacao da tela

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView
    },
    {
      path: '/agendamentos', // <--- Criacao do caminho /agendamentos
      name: 'agendamentos',
      component: AgendamentosView
    }
  ]
})

export default router