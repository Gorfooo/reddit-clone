<template>
  <div class="container mt-15">
    <h5 class="font-weight-bold">Regras da comunidade</h5>
    <Navbar />
    <v-list nav dense>
      <v-list-item v-for="(rule, i) in rules" :key="i" class="borderBottom">
        <v-list-item-icon class="mr-2">
          <p>{{ i + 1 }}</p>
          <img src="../../../assets/avatar.png" class="profile-pic ml-2" />
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title v-text="rule"></v-list-item-title>
        </v-list-item-content>
        <v-dialog v-model="removeRule" width="500px">
          <template v-slot:activator="{ on }">
            <v-btn class="text-white" v-on="on" rounded color="red" x-small>
              Remover
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5 flex-grow-1">Remover regra</span>
              <v-icon @click="removeRule = false">mdi-close</v-icon>
            </v-card-title>
            <v-card-text>
              <span class="text-muted">Deseja mesmo remover essa regra?</span>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="red"
                class="text-white"
                text
                @click="removeRule = false"
              >
                REMOVER
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
import Navbar from './Navbar';

export default {
  components: {
    Navbar,
  },
  data() {
    return {
      removeRule: false,
      rules: ['rule 1', 'rule 2'],
    };
  },
};
</script>

<style>
</style>
