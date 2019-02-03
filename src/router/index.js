import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../components/Register'

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