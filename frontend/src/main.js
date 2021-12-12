import Vue from 'vue';
import { BootstrapVue } from 'bootstrap-vue';
import router from 'vue-router';
import App from './App';
import vuetify from './plugins/vuetify';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';

Vue.use(BootstrapVue);

Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  render: (h) => h(App),
}).$mount('#app');
