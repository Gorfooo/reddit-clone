<template>
  <!-- sistema chat -->
  <!-- sistema notificação quando curtir, comentar, página que sigo postar, mensagem -->
  <!-- sistema achievments -->
  <!-- 1 prêmio por dia que logar -->
  <!-- awards received -> ver lista de pessoas que deram award -->
  <v-app>
    <!-- <Home /> -->
    <!-- <ProfileOverview /> -->
    <!-- <Posts /> -->
    <!-- <Comments /> -->
    <!-- <Stored /> -->
    <!-- <Hidden /> -->
    <!-- <LikedPosts /> -->
    <!-- <DislikedPosts /> -->
    <!-- <NothingHere /> -->
    <!-- <AwardsGiven /> -->
    <!-- <AwardsReceived /> -->
    <OpenedPost />
    <Toolbar />
    <ToolbarCollapsed />
    <!-- <router-view /> -->
  </v-app>
</template>

<script>
// import $ from 'jquery';
import Toolbar from './components/Toolbar';
import ToolbarCollapsed from './components/ToolbarCollapsed';
// import Home from './components/home/Home';
// import ProfileOverview from './components/profile/Overview';
// import Posts from './components/profile/Posts';
// import Comments from './components/profile/Comments';
// import Stored from './components/profile/Stored';
// import Hidden from './components/profile/Hidden';
// import LikedPosts from './components/profile/LikedPosts';
// import DislikedPosts from './components/profile/DislikedPosts';
// import NothingHere from './components/profile/NothingHere';
// import AwardsGiven from './components/profile/AwardsGiven';
// import AwardsReceived from './components/profile/AwardsReceived';
import OpenedPost from './components/OpenedPost';

export default {
  name: 'App',
  components: {
    Toolbar,
    ToolbarCollapsed,
    // Home,
    // ProfileOverview,
    // Posts,
    // Comments,
    // Stored,
    // Hidden,
    // LikedPosts,
    // DislikedPosts,
    // NothingHere,
    // AwardsGiven,
    // AwardsReceived,
    OpenedPost,
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
