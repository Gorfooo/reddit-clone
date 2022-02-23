<template>
  <div>
    <div id="generalHeader">
      <div class="position-relative">
        <img src="../../assets/subreddit-banner.png" class="subredditBanner" />
        <img
          src="../../assets/tattoo.png"
          class="subredditPicture ml-10 position-absolute"
        />
        <div
          class="container pb-12 position-absolute"
          id="generalHeaderContent"
        >
          <div class="d-flex communityHeader">
            <h4 class="font-weight-bold mr-6">r/Runescape</h4>
            <!-- <v-btn outlined color="black" rounded>Membro</v-btn> -->
            <v-btn outlined color="primary" rounded>Seguir</v-btn>
            <router-link to="/subreddit/configuration/community">
              <v-icon class="ml-6 mt-1">mdi-cog-outline</v-icon>
            </router-link>
            <button data-toggle="dropdown" class="ml-6 mb-1">
              <v-icon>mdi-dots-horizontal</v-icon>
            </button>
            <ul class="dropdown-menu pl-0 managePostScreen">
              <li>
                <v-dialog v-model="$store.state.report">
                  <template v-slot:activator="{ on }">
                    <a
                      href="#"
                      v-on="on"
                      @click="$store.state.report = true"
                      class="small dropdown-item"
                    >
                      <v-icon class="mr-4">mdi-flag-variant-outline</v-icon>
                      <span>Denunciar</span>
                    </a>
                  </template>
                </v-dialog>
              </li>
            </ul>
          </div>
          <small class="text-muted communityHeader">Criado por u/Gorfo</small>
        </div>
      </div>
    </div>
    <div id="mobileHeader">
      <div class="position-relative">
        <img src="../../assets/subreddit-banner.png" class="subredditBanner" />
        <img
          src="../../assets/tattoo.png"
          class="subredditPictureMobile position-absolute"
        />
      </div>
      <div class="container pb-8 mt-15 text-center">
        <h4 class="font-weight-bold">r/Runescape</h4>
        <small class="text-muted">Criado por u/Gorfo</small>
        <div class="mt-2">
          <span class="font-weight-bold">1500</span>
          <span>membros</span>
        </div>
        <!-- <v-btn outlined color="black" rounded>Membro</v-btn> -->
        <div class="mt-2">
          <v-btn outlined color="primary" rounded>Seguir</v-btn>
          <v-icon class="ml-6">mdi-cog-outline</v-icon>
          <button data-toggle="dropdown" class="ml-6">
            <v-icon>mdi-dots-horizontal</v-icon>
          </button>
          <ul class="dropdown-menu pl-0 managePostScreen">
            <li>
              <v-dialog v-model="$store.state.report">
                <template v-slot:activator="{ on }">
                  <a
                    v-on="on"
                    @click="$store.state.report = true"
                    href="#"
                    class="small dropdown-item"
                  >
                    <v-icon class="mr-4">mdi-flag-variant-outline</v-icon>
                    <span>Denunciar</span>
                  </a>
                </template>
              </v-dialog>
              <Report />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Report from '../modals/Report';

export default {
  components: {
    Report,
  },
};
</script>

<style>
.subredditPicture {
  height: 6rem;
  width: 6rem;
  border-radius: 5rem;
  bottom: -70px;
  left: 20%;
  border: solid 4px white;
}

.subredditPictureMobile {
  height: 6rem;
  width: 6rem;
  border-radius: 5rem;
  bottom: -70px;
  left: 50%;
  border: solid 2px white;
  transform: translate(-50%);
}

.communityHeader {
  margin-left: 9rem;
}

#mobileHeader {
  display: none;
}

#generalHeader {
  height: 23rem;
}

#generalHeaderContent {
  left: 20%;
  width: 50%;
}

@media only screen and (max-width: 991px) {
  #mobileHeader {
    display: inherit;
  }
  #generalHeader {
    display: none;
  }
}

@media only screen and (max-width: 1300px) {
  #generalHeader {
    height: 17rem;
  }
}
</style>
