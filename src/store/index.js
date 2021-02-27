import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

import state from "./state"
import * as getters from "./getters"
import * as mutations from "./mutations"
import * as actions from "./actions"

import users from "@/views/Users/store"

Vue.use(Vuex)

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    modules: {
        users,
    },
    plugins: [createPersistedState({
        paths: ['users']
    })],
})