import { createRouter, createWebHashHistory } from 'vue-router';
import App from './App.vue';

const routes = [
    {
        path: '/',
        name: 'app',
        component: App,
        children: [
            {
                path: '/',
                name: 'Dashboard',
                component: () => import('./components/Dashboard.vue')
            },
            {
                path: '/ApiKeyInsert',
                name: 'ApiKeyInsert',
                component: () => import('./components/ApiKeyInsert.vue')
            },
            {
                path: '/FileAndTable',
                name: 'FileAndTable',
                component: () => import('./components/FileAndTable.vue')
            }
        ]
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
