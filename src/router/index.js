import Vue from 'vue'
import Router from 'vue-router'

import Home from '../pages/Home'
import WhyChooseUs from '../pages/WhyChooseUs'
import Careers from '../pages/Careers'
import Support from '../pages/Support'
import Contact from '../pages/Contact'
import PricingYearly from '../pages/PricingYearly'
import PricingMonthly from '../pages/PricingMonthly'

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
      path: '/contact-us',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/general-support',
      name: 'Support',
      component: Support
    },
    {
      path: '/pricing-yearly',
      name: 'PricingYearly',
      component: PricingYearly
    },
    {
      path: '/pricing-monthly',
      name: 'PricingMonthly',
      component: PricingMonthly
    }
  ]
})

export default router
