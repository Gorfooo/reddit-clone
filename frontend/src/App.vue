<template>
  <v-app>
    <!-- <home /> -->
    <profileHome />
    <toolbar />
    <toolbar-collapsed />
    <router-view />
  </v-app>
</template>

<script>
import Toolbar from './components/Toolbar';
import toolbarCollapsed from './components/ToolbarCollapsed';
// import home from './components/home/Home';
import profileHome from './components/profile/Home';

export default {
  name: 'App',
  components: {
    Toolbar,
    toolbarCollapsed,
    // home,
    profileHome,
  },
};
</script>

<style>
</style>
