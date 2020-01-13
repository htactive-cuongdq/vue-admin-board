import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'
// import Active from '../views/QLTK/Active.vue'
import Active from '../views/dashboard/users/UsersActive.vue'
import Block from '../views/dashboard/users/UsersBlock.vue'

// import Block from '../views/QLTK/Block.vue'
import ManageAcc from '../views/QLTK/ManageAcc.vue'
import QLLuong from '../views/dashboard/salarys/Salarys.vue'
import TtsinhActive from '../views/dashboard/interns/InternActive.vue'
import TtsinhBlock from '../views/dashboard/interns/InternBlock.vue'


import Signup from '../views/Security/Signup.vue'
import Signin from '../views/Security/Signin.vue'


Vue.use(VueRouter)
const routes = [{
        path: '/',
        name: 'Signin',
        component: Signin
    },
    {
        path: '/signup',
        name: 'Signup',
        component: Signup
    },
    {
        path: '/home',
        name: 'home',
        component: Home,
        children: [{
                path: '/active',
                name: 'active',
                component: Active,
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
            {
                path: '/qlluong',
                name: 'qlluong',
                component: QLLuong
            },
            {
                path: '/TtsinhActive',
                name: 'TtsinhActive',
                component: TtsinhActive
            },
            {
                path: '/TtsinhBlock',
                name: 'TtsinhBlock',
                component: TtsinhBlock
            },


        ]
    },

]
const router = new VueRouter({
    mode: 'history',
    routes
})
export default router