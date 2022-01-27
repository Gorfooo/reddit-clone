<template>
  <v-dialog v-model="$store.state.politics" width="600px">
    <template v-slot:activator="{ on }">
      <v-btn class="d-none" v-on="on" />
    </template>
    <v-card>
      <v-card-title>
        <span class="text-h5">Políticas de uso</span>
      </v-card-title>
      <v-card-text>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam
        delectus nobis ipsa aperiam laudantium maxime tempora sed doloribus
        suscipit quod. Dolores incidunt quos quam soluta! Eaque quo esse eum
        eligendi.
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="red" text @click="$store.state.politics = false">
          Rejeitar
        </v-btn>
        <v-btn color="green" text @click="$store.state.politics = false">
          Aceitar
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
