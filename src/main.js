import Vue from 'vue';
import App from './App.vue';
import Axios from "axios";
import VueRouter from 'vue-router'; 
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(VueRouter);

import routes from './router/routes';

Vue.prototype.$axios = Axios;

const router = new VueRouter({
  routes, 
  mode: 'history',
});

new Vue({
  render: (h) => h(App),
  router,
}).$mount('#app');