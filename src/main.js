import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router'; 
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.config.productionTip = false;

// BootstrapVue
Vue.use(BootstrapVue);

// Router
Vue.use(VueRouter);

// Importação das rotas
import routes from './router/routes';

const router = new VueRouter({
  routes, // rotas aqui
  mode: 'history', //  histórico para URLs sem #
});

new Vue({
  render: (h) => h(App),
  router, // Adicionado o router ao Vue
}).$mount('#app');