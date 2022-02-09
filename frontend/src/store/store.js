import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    termsOfUse: false,
    politics: false,
    award: false,
    report: false,
    createCommunity: false,
    register: false,
    login: false,
    showChat: false,
    alreadyShared: false,
  },
});
