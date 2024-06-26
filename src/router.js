import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './pages/HomePage.vue';
import Piattaforme from './pages/Piattaforme.vue';
import Genere from './pages/Genere.vue';
import DettagliGioco from './pages/DettagliGioco.vue';
import Details from './pages/Details.vue';
import Store from './pages/Store.vue';
import Developers from './pages/Developers.vue';
import Houses from './pages/Houses.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/genere',
            name: 'genere',
            component: Genere
        },
        {
            path: '/piattaforme',
            name: 'piattaforme',
            component: Piattaforme
        },
        {
            path: '/dettagli/:id', 
            name: 'dettagli',
            component: DettagliGioco
        },
        {
            path: '/details/:id', 
            name: 'details',
            component: Details
        },
        {
            path: '/store', 
            name: 'store',
            component: Store
        },
        {
            path: '/developers', 
            name: 'developers',
            component: Developers
        },
        {
            path: '/houses/:id', 
            name: 'houses',
            component: Houses
        },
    ]
});

export { router };
