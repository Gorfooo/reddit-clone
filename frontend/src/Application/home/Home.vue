<template>
  <div class="defaultBackground">
    <div class="container-fluid mt-16">
      <v-row class="d-flex justify-content-around">
        <v-col sm="12" md="12" lg="2" class="cards">
          <PostCard />
          <Ordenations />
          <v-row>
            <v-col>
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
                      <div class="align-items-start position-relative">
                        <img
                          src="../../assets/default_user.png"
                          id="notificationImage"
                          class="img-fluid rounded"
                        />
                        <a
                          href=""
                          class="small font-weight-bold ml-2 linkHover"
                        >
                          r/worldnews</a
                        >
                        <small class="text-muted"> ·</small>
                        <span class="text-muted small postSender">
                          Enviado por
                          <a href="" class="linkHover">u/Gorfo</a></span
                        >
                        <span class="text-muted small"> há 9 horas</span>

                        <button data-toggle="dropdown" class="float-right">
                          <v-icon class="float-right"
                            >mdi-dots-horizontal</v-icon
                          >
                        </button>
                        <ul class="dropdown-menu pl-0 managePostScreen">
                          <li class="guardarSmall">
                            <a href="#" class="small dropdown-item">
                              <v-icon class="mr-4"
                                >mdi-folder-open-outline</v-icon
                              >
                              <span>Guardar</span>
                            </a>
                          </li>
                          <li>
                            <a href="#" class="small dropdown-item">
                              <v-icon class="mr-4">mdi-eye-off-outline</v-icon>
                              <span>Ocultar</span>
                            </a>
                          </li>
                          <li>
                            <v-dialog v-model="$store.state.report">
                              <template v-slot:activator="{ on }">
                                <a
                                  href="#"
                                  v-on="on"
                                  @click="$store.state.report = true"
                                  class="small dropdown-item"
                                >
                                  <v-icon class="mr-4"
                                    >mdi-flag-variant-outline</v-icon
                                  >
                                  <span>Denunciar</span>
                                </a>
                              </template>
                            </v-dialog>
                            <Report />
                          </li>
                        </ul>
                      </div>
                      <h6 class="mt-2 font-weight-bold">Título do post</h6>
                      <span class="mt-1 align-items-center d-none d-sm-flex"
                        >Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Ullam quo, id aliquid et, repellat accusamus nemo
                        consectetur minus repellendus reiciendis non autem
                        ratione rem tenetur odio, amet animi. Vitae,
                        quaerat.</span
                      >
                      <div class="d-flex justify-content-between">
                        <a href="" class="defaultHover p-1">
                          <v-icon>mdi-chat-outline</v-icon>
                          <small class="text-muted"> 16 comentários</small>
                        </a>
                        <v-dialog v-model="$store.state.award">
                          <template v-slot:activator="{ on }">
                            <a
                              v-on="on"
                              @click="$store.state.award = true"
                              href="#"
                              class="defaultHover p-1"
                              name="premiar"
                            >
                              <v-icon>mdi-gift-outline</v-icon>
                              <small class="text-muted"> Premiar</small>
                            </a>
                          </template>
                        </v-dialog>
                        <Award />

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
                        <div />
                      </div>
                    </div>
                  </a>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-col>

        <v-col sm="3" md="3" lg="2" id="card2" class="hidden-sm-and-down">
          <v-card class="mx-auto">
            <v-img
              src="../../assets/blue-gadgets-background.jpg"
              height="100px"
            >
              <v-overlay
                absolute
                class="d-flex justify-content-start align-items-end"
              >
                <div class="pa-3">Comunidades em destaque</div>
              </v-overlay>
            </v-img>

            <v-list nav dense>
              <v-list-item
                v-for="(item, i) in items"
                :key="i"
                class="borderBottom"
              >
                <v-list-item-icon class="mr-2">
                  <p>{{ i + 1 }}</p>
                  <img src="../../assets/avatar.png" class="profile-pic ml-2" />
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title
                    v-text="item.text"
                    class="text-dark"
                  ></v-list-item-title>
                </v-list-item-content>
                <v-btn rounded color="primary" x-small> Aderir </v-btn>
              </v-list-item>
            </v-list>

            <div class="text-center">
              <router-link to="/mostpopularcommunities">
                <v-btn rounded color="primary" class="w-75 mb-2">
                  Ver tudo
                </v-btn>
              </router-link>
            </div>
            <div class="ml-2">
              <v-chip small link outlined color="red" class="mr-2 mb-2"
                >NSFW</v-chip
              >
              <v-chip small link outlined color="green" class="mr-2 mb-2"
                >Games</v-chip
              >
              <v-chip small link outlined color="orange" class="mr-2 mb-2"
                >Humor</v-chip
              >
              <v-chip small link outlined class="mr-2 mb-2">Diversos</v-chip>
              <v-chip small link outlined color="yellow" class="mr-2 mb-2"
                >Esportes</v-chip
              >
              <v-chip small link outlined color="purple" class="mr-2 mb-2"
                >Notícias</v-chip
              >
              <v-chip small link outlined color="blue" class="mr-2 mb-2"
                >Natureza</v-chip
              >
            </div>
          </v-card>

          <v-card class="mt-4">
            <div class="d-flex justify-content-start">
              <v-icon large class="pr-2">mdi-shield-crown</v-icon>
              <div class="d-flex flex-column">
                <small>Reddit Premium</small>
                <small class="text-muted"
                  >A melhor experiência do Reddit, com Moedas Mensais.</small
                >
              </div>
            </div>
            <div class="text-center mt-2 pb-2">
              <a href="https://www.reddit.com/premium">
                <v-btn rounded color="error"> Experimentar Agora </v-btn>
              </a>
            </div>
          </v-card>

          <v-card class="mx-auto mt-4">
            <v-img src="../../assets/planets.jpg" height="50px"> </v-img>
            <div class="p-2">
              <h5>Início</h5>
              <p>
                A tua página pessoal do Reddit. Aqui poderás descobrir as
                últimas novidades das tuas comunidades favoritas.
              </p>
            </div>
            <div class="text-center">
              <router-link to="/createpost">
                <v-btn rounded color="primary" class="w-75"> Criar Post </v-btn>
              </router-link>
            </div>
            <div class="text-center">
              <v-dialog v-model="$store.state.createCommunity">
                <template v-slot:activator="{ on }">
                  <v-btn
                    v-on="on"
                    @click="$store.state.createCommunity = true"
                    rounded
                    color="primary"
                    outlined
                    class="w-75 mt-2 mb-2"
                  >
                    Criar Comunidade
                  </v-btn>
                </template>
              </v-dialog>
              <CreateCommunity />
            </div>
          </v-card>

          <TermsCard />
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import Ordenations from '../Ordenations';
import Mixins from '../../mixins';
import TermsCard from '../TermsCard';
import Award from '../modals/Award';
import Report from '../modals/Report';
import CreateCommunity from '../modals/CreateCommunity';
import PostCard from '../PostCard';

export default {
  mixins: [Mixins],
  components: {
    Ordenations,
    TermsCard,
    Award,
    Report,
    CreateCommunity,
    PostCard,
  },
  data() {
    return {
      items: [
        { text: 'comunidade 1' },
        { text: 'comunidade 2' },
        { text: 'comunidade 3' },
        { text: 'comunidade 4' },
        { text: 'comunidade 5' },
      ],
    };
  },
};
</script>

<style>
#card2 {
  min-width: 20rem;
}

.theme--light.v-list {
  background: white !important;
}

.borderBottom {
  border-bottom: solid 1px #dae0e6;
}

.guardarSmall {
  display: none;
}

@media only screen and (max-width: 993px) {
  #card2 {
    display: none;
  }
}

@media only screen and (max-width: 599px) {
  .postSender {
    display: none;
  }
}

@media only screen and (max-width: 1200px) {
  #card2 {
    min-width: 18.5rem;
  }
}

@media only screen and (max-width: 500px) {
  .guardarLarge {
    display: none;
  }
  .guardarSmall {
    display: inline !important;
  }
}
</style>
