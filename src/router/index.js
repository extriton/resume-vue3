import { createRouter, createWebHistory } from 'vue-router'
import Resume from '@/views/Resume.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'ResumeHome',
            component: Resume,
            children: [
                {
                    path: 'about',
                    name: 'AboutPage',
                    component: () => import('@/views/AboutPage.vue')
                },
                {
                    path: 'resume',
                    name: 'ResumePage',
                    component: () => import('@/views/ResumePage.vue')
                },
                {
                    path: 'portfolio',
                    name: 'PortfolioPage',
                    component: () => import('@/views/PortfolioPage.vue')
                },
                {
                    path: 'contacts',
                    name: 'ContactsPage',
                    component: () => import('@/views/ContactsPage.vue')
                },
                {
                    path: '/:pathMatch(.*)*',
                    redirect: '/'
                }
            ]
        }
    ]
})

export default router
