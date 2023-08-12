import { createRouter, createWebHistory } from 'vue-router'

import defaultLayout from '@/layouts/Default.vue'


const routes = [
    {
        path: '/',
        name: 'Dashboard',
        component: () => import('../views/Dashboard.vue'),
        meta: {
            layout: defaultLayout
        }
    },
    {
        path: '/offer_planning',
        name: 'Offer planning',
        component: () => import('../views/OfferPlanning.vue'),
        meta: {
            layout: defaultLayout
        }
    },
]


const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})


export default router
