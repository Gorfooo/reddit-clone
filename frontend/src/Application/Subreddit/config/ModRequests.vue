<template>
  <div class="container mt-15">
    <h5 class="font-weight-bold">Solicitações de moderação</h5>
    <Navbar />
    <v-list nav dense>
      <v-list-item
        v-for="(request, i) in moderationRequests"
        :key="i"
        class="borderBottom"
      >
        <v-list-item-icon class="mr-2">
          <p>{{ i + 1 }}</p>
          <img src="../../../assets/avatar.png" class="profile-pic ml-2" />
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title v-text="request.name"></v-list-item-title>
          <v-list-item-title v-text="request.solicitation"></v-list-item-title>
        </v-list-item-content>
        <v-dialog v-model="refuseRequest" width="500px">
          <template v-slot:activator="{ on }">
            <v-btn
              v-on="on"
              rounded
              color="red"
              class="text-white mr-2"
              x-small
            >
              Recusar
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5 flex-grow-1">Recusando pedido</span>
              <v-icon @click="refuseRequest = false">mdi-close</v-icon>
            </v-card-title>
            <v-card-text>
              <span class="text-muted"
                >Caso desejar, descreva o motivo da recusa do pedido
                abaixo.</span
              >
              <v-textarea solo class="mt-5"></v-textarea>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="red"
                class="text-white"
                text
                @click="refuseRequest = false"
              >
                Recusar
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

        <v-btn rounded color="success" x-small> Aceitar </v-btn>
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
      refuseRequest: false,
      moderationRequests: [
        {
          name: 'Gorfo',
          solicitation: 'quero entrar :)',
        },
        {
          name: 'Gorfoooo',
          solicitation: 'quero entrar :)',
        },
      ],
    };
  },
};
</script>

<style>
</style>
