<template>
  <!-- 1 karma por dia que logar -->
  <!--
      captcha e logar com google
      ao clicar na toolbar collapsed ou pressionar enter na busca, fechar ela
      encapsular cards?
      openedPost em todos
  -->
  <!-- mixin pra upload de imagens sidebar profile e configuration? -->
  <v-app>
    <router-view />
    <!-- <NothingHere /> -->
    <!-- <OpenedPost /> -->
    <!-- <Share /> -->
    <!-- <SubReddit /> -->
    <Toolbar />
    <ToolbarCollapsed />
    <div v-if="$store.state.showChat == true">
      <Chat />
    </div>
  </v-app>
</template>

<script>
// import $ from 'jquery';
import Toolbar from './components/Toolbar/Toolbar';
import ToolbarCollapsed from './components/Toolbar/ToolbarCollapsed';
import Chat from './components/Chat';
// import NothingHere from './components/profile/NothingHere';
// import OpenedPost from './components/OpenedPost';
// import Share from './components/modals/Share';
// import SubReddit from './components/Subreddit/SubReddit';

export default {
  name: 'App',
  components: {
    Toolbar,
    ToolbarCollapsed,
    Chat,
    // NothingHere,
    // OpenedPost,
    // Share,
    // SubReddit,
  },
  // mounted() {
  //   $('.likeButton').on('click', () => {
  //     console.log($(this));
  //     $('.likeButton').css('color', '#91c483');
  //   });
  //   $('.dislikeButton').on('click', () => {
  //     $('.dislikeButton').css('color', '#ff6464');
  //   });
  // },
};
</script>

<style>
body {
  background-color: #dae0e6 !important;
}

.defaultBackground {
  background-color: #dae0e6 !important;
}

.cards {
  min-width: 55vw;
  max-width: 55vw;
}

.graySideColumn {
  background-color: #f8f9fa;
}

.managePostScreen {
  width: 2rem;
}

.likeButton:hover {
  color: #91c483;
}

.dislikeButton:hover {
  color: #ff6464;
}

.defaultHover:hover {
  border-radius: 0.5rem;
  background-color: #dae0e6;
}

.linkHover:hover {
  text-decoration: underline black !important;
}

.guardarSmall {
  display: none;
}

.profile-pic {
  width: 1.5rem;
  height: 1.5rem;
}

.mediumPicture {
  width: 3rem;
  height: 3rem;
}

.theme--light.v-list {
  background: white !important;
}

.v-list-item__title {
  color: black;
}

@media only screen and (max-width: 500px) {
  .guardarLarge {
    display: none;
  }
  .guardarSmall {
    display: inline !important;
  }
  .bgLight {
    display: none !important;
  }
}

@media only screen and (max-width: 599px) {
  .postSender {
    display: none;
  }
}
</style>
