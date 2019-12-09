import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home/Home.vue'
import Active from '../views/QLTK/Active.vue'
Vue.use(VueRouter)
const routes = [
    // {
    //     path: '/',
    //     name: 'home',
    //     component: Home
    // },
    {
        path: '/active',
        name: 'active',
        component: Active
    },
]
const router = new VueRouter({
    mode: 'history',
    routes
})
export default router
