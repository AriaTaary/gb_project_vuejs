import Vue from 'vue'
import VueRouter from 'vue-router'

import Main from '../views/Main.vue'
import CostsForm from '../components/CostsForm.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Main',
        component: Main
    },
    {
        path: '/add/payment/:category/:value',
        name: 'Form',
        component: CostsForm
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
