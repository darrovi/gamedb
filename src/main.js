import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './stores/store'
import i18n from './i18n'

// noinspection ES6UnusedImports
// eslint-disable-next-line no-unused-vars
import firebaseApp from './firebase/init'

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    i18n,
    render: function (h) {
        return h(App)
    }
}).$mount('#app');
