import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './config/elementUI_config';
import animate from 'animate.css';
import i18n from './config/i18n_config.js';
import VueCookies from 'vue-cookies';
Vue.config.productionTip = false;
Vue.use(VueCookies);
Vue.use(animate);
new Vue({
  i18n,
  router,
  render: h => h(App),
}).$mount('#app');
