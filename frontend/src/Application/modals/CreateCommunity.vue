<template>
  <v-dialog
    v-model="$store.state.modalStore.createCommunity"
    width="600px"
    :retain-focus="false"
  >
    <template v-slot:activator="{ on }">
      <v-btn class="d-none" v-on="on" />
    </template>
    <v-card>
      <v-card-title>
        <span class="text-h5">Criar uma comunidade</span>
      </v-card-title>
      <v-divider></v-divider>
      <span class="text-h6 ml-6">Nome</span>
      <v-card-text>
        <p>
          Nomes de comunidade não podem ser alterados, inclusive quanto ao uso
          de letras maiúsculas.
        </p>
      </v-card-text>
      <v-text-field
        outlined
        :rules="rules"
        class="mx-6"
        dense
        value="r/"
      ></v-text-field>
      <span class="text-h6 ml-6">Tipo da comunidade</span>
      <v-radio-group v-model="communityType" class="ml-6">
        <div class="d-flex align-items-center">
          <v-radio label="Pública" :value="1"></v-radio>
          <small class="ml-4 mb-4 text-muted"
            >Qualquer pessoa pode ver, postar e comentar nesta
            comunidade.</small
          >
        </div>
        <div class="d-flex align-items-center">
          <v-radio label="Acesso restrito" :value="2"></v-radio>
          <small class="ml-4 mb-4 text-muted"
            >Qualquer pessoa pode visualizar esta comunidade, mas apenas
            usuários aprovados podem postar.</small
          >
        </div>
      </v-radio-group>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          @click="toggleCreateCommunity()"
          color="primary"
          outlined
          rounded
        >
          Cancelar
        </v-btn>
        <v-btn @click="toggleCreateCommunity()" color="primary" rounded>
          Criar comunidade
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      rules: [
        (value) =>
          (value && value.length >= 3) ||
          'Nome deve ter pelo menos 5 caracteres (incluindo o "r/")',
      ],
      communityType: 1,
    };
  },
  methods: {
    toggleCreateCommunity() {
      this.$store.commit('modalStore/toggleCreateCommunity');
    },
  },
};
</script>

<style>
.v-input--selection-controls__input {
  margin-bottom: 0.6rem;
}
</style>
