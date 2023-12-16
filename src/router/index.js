import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FriendsView from '../views/FriendsView.vue'
import GiftsView from '../views/GiftsView.vue'
import DividerView from '../views/DividerView.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
    },
    {
        path: '/friend',
        name: 'friend',
        component: FriendsView,
    },
    {
        path: '/gift',
        name: 'gift',
        component: GiftsView,
    },
    {
        path: '/dividerView',
        name: 'dividerView',
        component: DividerView,
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router
