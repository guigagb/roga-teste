import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

const vuetify = new Vuetify({
    theme: {
        themes: {
            light: {
                primary: "#ff6450",
                secondary: "#2b1292"
            },
        },
    },
})

export default vuetify
