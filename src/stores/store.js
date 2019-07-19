import Vuex from 'vuex'
import Vue from 'vue'
import authModule from './auth.module'
import loadingModule from './loading.module'
import gamesModule from './games.module'
import friendsModule from './friends.module'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        auth: authModule,
        loading: loadingModule,
        games: gamesModule,
        friends: friendsModule
    }
})
