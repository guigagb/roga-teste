import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import Notifications from 'vue-notification'
import Vuelidate from 'vuelidate'
import VueMask from 'v-mask'
import store from './store'

Vue.config.productionTip = false

Vue.component('modal',
    () => import('./components/modal/modal.vue')
)

Vue.use(Notifications)
Vue.use(Vuelidate)
Vue.use(VueMask);

new Vue({
    store,
    vuetify,
    router,
    render: h => h(App)
}).$mount('#app')
