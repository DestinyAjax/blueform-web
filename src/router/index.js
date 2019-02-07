import Vue from 'vue'
import Router from 'vue-router'

import Home from '../pages/Home'
import WhyChooseUs from '../pages/WhyChooseUs'
import Careers from '../pages/Careers'
import Support from '../pages/Support'
import Contact from '../pages/Contact'
import PricingYearly from '../pages/PricingYearly'
import PricingMonthly from '../pages/PricingMonthly'
import Individual from '../pages/Individual';
import Businesses from '../pages/Businesses';
import NonProfit from '../pages/NonProfit';
import Agreement from '../pages/Agreement';
import Policy from '../pages/Policy';

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
    },
    {
      path: '/for-individuals',
      name: 'Individual',
      component: Individual
    },
    {
      path: '/for-non-profit',
      name: 'NonProfit',
      component: NonProfit
    },
    {
      path: '/for-businesses',
      name: 'Businesses',
      component: Businesses
    },
    {
      path: '/terms-of-agreement',
      name: 'Agreement',
      component: Agreement
    },
    {
      path: '/privacy-policy',
      name: 'Policy',
      component: Policy
    }
  ]
})

export default router
