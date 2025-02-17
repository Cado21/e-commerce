import Vue from "vue";
import App from "./App.vue";
import router from "./router";


import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// import Buefy from 'buefy'
// import 'buefy/dist/buefy.css'

import store from './store'

Vue.use(BootstrapVue);
// Vue.use(Buefy)
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
