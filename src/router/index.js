// 路由器对象模块
import Vue from 'vue';
import Router from 'vue-router';
import Msite from "../pages/Msite/Msite";
import Search from "../pages/Search/Search";
import Order from "../pages/Order/Order";
import Profile from "../pages/Profile/Profile";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/msite',
      component:Msite
    },
    {
      path:'/search',
      component:Search
    },
    {
      path:'/order',
      component:Order
    },
    {
      path:'/profile',
      component:Profile
    },
    {
      path: '/',
      name: 'Msite',
      component: Msite
    }
  ]
})
