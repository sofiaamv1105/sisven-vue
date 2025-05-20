import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Categories from '../views/Category.vue'
import Customers from '../views/Customer.vue'
import NewCustomer from '../components/Customer/NewCustomer.vue'
import EditarCustomer from '../components/Customer/EditarCustomer.vue'
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
  },
  {
    path: '/customers',
    name: 'Customers',
    component: Customers
  },
  {
    path: '/add-customer/',
    name: 'NewCustomer',
    component: NewCustomer
  },
  {
    path: '/customers/:id/edit',
    name: 'EditarCustomer',
    component: EditarCustomer
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
