import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './pages/Home.vue'
import SignUp from './pages/SignUp.vue'
import MyPage from './pages/MyPage.vue'
import Modify from './pages/Modify.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: Home },
        { path: '/SignUp', component: SignUp },
        { path: '/MyPage', component: MyPage },
        { path: '/Modify', component: Modify },
    ]
})

export default router