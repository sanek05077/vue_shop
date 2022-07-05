import Vue from 'vue'
import VueRouter from 'vue-router'
import blog from './blog'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
    meta: {
      breadcrumb: 'Главная'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue'),
    meta: {
      breadcrumb: {
        label: 'О нас',
        parent: 'Home'
      }
    }
  },
  {
    path: '/payment',
    name: 'Payment-and-delivery',
    component: () => import('@/views/Payment.vue'),
    meta: {
      breadcrumb: {
        label: 'Оплата и доставка',
        parent: 'Home'
      }
    }
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: () => import('@/views/Contacts.vue'),
    meta: {
      breadcrumb: {
        label: 'Контакты',
        parent: 'Home'
      }
    }
  },
  {
    path: '/warranty',
    name: 'Warranty',
    component: () => import('@/views/Warranty.vue'),
    meta: {
      breadcrumb: {
        label: 'Гарантия',
        parent: 'Home'
      }
    }
  },
  {
    path: '/catalog',
    name: 'Catalog',
    component: () => import('@/views/Catalog.vue'),
    meta: {
      breadcrumb: {
        label: 'Каталог товара',
        parent: 'Home'
      }
    }
  },
  {
    path: '/news',
    name: 'Index',
    component: () => import('@/views/blog/Index.vue'),
    meta: {
      breadcrumb: {
        label: 'Новости',
        parent: 'Home'
      }
    }
  },
    ...blog,
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
