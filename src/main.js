import Vue from 'vue'
import router from './router'
import store from './store'
import VueAxios from 'vue-axios'
import axios from 'axios'
// import BootstrapVue from 'bootstrap-vue'
import App from './App'

import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.use(Buefy)

Vue.prototype.$http = axios

// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

Vue.use(VueAxios, axios)
// Vue.use(BootstrapVue)

/* eslint-disable no-new */
new Vue({
  // el: '#app',
  router,
  store,
  render: h => h(App)
}).$mount('#app')
