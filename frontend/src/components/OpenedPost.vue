<template>
  <div class="darkerBackground">
    <div class="container mt-9">
      <div
        class="
          blackBackground
          text-white
          p-3
          pt-2
          d-flex
          justify-content-between
          align-items-center
        "
      >
        <div class="ml-10">
          <v-icon color="white" class="mr-2">mdi-file-image-outline</v-icon>
          <span class="mr-1">Título do post</span>
          <v-chip color="green" class="ml-2" small label outlined
            >Highlight</v-chip
          >
        </div>
        <div class="mr-10">
          <v-icon color="white">mdi-close</v-icon>
          <span>Fechar</span>
        </div>
      </div>
      <div class="midBackground">
        <v-row class="pt-5 px-4">
          <v-col sm="12" md="8">
            <v-card class="mb-2">
              <div class="d-flex justify-content-start">
                <div
                  class="
                    d-flex
                    flex-column
                    p-2
                    align-items-center
                    graySideColumn
                  "
                >
                  <v-icon class="pr-2 likeButton"
                    >mdi-arrow-up-bold-outline</v-icon
                  >
                  <small class="mr-2">1000</small>
                  <v-icon class="pr-2 dislikeButton"
                    >mdi-arrow-down-bold-outline</v-icon
                  >
                  <div class="d-flex align-items-end flex-grow-1">
                    <v-icon small class="pr-2">mdi-gift-outline</v-icon>
                    <small class="mr-2">500</small>
                  </div>
                </div>
                <a
                  href=""
                  class="d-flex justify-content-between p-2 flex-grow-1"
                >
                  <div class="d-flex flex-column flex-grow-1">
                    <div class="align-items-start ml-2 position-relative">
                      <img
                        src="../assets/default_user.png"
                        id="notificationImage"
                        class="img-fluid rounded"
                      />
                      <a href="" class="small font-weight-bold ml-2 linkHover">
                        r/worldnews</a
                      >
                      <small class="text-muted"> ·</small>
                      <span class="text-muted small postSender">
                        Enviado por
                        <a href="" class="linkHover">u/Gorfo</a></span
                      >
                      <span class="text-muted small"> há 9 horas</span>
                    </div>
                    <h6 class="ml-2 mt-2 font-weight-bold">Título do post</h6>
                    <span class="mt-1 ml-2 align-items-center d-none d-sm-flex"
                      >Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ullam quo, id aliquid et, repellat accusamus nemo
                      consectetur minus repellendus reiciendis non autem ratione
                      rem tenetur odio, amet animi. Vitae, quaerat.</span
                    >
                    <div class="d-flex justify-content-between ml-2">
                      <a href="" class="defaultHover p-1">
                        <v-icon>mdi-chat-outline</v-icon>
                        <small class="text-muted"> 16 comentários</small>
                      </a>
                      <a
                        href="#"
                        class="defaultHover p-1"
                        name="premiar"
                        @click="premiar"
                      >
                        <v-icon>mdi-gift-outline</v-icon>
                        <small class="text-muted"> Premiar</small>
                      </a>
                      <a
                        href="#"
                        class="defaultHover p-1 d-none"
                        name="despremiar"
                        @click="despremiar"
                      >
                        <v-icon>mdi-gift-off-outline</v-icon>
                        <small class="text-muted"> Despremiar</small>
                      </a>
                      <a href="" class="defaultHover p-1">
                        <v-icon>mdi-arrow-right-top</v-icon>
                        <small class="text-muted"> Compartilhar</small>
                      </a>
                      <a href="" class="defaultHover p-1 guardarLarge">
                        <v-icon>mdi-folder-open-outline</v-icon>
                        <small class="text-muted"> Guardar</small>
                      </a>
                      <button data-toggle="dropdown" class="float-right">
                        <v-icon class="float-right">mdi-dots-horizontal</v-icon>
                      </button>
                      <ul class="dropdown-menu pl-0 managePostScreen">
                        <li class="guardarSmall">
                          <a href="" class="small dropdown-item">
                            <v-icon class="mr-4"
                              >mdi-folder-open-outline</v-icon
                            >
                            <a href="#">Guardar</a>
                          </a>
                        </li>
                        <li>
                          <a href="" class="small dropdown-item">
                            <v-icon class="mr-4">mdi-eye-off-outline</v-icon>
                            <a href="#">Ocultar</a>
                          </a>
                        </li>
                        <li>
                          <a href="" class="small dropdown-item">
                            <v-icon class="mr-4"
                              >mdi-flag-variant-outline</v-icon
                            >
                            <a href="#">Denunciar</a>
                          </a>
                        </li>
                      </ul>
                      <div />
                    </div>
                  </div>
                </a>
              </div>
            </v-card>
          </v-col>
          <v-col cols="4" class="hidden-sm-and-down">
            <v-card class="mx-auto p-2 mb-3">
              <div class="d-flex justify-content-start align-items-center mb-3">
                <v-img src="../assets/default_user.png" class="posterImage">
                </v-img>
                <span class="ml-2 flex-grow-1">r/Runescape</span>
              </div>

              <span class="text-muted mb-3"
                >Descrição do perfil/subreddit que postou</span
              >

              <hr />

              <div class="p-2">
                <v-icon>mdi-account-group</v-icon>
                <span>Criado em 10 de fev. de 2008</span>
              </div>

              <div class="mb-3">
                <v-chip color="red" class="ml-2" small label outlined
                  >NSFW</v-chip
                >
                <v-chip color="green" class="ml-2" small label outlined
                  >Highlight</v-chip
                >
              </div>

              <div class="text-center">
                <v-btn rounded outlined color="primary" class="w-75">
                  Seguir
                </v-btn>
              </div>
            </v-card>
            <v-card class="mx-auto mb-3">
              <div class="bg-primary">
                <h6 class="text-white font-weight-bold p-3">
                  Regras do Subreddit
                </h6>
              </div>
              <div>
                <v-list dense>
                  <v-list-item
                    v-for="(rule, i) in rules"
                    :key="i"
                    class="borderBottom"
                  >
                    <v-list-item-icon>
                      <p>{{ i + 1 }}.</p>
                    </v-list-item-icon>

                    <v-list-item-content>
                      <v-list-item-title
                        v-text="rule.text"
                        class="text-dark text-wrap"
                      ></v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </div>
            </v-card>
            <TermsCard />
          </v-col>
        </v-row>
      </div>
    </div>
  </div>
</template>

<script>
import Mixins from '../mixins';
import TermsCard from './TermsCard';

export default {
  mixins: [Mixins],
  components: {
    TermsCard,
  },
  data() {
    return {
      rules: [
        { text: 'rule1 rule1 rule1 rule1 rule1 rule1 rule1 rule1 rule1' },
        { text: 'rule2' },
        { text: 'rule3' },
        { text: 'rule4' },
        { text: 'rule5' },
      ],
    };
  },
};
</script>

<style>
.darkerBackground {
  background-color: #2e2f30;
}

.blackBackground {
  background-color: black;
}

.midBackground {
  background-color: #646d73;
}

.posterImage {
  min-width: 10vw;
  max-width: 10vw;
  min-height: 10vh;
  max-height: 10vh;
}

.theme--light.v-list {
  background: white !important;
}
</style>
