<template>
  <v-col sm="3" md="3" lg="2" id="profileSidebar" class="hidden-sm-and-down">
    <v-card class="mx-auto">
      <div class="position-relative">
        <img src="../../assets/blue-background.jpg" class="bgImage" />
        <label
          class="
            v-icon
            notranslate
            mdi
            p-1
            mdi-camera-outline
            text-primary
            theme--light
            position-absolute
            btnUploadBackground
          "
          ><input
            id="bgImage"
            type="file"
            name="bgImage"
            accept="image/*"
            style="display: none"
        /></label>
        <div class="position-absolute" id="profileImageSpot">
          <img src="../../assets/tattoo.png" class="w-25 profileImage" />
          <label
            class="
              v-icon
              notranslate
              mdi
              p-1
              mdi-camera-outline
              text-primary
              theme--light
              position-absolute
              btnUploadProfile
            "
            ><input
              id="profileImage"
              type="file"
              name="profileImage"
              accept="image/*"
              style="display: none"
          /></label>
        </div>
      </div>
      <v-row>
        <v-col cols="6" class="mt-7">
          <small class="ml-4 text-wrap"
            >u/Gorfooooooooooooooooooooooooooooooooooooo</small
          >
        </v-col>
        <v-col cols="6">
          <router-link to="/profile/configuration/profile">
            <v-icon class="p-2 text-primary float-right"
              >mdi-cog-outline</v-icon
            >
          </router-link>
          <v-tooltip bottom color="black">
            <template v-slot:activator="{ on }">
              <v-icon v-on="on" class="py-2 px-1 text-danger float-right"
                >mdi-cancel</v-icon
              >
            </template>
            <span>Bloquear usuário</span>
          </v-tooltip>
          <!-- <v-tooltip bottom color="black">
            <template v-slot:activator="{ on }">
              <v-icon v-on="on" class="py-2 px-1 text-success float-right"
                >mdi-account-check-outline</v-icon
              >
            </template>
            <span>Desbloquear usuário</span>
          </v-tooltip> -->
        </v-col>
        <v-col cols="12" class="px-6">
          <div>
            <small class="font-weight-bold">Sobre:</small>
          </div>
          <small
            >descrição do perfil descrição do perfil descrição do perfil
            descrição do perfil</small
          >
        </v-col>
        <v-col cols="4">
          <small class="ml-4 font-weight-bold">Karma</small>
          <p class="ml-4 small">🔆 0</p>
        </v-col>
        <v-col cols="8">
          <small class="ml-4 font-weight-bold">Dia do Bolo</small>
          <p class="ml-4 small">🍰10 de junho de 2018</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <div class="text-center">
            <v-btn rounded color="primary" class="w-75"> Seguir </v-btn>
          </div>
        </v-col>
      </v-row>
      <v-row class="mt-0">
        <v-col>
          <div class="text-center">
            <router-link to="/createpost">
              <v-btn rounded color="primary" class="w-75"> Novo Post </v-btn>
            </router-link>
          </div>
        </v-col>
      </v-row>
    </v-card>

    <v-card class="mx-auto mt-7 p-2">
      <h6 class="font-weight-bold">Você modera estas comunidades</h6>
      <ul class="list-group p-0">
        <li class="list-group-item border-0 p-2">
          <div class="d-flex align-items-center">
            <img src="../../assets/avatar.png" class="profile-pic mr-2" />
            <div class="d-flex flex-column flex-grow-1">
              <small class="ml-1">r/runescape</small>
              <small class="text-muted">1 membro</small>
            </div>
            <v-btn outlined color="primary" small rounded>Membro</v-btn>
          </div>
        </li>
      </ul>
    </v-card>

    <!-- <v-card class="mx-auto mt-4 p-2">
      <h6 class="font-weight-bold">Prateleira de troféus (2)</h6>
      <ul class="list-group p-0">
        <li class="list-group-item border-0 p-2">
          <img
            src="../../assets/award_badge.png"
            height="50vh"
            width="50vw"
            class="mr-2"
          />
          First Post
        </li>
        <li class="list-group-item border-0 p-2">
          <img
            src="../../assets/one.png"
            height="50vh"
            width="50vw"
            class="mr-2"
          />
          One-Year Club
        </li>
      </ul>
    </v-card> -->

    <TermsCard />
  </v-col>
</template>

<script>
import $ from 'jquery';
import TermsCard from '../TermsCard';

export default {
  components: {
    TermsCard,
  },
  data() {
    return {};
  },
  mounted() {
    $('#bgImage').on('change', function () {
      const $input = $(this);
      if ($input.val().length > 0) {
        const fileReader = new FileReader();
        fileReader.onload = function (data) {
          $('.bgImage').attr('src', data.target.result);
        };
        fileReader.readAsDataURL($input.prop('files')[0]);
        $('.bgImage').css('display', 'block');
      }
    });

    $('#profileImage').on('change', function () {
      const $input = $(this);
      if ($input.val().length > 0) {
        const fileReader = new FileReader();
        fileReader.onload = function (data) {
          $('.profileImage').attr('src', data.target.result);
        };
        fileReader.readAsDataURL($input.prop('files')[0]);
        $('.profileImage').css('display', 'block');
      }
    });
  },
};
</script>

<style>
.btnUploadBackground {
  right: 5px;
  bottom: -2px;
  border: solid 1px #6395ec;
  background-color: white;
  border-radius: 5rem;
}

.btnUploadProfile {
  border: solid 1px #6395ec;
  background-color: white;
  border-radius: 5rem;
  right: -5px;
  bottom: -7px;
}

#profileImageSpot {
  top: 45%;
  left: 0.5rem;
}

#profileSidebar {
  min-width: 20rem;
}

@media only screen and (max-width: 993px) {
  #profileSidebar {
    display: none;
  }
}

@media only screen and (max-width: 1200px) {
  #profileSidebar {
    min-width: 18.5rem;
  }
}
</style>

<style scoped>
.profileImage {
  max-height: 6rem;
  min-height: 6rem;
  max-width: 6rem;
  min-width: 6rem;
  border: solid 5px white;
  border-radius: 1rem;
}

.bgImage {
  height: 7rem !important;
  border-radius: 3px !important;
  width: 100%;
}
</style>
