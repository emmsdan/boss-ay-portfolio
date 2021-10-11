import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@view/Home'
import NotFoundPage from '@view/404'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/resume',
    name: 'About EmmsDan',
    component: () => import(/* webpackChunkName: "resume" */ '@view/Resume')
  },
  {
    path: '/experiment',
    name: 'Experiments',
    alias: ['/lab', '/experiments', '/hidden'],
    component: () =>
      import(/* webpackChunkName: "experiment" */ '@view/Experiment')
  },
  {
    path: '/login',
    name: 'Login Authentication Page',
    alias: ['/login', '/sign-in', '/access', '/dashboard'],
    component: () => import(/* webpackChunkName: "experiment" */ '@view/Login')
  },
  {
    path: '*',
    name: 'NotFoundPage',
    component: NotFoundPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
