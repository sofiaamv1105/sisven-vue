import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Categories from '../views/Category.vue'
import Customers from '../views/Customer.vue'
import Products from '../views/Product.vue'
import PayModes from '@/views/PayMode.vue'
import NewCustomer from '../components/Customer/NewCustomer.vue'
import EditarCustomer from '../components/Customer/EditarCustomer.vue'
import EditarCategory from '../components/Category/EditarCategory.vue'
import NewCategory from '../components/Category/NewCategory.vue'
import NewProduct from '../components/Product/NewProduct.vue'
import EditarProduct from '../components/Product/EditarProduct.vue'

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
  {
    path: '/products',
    name: 'Products',
    component: Products
  },
  {
    path: '/add-product/',
    name: 'NewProduct',
    component: NewProduct
  },
  {
    path: '/products/:id/edit',
    name: 'EditarProduct',
    component: EditarProduct
  },
  {
    path: '/paymodes',
    name: 'PayModes',
    component: PayModes
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
