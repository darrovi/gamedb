import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        loading: false
    },
    mutations: {
        startLoading(state) {
            state.loading = true;
            return true
        },
        stopLoading(state) {
            state.loading = false;
            return false
        }
    }
})
