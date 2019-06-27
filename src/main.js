import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// noinspection ES6UnusedImports
import firebaseApp from './firebase/init'

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: function (h) {
        return h(App)
    }
}).$mount('#app')
