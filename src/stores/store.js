import Vuex from 'vuex'
import Vue from 'vue'
import loadingModule from './loading.module'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        loading: loadingModule
    }
})
