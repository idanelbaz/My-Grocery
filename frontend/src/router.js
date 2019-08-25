import Vue from 'vue'
import Router from 'vue-router'
import homepage from './views/homepage.vue'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'home',
        component: homepage
    }, ]
})