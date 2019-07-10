import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/auth/Login.vue'
import Register from './views/auth/Register.vue'
import NotFound from './views/NotFound.vue'
import Games from './views/games/Games.vue'
import Game from './views/games/Game.vue'
import CreateGame from './views/games/CreateGame.vue'
import Playing from './views/Playing.vue'
import User from './views/User.vue'
import Consoles from './views/consoles/Consoles.vue'
import Console from './views/consoles/Console.vue'
import CreateConsole from './views/consoles/CreateConsole.vue'

Vue.use(Router);

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            redirect: 'login'
        },
        {
            path: '/games',
            name: 'games',
            component: Games
        },
        {
            path: '/games/create',
            name: 'create-game',
            component: CreateGame
        },
        {
            path: '/games/:id',
            name: 'game',
            component: Game
        },
        {
            path: '/playing',
            name: 'playing',
            component: Playing
        },
        {
            path: '/consoles',
            name: 'consoles',
            component: Consoles
        },
        {
            path: '/consoles/create',
            name: 'console',
            component: CreateConsole
        },
        {
            path: '/consoles/:id',
            name: 'create-console',
            component: Console
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/user',
            name: 'user',
            component: User
        },
        {
            path: '/register',
            name: 'register',
            component: Register
        },
        {
            path: '*',
            name: 'not-found',
            component: NotFound
        }
    ]
});

export default router;
