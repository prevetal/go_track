import { createRouter, createWebHistory } from 'vue-router'

import defaultLayout from '@/layouts/Default.vue'
import authLayout from '@/layouts/Auth.vue'


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
    {
        path: '/abc_analysis',
        name: 'ABC analysis',
        component: () => import('../views/ABCAnalysis.vue'),
        meta: {
            layout: defaultLayout
        }
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('../views/auth/Login.vue'),
        meta: {
            layout: authLayout
        }
    },
    {
        path: '/recovery_password',
        name: 'Recovery password',
        component: () => import('../views/auth/RecoveryPassword.vue'),
        meta: {
            layout: authLayout
        }
    },
    {
        path: '/register',
        name: 'Register',
        component: () => import('../views/auth/Register.vue'),
        meta: {
            layout: authLayout
        }
    },
    {
        path: '/add_shop',
        name: 'Add shop',
        component: () => import('../views/auth/AddShop.vue'),
        meta: {
            layout: authLayout
        }
    },
    {
        path: '/account',
        name: 'Account',
        component: () => import('../views/Account.vue'),
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
