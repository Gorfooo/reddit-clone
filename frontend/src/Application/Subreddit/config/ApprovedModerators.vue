<template>
  <div class="container mt-15">
    <h5 class="font-weight-bold">Moderadores da comunidade</h5>
    <Navbar />
    <v-list nav dense>
      <v-list-item
        v-for="(moderator, i) in moderators"
        :key="i"
        class="borderBottom"
      >
        <v-list-item-icon class="mr-2">
          <p>{{ i + 1 }}</p>
          <img src="../../../assets/avatar.png" class="profile-pic ml-2" />
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title v-text="moderator"></v-list-item-title>
        </v-list-item-content>
        <v-dialog v-model="kickMod" width="500px">
          <template v-slot:activator="{ on }">
            <v-btn class="text-white" v-on="on" rounded color="red" x-small>
              Expulsar
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5 flex-grow-1">Expulsar moderador</span>
              <v-icon @click="kickMod = false">mdi-close</v-icon>
            </v-card-title>
            <v-card-text>
              <span class="text-muted"
                >Caso desejar, descreva o motivo da expulsão.</span
              >
              <v-textarea solo class="mt-5"></v-textarea>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="red"
                class="text-white"
                text
                @click="kickMod = false"
              >
                EXPULSAR
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
      kickMod: false,
      moderators: ['user 1', 'user 2'],
    };
  },
};
</script>

<style>
</style>
