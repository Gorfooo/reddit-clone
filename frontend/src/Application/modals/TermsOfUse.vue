<template>
  <v-dialog
    v-model="$store.state.modalStore.termsOfUse"
    width="600px"
    :retain-focus="false"
  >
    <template v-slot:activator="{ on }">
      <v-btn class="d-none" v-on="on" />
    </template>
    <v-card>
      <v-card-title>
        <span class="text-h5 flex-grow-1">Termos de uso</span>
        <v-icon @click="toggleTermsOfUse()">mdi-close</v-icon>
      </v-card-title>
      <v-card-text>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam
        delectus nobis ipsa aperiam laudantium maxime tempora sed doloribus
        suscipit quod. Dolores incidunt quos quam soluta! Eaque quo esse eum
        eligendi.
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  methods: {
    toggleTermsOfUse() {
      this.$store.commit('modalStore/toggleTermsOfUse');
    },
  },
};
</script>
