import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../components/Register'
import WhyChooseUs from '../pages/WhyChooseUs'
import Careers from '../pages/Careers'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/why-choose-us',
      name: 'WhyChooseUs',
      component: WhyChooseUs
    },
    {
      path: '/careers',
      name: 'Careers',
      component: Careers
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    }
  ]
})

export default router
