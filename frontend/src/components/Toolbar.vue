<template>
  <v-app-bar dense elevation="4">

    <v-toolbar-title>
      <img alt="Reddit logo" src="../assets/reddit-logo.png">
    </v-toolbar-title>

    <div class="dropdown">
      <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown"
      aria-haspopup="true" aria-expande  d="false">
      <v-icon>home</v-icon>
      <span id="menuButtonLabel">Início</span>
      </button>
        <div class="dropdown-menu pre-scrollable" aria-labelledby="dropdownMenuButton">
          <a class="dropdown-item" href="#">Foo</a>
          <a class="dropdown-item" href="#">Thing</a>
          <a class="dropdown-item" href="#">Something</a>
          <a class="dropdown-item" href="#">Dudes</a>
          <a class="dropdown-item" href="#">Birds</a>
          <a class="dropdown-item" href="#">Nikes</a>
          <a class="dropdown-item" href="#">Marsh mellows</a>
          <a class="dropdown-item" href="#">Apples</a>
          <a class="dropdown-item" href="#">Dingles</a>
          <a class="dropdown-item" href="#">Berries</a>
          <a class="dropdown-item" href="#">What not</a>
          <a class="dropdown-item" href="#">Something else here</a>
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
    </div>

    <v-text-field
      label="Pesquisar no Reddit"
      outlined
      dense
      class='mt-4'
    ></v-text-field>

    <v-icon class='p-2'>mdi-arrow-top-right-thin-circle-outline</v-icon>
    <v-icon class='p-2'>mdi-chart-box-outline</v-icon>
    <v-icon class='p-2' style='border-right:solid 1px;'>mdi-cctv</v-icon>
    <v-icon class='p-2'>mdi-chat-processing-outline</v-icon>
    <v-icon class='p-2'>mdi-bell</v-icon>
    <v-icon class='p-2'>mdi-plus</v-icon>

  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {

    };
  },
};
</script>

<style>
  img{
    width: 9rem;
  }
  v-app-bar{
    position:fixed;
    width:100%
  }
  #menuButtonLabel{
    padding-right: 10vw;
  }
  @media only screen and (max-width: 759px){
    img{
      width: 2.5rem;
      margin-right:5rem;
      content:url("../assets/reddit-logo-mini.png")
    }
  }
</style>
