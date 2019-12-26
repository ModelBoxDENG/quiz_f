import Vue from 'vue'
import Router from 'vue-router'
import SimpleChoice  from '@/components/SimpleChoice'
import MultipleChoice from '@/components/MultipleChoice'
import Login from '@/components/Login'

Vue.use(Router)
/*{
      path: '/',
      name: 'SimpleChoice',
      component: SimpleChoice
    },*/





export default new Router({
  routes: [

    {
      path: '/quiz',
      name: 'SimpleChoice',
      component: SimpleChoice
    },

    {
      path: '/',
      name: 'Login',
      component: Login
    },

    {
      path: '/login',
      name: 'Login',
      component: Login
    },
  ]
})
