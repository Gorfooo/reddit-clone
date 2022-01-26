<template>
  <v-col sm="3" md="3" lg="2" id="profileSidebar" class="hidden-sm-and-down">
    <v-card class="mx-auto">
      <div class="position-relative">
        <img src="../../assets/blue-background.jpg" class="w-100 bgImage" />
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
          <v-icon class="p-2 text-primary float-right">mdi-cog-outline</v-icon>
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
      <v-row class="mt-0">
        <v-col>
          <div class="text-center">
            <v-btn rounded color="primary" class="w-75"> Novo Post </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-card>

    <v-card class="mx-auto mt-7 p-2">
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
    </v-card>

    <v-card class="mx-auto mt-7">
      <v-row class="px-2">
        <v-col cols="5">
          <div>
            <a href="" class="small">Ajuda</a>
          </div>
          <div>
            <a href="" class="small">Moedas</a>
          </div>
          <div>
            <a href="" class="small">Reddit Premium</a>
          </div>
          <div>
            <a href="" class="small">Reddit Gifts</a>
          </div>
        </v-col>
        <v-col cols="7">
          <div>
            <a href="" class="small">Sobre</a>
          </div>
          <div>
            <a href="" class="small">Carreiras</a>
          </div>
          <div>
            <a href="" class="small">Imprensa</a>
          </div>
          <div>
            <a href="" class="small">Publicitar</a>
          </div>
          <div>
            <a href="" class="small">Blog</a>
          </div>
          <div>
            <a href="" class="small">Termos</a>
          </div>
          <div>
            <a href="" class="small">Política de Conteúdo</a>
          </div>
          <div>
            <a href="" class="small">Política de Privacidade</a>
          </div>
          <div>
            <a href="" class="small">Política de Moderação</a>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <!-- <v-btn @click="$store.dispatch('showTerms')">SHOW TERMS</v-btn>
        <modal></modal> -->
        <v-row justify="center">
          <v-dialog v-model="$store.state.dialog" width="600px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="primary" dark v-bind="attrs" v-on="on">
                Open Dialog
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="text-h5">Use Google's location service?</span>
              </v-card-title>
              <v-card-text>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Numquam delectus nobis ipsa aperiam laudantium maxime tempora
                sed doloribus suscipit quod. Dolores incidunt quos quam soluta!
                Eaque quo esse eum eligendi.
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="green darken-1"
                  text
                  @click="$store.state.dialog = false"
                >
                  Disagree
                </v-btn>
                <v-btn
                  color="green darken-1"
                  text
                  @click="$store.state.dialog = false"
                >
                  Agree
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-row>
        <small class="ml-6 mt-4 mb-1"
          >Reddit Inc © 2022. Todos os direitos reservados</small
        >
      </v-row>
    </v-card>
  </v-col>
</template>

<script>
import $ from 'jquery';

export default {
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
.bgImage {
  height: 7rem;
  border-radius: 3px;
}

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

.profileImage {
  max-height: 6rem;
  min-height: 6rem;
  max-width: 6rem;
  min-width: 6rem;
  border: solid 5px white;
  border-radius: 1rem;
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
