import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/Authentication'
import users from './modules/Users'
import salarys from './modules/Salarys'
import intern from './modules/Intern'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {

    },
    getters: {

    },
    mutations: {

    },
    actions: {

    },
    modules: {
        auth,
        users,
        salarys,
        intern
    }
})