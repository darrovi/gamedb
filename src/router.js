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
import firebase from 'firebase'

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
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/register',
            name: 'register',
            component: Register
        },
        {
            path: '/games',
            name: 'games',
            component: Games,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/games/create',
            name: 'create-game',
            component: CreateGame,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/games/:id',
            name: 'game',
            component: Game,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/playing',
            name: 'playing',
            component: Playing,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/consoles',
            name: 'consoles',
            component: Consoles,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/consoles/create',
            name: 'console',
            component: CreateConsole,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/consoles/:id',
            name: 'create-console',
            component: Console,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/user',
            name: 'user',
            component: User,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '*',
            name: 'not-found',
            component: NotFound
        }
    ]
});

router.beforeEach((to, from, next) => {
    const currentUser = firebase.auth().currentUser;
    const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);

    console.log(currentUser);

    if (requiresAuth && !currentUser) {
        next('login')
    } else if (!requiresAuth && currentUser) {
        next('games')
    } else {
        next()
    }
});

export default router;
