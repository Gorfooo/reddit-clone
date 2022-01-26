import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    termsModal: `
    <v-dialog v-model="$store.termsModal">
      <v-card>
        My Content
      </v-card>
    </v-dialog>
    `,
    dialog: false,
  },
  actions: {
    showTerms() {
      return this.state.termsModal;
    },
  },
});
