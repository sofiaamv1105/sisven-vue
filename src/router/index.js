import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Categories from '../views/Category.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/categories',
    name: 'Categories',
    component: Categories
  },
  {
    path: '/editar-category/:id',
    name: 'EditarCategory',
    component: EditarCategory
  },
  {
    path: '/add-category/',
    name: 'NewCategory',
    component: NewCategory
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
