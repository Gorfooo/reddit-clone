import '@babel/polyfill';
import 'mutationobserver-shim';
import Vue from 'vue';
import { BootstrapVue } from 'bootstrap-vue';
import VueQuillEditor from 'vue-quill-editor';
import axios from 'axios';
import vueAxios from 'vue-axios';
import VueTheMask from 'vue-the-mask';
import Vuelidate from 'vuelidate';
import moment from 'moment';
import router from './router';
import App from './App';
import vuetify from './plugins/vuetify';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import store from './store';
import 'quill/dist/quill.snow.css';

Vue.use(VueTheMask);
Vue.use(moment);
Vue.use(Vuelidate);
Vue.use(VueQuillEditor);
Vue.use(BootstrapVue);
Vue.use(vueAxios, axios);

Vue.axios.defaults.baseURL = 'http://localhost:8000';

Vue.config.productionTip = false;

new Vue({
  store,
  vuetify,
  router,
  render: (h) => h(App),
}).$mount('#app');
