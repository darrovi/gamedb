import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './stores/store'
import loadingStore from './stores/loading-store'
import i18n from './i18n'

// noinspection ES6UnusedImports
import firebaseApp from './firebase/init'

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    loadingStore,
    i18n,
    render: function (h) {
        return h(App)
    }
}).$mount('#app')
