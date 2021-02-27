import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'

Vue.config.productionTip = false

Vue.component('modal',
    () => import('./components/modal/modal.vue')
)


new Vue({
    vuetify,
    router,
    render: h => h(App)
}).$mount('#app')
