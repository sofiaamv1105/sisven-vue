import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Categories from '../views/Category.vue'
import EditarCategory from '../components/Category/EditarCategory.vue'
import NewCategory from '../components/Category/NewCategory.vue'

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
