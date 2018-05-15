import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Head from '@/components/head'
import One from '@/components/router/one'
import Two from '@/components/router/two'
import Three from '@/components/router/three'
import Four from '@/components/router/four'
import Shop from '@/components/router/shop'
import Hot from '@/components/router/hot'
import Discount from '@/components/router/discount'
import Drink from '@/components/router/drink'
import TestClick from '@/components/router/testclick'
import Home from '@/components/compont/home'
import City from '@/components/compont/city'
import FoodType from '@/components/foot_type'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Head',
      component: HelloWorld
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/city/:cityid',
      component: City
    },
    {
      path: '/food_type/:foodid',
      component: FoodType
    },
    {
      path: '/one',
      name: 'One',
      component: One
    },
    {
      path: '/two',
      name: 'Two',
      component: Two
    },
    {
      path: '/three',
      name: 'Three',
      component: Three
    },
    {
      path: '/four',
      name: 'Four',
      component: Four
    },
    {
      path: '/shop',
      name: 'shop',
      component: Shop,
      children:[
        {
          path:'/hot',
          component:Hot
        },
        {
          path:'/discount',
          component:Discount
        },
        {
          path:'/drink',
          component:Drink
        },
        {
          path:'/testclick',
          component:TestClick
        }
        
      ]
    }
  ]
})
