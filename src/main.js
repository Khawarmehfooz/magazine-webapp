import { createApp } from 'vue'
import './style.css'
import '../src/assets/font.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Podcasts from './views/Podcasts.vue'
import Books from './views/Books.vue'
import Blog from './views/Blog.vue'

const router = createRouter( {
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/about',
            name: 'About',
            component: About
        },
        {
            path: '/podcasts',
            name: 'Podcasts',
            component: Podcasts
        },
        {
            path: '/books',
            name: 'Books',
            component: Books
        },
        {
            path: '/blog',
            name: 'Blog',
            component: Blog
        }
    ]
})
createApp(App)
    .use(router)
    .mount('#app')
