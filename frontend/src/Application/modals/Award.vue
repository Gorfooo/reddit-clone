<template>
  <v-dialog
    v-model="$store.state.modalStore.award"
    width="600px"
    :retain-focus="false"
  >
    <template v-slot:activator="{ on }">
      <v-btn class="d-none" v-on="on" />
    </template>
    <v-card>
      <v-card-title>
        <span class="text-h5">Confirmação de premiação</span>
      </v-card-title>
      <v-card-text>
        Essa ação irá gastar 1 karma, deseja mesmo prosseguir?
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="red" text @click="toggleAward()"> Cancelar </v-btn>
        <v-btn
          color="green"
          text
          @click="
            toggleAward();
            premiar();
          "
        >
          OK
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import Mixins from '../../mixins';

export default {
  mixins: [Mixins],
  methods: {
    toggleAward() {
      this.$store.commit('modalStore/toggleAward');
    },
  },
};
</script>
