<template>
  <v-dialog
    v-model="$store.state.modalStore.allModerators"
    width="600px"
    :retain-focus="false"
  >
    <template v-slot:activator="{ on }">
      <v-btn class="d-none" v-on="on" />
    </template>
    <v-card>
      <v-card-title>
        <span class="text-h5 flex-grow-1">Moderadores</span>
        <v-icon @click="toggleAllModerators()">mdi-close</v-icon>
      </v-card-title>
      <v-card-text>
        <v-list nav dense>
          <v-list-item
            v-for="(mod, i) in moderators"
            :key="i"
            class="borderBottom"
          >
            <v-list-item-icon class="mr-2">
              <p>{{ i + 1 }}</p>
              <img src="../../assets/avatar.png" class="profile-pic ml-2" />
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title v-text="mod.name"></v-list-item-title>
            </v-list-item-content>
            <v-dialog v-model="removeMod" width="500px" :retain-focus="false">
              <template v-slot:activator="{ on }">
                <v-btn
                  v-on="on"
                  rounded
                  color="red"
                  class="text-white mr-2"
                  x-small
                >
                  Remover
                </v-btn>
              </template>
              <v-card>
                <v-card-title>
                  <span class="text-h5 flex-grow-1">Remover Moderador</span>
                  <v-icon @click="removeMod = false">mdi-close</v-icon>
                </v-card-title>
                <v-card-text>
                  <span class="text-muted"
                    >Deseja mesmo remover este moderador?</span
                  >
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="red" text @click="removeMod = false">
                    Cancelar
                  </v-btn>
                  <v-btn color="green" text @click="removeMod = false">
                    Confirmar
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-list-item>
        </v-list>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      removeMod: false,
      moderators: [
        {
          name: 'Gorfo',
        },
        {
          name: 'Gorfoooo',
        },
      ],
    };
  },
  methods: {
    toggleAllModerators() {
      this.$store.commit('modalStore/toggleAllModerators');
    },
  },
};
</script>

<style>
</style>
