import Vue from 'vue';
import Router from 'vue-router';

const ToolbarCollapsed = () => import('./components/ToolbarCollapsed');

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/toolbarCollapsed', name: 'toolbarCollapsed', component: ToolbarCollapsed },
  ],
});
