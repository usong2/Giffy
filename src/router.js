import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './pages/Home.vue'
import SignUp from './pages/SignUp.vue'
import MyPage from './pages/MyPage.vue'
import Modify from './pages/Modify.vue'
import Travel from './pages/Travel.vue'
import ApiGuide from './pages/ApiGuide.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: Home },
        { path: '/SignUp', component: SignUp },
        { path: '/MyPage', component: MyPage },
        { path: '/Modify', component: Modify },
        { path: '/Travel', component: Travel },
        { path: '/ApiGuide', component: ApiGuide },
    ]
})

export default router