import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import PortfolioView from '../views/PortfolioView.vue'
import ContactsView from '../views/ContactsView.vue'

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/about', name: 'About', component: AboutView },
  { path: '/portfolio', name: 'Portfolio', component: PortfolioView },
  { path: '/contacts', name: 'Contacts', component: ContactsView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router