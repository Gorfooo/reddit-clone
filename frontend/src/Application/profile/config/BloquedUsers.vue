<template>
  <div class="container mt-15">
    <h5 class="font-weight-bold">Usuários bloqueados</h5>
    <Navbar />
    <v-list nav dense>
      <v-list-item v-for="(item, i) in items" :key="i" class="borderBottom">
        <v-list-item-icon class="mr-2">
          <p>{{ i + 1 }}</p>
          <img src="../../../assets/avatar.png" class="profile-pic ml-2" />
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title v-text="item.text"></v-list-item-title>
        </v-list-item-content>
        <v-btn rounded color="warning" x-small> Desbloquear </v-btn>
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
      items: [
        { text: 'user 1' },
        { text: 'user 2' },
        { text: 'user 3' },
        { text: 'user 4' },
        { text: 'user 5' },
      ],
    };
  },
};
</script>

<style>
</style>
