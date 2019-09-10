import Vue from 'vue'
import Router from 'vue-router'
import homepage from './views/homepage.vue'
import itemDetails from './views/itemDetails.vue'
import shopItemsList from './views/shopItemsList.vue'

Vue.use(Router)

export default new Router({
    routes: [
        { path: '/', component: homepage},
        { path:'/Item/:id' , component: itemDetails},
        { path:'/Items/:genre' , component: shopItemsList},
        { path:'/Items/search/:filterBy' , component: shopItemsList},
        { path:'/Items' , component: shopItemsList},
 ]
})