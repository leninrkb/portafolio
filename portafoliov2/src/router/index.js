import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProyectosView from '../views/ProyectosView.vue'
import ContactoView from '../views/ContactoView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/proyectos',
    name: 'proyectos',
    component: ProyectosView
  },
  {
    path: '/contacto',
    name: 'contacto',
    component: ContactoView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
