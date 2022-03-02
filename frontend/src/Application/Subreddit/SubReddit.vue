<template>
  <div class="mt-12">
    <Header />
    <div class="defaultBackground">
      <div class="container-fluid">
        <v-row class="d-flex justify-content-around">
          <v-col sm="12" md="12" lg="2" class="cards">
            <PostCard />
            <Ordenations />
            <v-card class="mb-4 mt-6">
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
                      <a href="" class="small font-weight-bold ml-2 linkHover">
                        u/Gorfo</a
                      >
                      <small class="text-muted"> ·</small>
                      <span class="text-muted small postSender">
                        Enviado por u/Gorfo</span
                      >
                      <span class="text-muted small"> há 9 horas</span>
                    </div>
                    <h6 class="mt-2 font-weight-bold text-muted">
                      Título do post
                    </h6>
                    <div class="d-flex justify-content-start">
                      <a href="" class="mr-4 defaultHover p-1">
                        <v-icon>mdi-chat-outline</v-icon>
                        <small class="text-muted"> 16 comentários</small>
                      </a>
                      <a href="" class="mr-4 defaultHover p-1">
                        <v-icon>mdi-arrow-right-top</v-icon>
                        <small class="text-muted"> Compartilhar</small>
                      </a>
                      <a href="" class="mr-4 guardarLarge defaultHover p-1">
                        <v-icon>mdi-folder-open-outline</v-icon>
                        <small class="text-muted"> Guardar</small>
                      </a>
                      <button data-toggle="dropdown">
                        <v-icon>mdi-dots-horizontal</v-icon>
                      </button>
                      <ul class="dropdown-menu pl-0 managePostScreen">
                        <li>
                          <v-dialog v-model="$store.state.modalStore.award">
                            <template v-slot:activator="{ on }">
                              <a
                                href="#"
                                name="premiar"
                                v-on="on"
                                class="small dropdown-item"
                              >
                                <v-icon class="mr-4">mdi-gift-outline</v-icon>
                                <span>Premiar</span>
                              </a>
                            </template>
                          </v-dialog>
                          <Award />
                        </li>
                        <li>
                          <a
                            href="#"
                            name="despremiar"
                            @click="despremiar"
                            class="small dropdown-item d-none"
                          >
                            <v-icon class="mr-4">mdi-gift-off-outline</v-icon>
                            <span>Despremiar</span>
                          </a>
                        </li>
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
                            <v-icon class="mr-4">mdi-delete</v-icon>
                            <span>Apagar Post</span>
                          </a>
                        </li>
                        <li>
                          <v-dialog v-model="$store.state.modalStore.report">
                            <template v-slot:activator="{ on }">
                              <a href="#" v-on="on" class="small dropdown-item">
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
                  </div>
                </a>
              </div>
            </v-card>
            <v-card class="mb-4">
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
                </div>
                <div class="d-flex justify-content-between p-2 flex-grow-1">
                  <div class="d-flex flex-column flex-grow-1">
                    <div class="align-items-start position-relative">
                      <span class="text-muted small postSender">
                        Post compartilhado de
                        <a href="" class="linkHover">u/User</a></span
                      >
                      <span class="text-muted small"> há 9 horas</span>
                    </div>
                    <a href="">
                      <v-card class="mb-4" outlined>
                        <div class="d-flex justify-content-start">
                          <div
                            class="
                              d-flex
                              justify-content-between
                              p-2
                              flex-grow-1
                            "
                          >
                            <div class="d-flex flex-column flex-grow-1">
                              <div
                                class="align-items-start ml-2 position-relative"
                              >
                                <img
                                  src="../../assets/default_user.png"
                                  id="notificationImage"
                                  class="img-fluid rounded"
                                />
                                <small class="font-weight-bold ml-2">
                                  u/User</small
                                >
                                <small class="text-muted"> ·</small>
                                <span class="text-muted small postSender">
                                  Enviado por u/User</span
                                >
                                <span class="text-muted small">
                                  há 9 horas</span
                                >
                              </div>
                              <h6 class="ml-2 mt-2 font-weight-bold text-muted">
                                Título do post
                              </h6>
                              <div class="d-flex justify-content-start ml-2">
                                <div class="mr-4">
                                  <small class="text-muted">
                                    134 comentários</small
                                  >
                                </div>
                                <div />
                              </div>
                            </div>
                          </div>
                        </div>
                      </v-card>
                    </a>

                    <div class="d-flex justify-content-start">
                      <a href="" class="mr-4 defaultHover p-1">
                        <v-icon>mdi-chat-outline</v-icon>
                        <small class="text-muted"> 16 comentários</small>
                      </a>
                      <a href="" class="defaultHover p-1">
                        <v-icon>mdi-delete</v-icon>
                        <small class="text-muted">
                          Apagar Compartilhamento</small
                        >
                      </a>
                      <div />
                    </div>
                  </div>
                </div>
              </div>
            </v-card>
          </v-col>
          <v-col sm="3" md="3" lg="2" id="subredditSidebar">
            <v-card class="mb-4">
              <h6 class="font-weight-bold text-white blueBackground p-3">
                Sobre a comunidade
              </h6>
              <div class="px-4">
                <div>Descrição da comunidade</div>
                <h6 class="font-weight-bold mt-4 mb-0">1500</h6>
                <small>membros</small>
                <v-divider></v-divider>
                <v-icon class="mb-1">mdi-folder-plus-outline</v-icon>
                <span class="ml-2">Criada em 5 de jul. de 2008</span>
                <v-divider></v-divider>
                <div class="text-center">
                  <v-btn rounded color="black" class="text-white w-75 mb-4"
                    >Postar</v-btn
                  >
                </div>
              </div>
            </v-card>
            <v-card class="mb-4">
              <h6 class="font-weight-bold text-white blueBackground p-3">
                Regras da comunidade
              </h6>
              <div v-for="(rule, i) in communityRules" :key="i">
                <small class="font-weight-bold px-4"
                  >{{ i + 1 }}. {{ rule }}</small
                >
                <hr />
              </div>
            </v-card>
            <v-card class="mb-4">
              <h6 class="font-weight-bold text-white blueBackground p-3">
                Moderadores
              </h6>
              <div class="d-flex flex-column">
                <div v-for="(moderator, i) in moderators" :key="i">
                  <a href="#" class="small px-4 mb-2">{{ moderator }}</a>
                </div>
                <div class="d-flex flex-column align-items-end">
                  <v-dialog v-model="$store.state.modalStore.allModerators">
                    <template v-slot:activator="{ on }">
                      <v-btn class="mt-4" text small v-on="on"
                        >VER TODOS OS MODERADORES</v-btn
                      >
                    </template>
                  </v-dialog>
                  <AllModerators />
                  <v-dialog v-model="sendModerationRequest" width="600px">
                    <template v-slot:activator="{ on }">
                      <v-btn v-on="on" class="mt-3 mb-5" text small
                        >SOLICITAR MODERAÇÃO</v-btn
                      >
                    </template>
                    <v-card>
                      <v-card-title>
                        <p class="text-h6 font-weight-bold flex-grow-1">
                          Pedir para participar
                        </p>
                        <v-icon
                          class="mb-4"
                          @click="sendModerationRequest = false"
                          >mdi-close</v-icon
                        >
                      </v-card-title>
                      <v-card-subtitle class="pb-0">
                        <p class="text-h6 text-muted">r/runescape</p>
                      </v-card-subtitle>
                      <v-divider></v-divider>
                      <v-card-text>
                        <span class="text-muted"
                          >Escreva uma mensagem curta para os moderadores
                          explicando por que você gostaria de participar.</span
                        >
                        <v-textarea solo class="mt-2"></v-textarea>
                      </v-card-text>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <div class="float-right">
                          <v-btn
                            color="primary"
                            rounded
                            @click="sendModerationRequest = false"
                          >
                            Enviar solicitação
                          </v-btn>
                        </div>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </div>
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
import TermsCard from '../TermsCard';
import PostCard from '../PostCard';
import Ordenations from '../Ordenations';
import Award from '../modals/Award';
import Report from '../modals/Report';
import Mixins from '../../mixins';
import Header from './Header';
import AllModerators from '../modals/AllModerators';

export default {
  mixins: [Mixins],
  components: {
    TermsCard,
    PostCard,
    Ordenations,
    Award,
    Report,
    Header,
    AllModerators,
  },
  data() {
    return {
      sendModerationRequest: false,
      communityRules: ['rule 1', 'rule2', 'rule3'],
      moderators: ['u/User1', 'u/User2', 'u/User3'],
    };
  },
};
</script>

<style>
.subredditBanner {
  height: 15rem;
  width: 100%;
}

.blueBackground {
  background-color: #2f4d8e;
}

#subredditSidebar {
  max-width: 22.5rem;
  min-width: 22.5rem;
}

@media only screen and (max-width: 1300px) {
  .subredditBanner {
    height: 10rem;
  }
}
@media only screen and (max-width: 750px) {
  .subredditBanner {
    height: 7rem;
  }
}
@media only screen and (max-width: 550px) {
  .subredditBanner {
    height: 3.5rem;
  }
}
@media only screen and (max-width: 991px) {
  #subredditSidebar {
    display: none;
  }
}
</style>
