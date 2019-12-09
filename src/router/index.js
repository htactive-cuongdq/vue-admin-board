import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home/Home.vue'
import Active from '../views/QLTK/Active.vue'
import Block from '../views/QLTK/Block.vue'
import ManageAcc from '../views/QLTK/ManageAcc.vue'


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
    {
        path: '/block',
        name: 'block',
        component: Block
    },
    {
        path: '/manageacc',
        name: 'manageacc',
        component: ManageAcc
    },
]
const router = new VueRouter({
    mode: 'history',
    routes
})
export default router