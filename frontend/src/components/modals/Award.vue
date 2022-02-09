<template>
  <v-dialog v-model="$store.state.award" width="600px">
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
        <v-btn color="red" text @click="$store.state.award = false">
          Cancelar
        </v-btn>
        <v-btn
          color="green"
          text
          @click="
            $store.state.award = false;
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
};
</script>
