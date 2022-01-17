<template>
  <v-app>
    <toolbar />
    <router-view />
  </v-app>
</template>

<script>
import Toolbar from './components/Toolbar';

export default {
  name: 'App',
  components: {
    Toolbar,
  },
};
</script>

<style>
header {
  background-color: #dae0e6 !important;
}
</style>
