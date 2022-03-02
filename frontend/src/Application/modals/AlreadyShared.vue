<template>
  <v-dialog
    v-model="$store.state.modalStore.alreadyShared"
    width="400px"
    :retain-focus="false"
  >
    <template v-slot:activator="{ on }">
      <v-btn class="d-none" v-on="on" />
    </template>
    <v-card>
      <v-card-title>
        <span class="text-h5">Aviso</span>
      </v-card-title>
      <v-card-text> Esse post já foi compartilhado aqui! </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text @click="toggleAlreadyShared()"> OK </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  methods: {
    toggleAlreadyShared() {
      this.$store.commit('modalStore/toggleAlreadyShared');
    },
  },
};
</script>
