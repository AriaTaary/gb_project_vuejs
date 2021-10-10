import Vue from 'vue'
import VueRouter from 'vue-router'

import Schedule from '@/components/Schedule'
import CostsForm from '../components/CostsForm.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Main',
        component: Schedule
    },
    {
        path: '/add/payment/:category/:value',
        name: 'Form',
        component: CostsForm
    },
    {
    path: '/add/payment/',
    component: () => import('@/components/Schedule')
  },
  {
    path: 'Food?value=:value',
    name: 'food',
      component: () => import('@/components/Schedule'),
    props: true
  },
  {
    path: 'Food', // дубль чтобы можно было переходить на эти роуты напрямую
    name: 'food',
    component: () => import('@/components/Schedule'),
    props: true
  },
  {
    path: 'Transport?value=:value',
    name: 'transport',
    component: () => import('@/components/Schedule'),
    props: true
  },
  {
    path: 'Transport', // дубль чтобы можно было переходить на эти роуты напрямую
    name: 'transport',
    component: () => import('@/components/Schedule'),
    props: true
  },
  {
    path: 'Entertainment?value=:value',
    name: 'entertainment',
    component: () => import('@/components/Schedule'),
    props: true
  },
  {
    path: 'Entertainment', // дубль чтобы можно было переходить на эти роуты напрямую
    name: 'entertainment',
    component: () => import('@/components/Schedule'),
    props: true
  }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
