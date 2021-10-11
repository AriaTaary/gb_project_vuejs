import Vue from 'vue'
import VueRouter from 'vue-router'

import Schedule from '@/components/Schedule'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Main',
        component: Schedule
    },
    {
        path: '/Food?value=:value',
        name: 'Food',
        component: Schedule,
        props: true
    },
    {
        path: '/Food',
        name: 'Food',
        component: Schedule,
        props: true
    },
    {
        path: '/Transport?value=:value',
        name: 'Transport',
        component: Schedule,
        props: true
    },
    {
        path: '/Transport',
        name: 'Transport',
        component: Schedule,
        props: true
    },
    {
        path: '/Entertainment?value=:value',
        name: 'Entertainment',
        component: Schedule,
        props: true
    },
    {
        path: '/Entertainment',
        name: 'Entertainment',
        component: Schedule,
        props: true
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
