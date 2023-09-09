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

// Importando as rotas
import routes from './router/routes';

const router = new VueRouter({
  routes, // Passando suas rotas aqui
  mode: 'history', // Use o modo de histórico para URLs sem #
});

new Vue({
  render: (h) => h(App),
  router, // Adicione o router ao Vue
}).$mount('#app');