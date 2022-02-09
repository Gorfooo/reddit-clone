<template>
  <div class="defaultBackground">
    <Header />
    <div class="container-fluid">
      <v-row class="d-flex justify-content-around">
        <v-col sm="12" md="12" lg="2" class="cards">
          <Ordenations />
          <v-row>
            <v-col>
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
                            <v-dialog v-model="$store.state.award">
                              <template v-slot:activator="{ on }">
                                <a
                                  href="#"
                                  name="premiar"
                                  v-on="on"
                                  @click="$store.state.award = true"
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
                              <v-icon class="mr-4">mdi-pencil</v-icon>
                              <span>Editar</span>
                            </a>
                          </li>
                          <li>
                            <a href="#" class="small dropdown-item">
                              <v-icon class="mr-4">mdi-delete</v-icon>
                              <span>Apagar Post</span>
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
                                  class="
                                    align-items-start
                                    ml-2
                                    position-relative
                                  "
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
                                <h6
                                  class="ml-2 mt-2 font-weight-bold text-muted"
                                >
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

                      <div class="d-flex justify-content-start ml-2">
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
                    <v-icon class="chat">mdi-chat-outline</v-icon>
                  </div>
                  <div class="d-flex justify-content-between p-2 flex-grow-1">
                    <div class="d-flex flex-column flex-grow-1">
                      <div class="align-items-start ml-2 position-relative">
                        <small class="text-primary">Gorfo</small>
                        <span class="text-muted small">
                          Comentou em
                          <a href="" class="linkHover">titulo do post</a> ·
                        </span>
                        <v-chip
                          small
                          class="ml-1"
                          color="red"
                          text-color="white"
                        >
                          NSFW
                        </v-chip>
                        <v-chip
                          small
                          class="ml-1"
                          color="green"
                          text-color="white"
                        >
                          Highlight
                        </v-chip>
                        <span class="small text-muted"> ·</span>
                        <a href="" class="font-weight-bold small linkHover">
                          r/runescape</a
                        >
                        <span class="text-muted small">
                          · Enviado por
                          <a href="" class="linkHover">u/User</a></span
                        >
                      </div>
                      <v-divider></v-divider>
                      <div class="borderDotted">
                        <div class="ml-2 p-2 commentBackground">
                          <small class="font-weight-bold">Gorfo</small>
                          <small class="text-muted"> · há 22 horas</small>
                          <div>
                            <small>comentário bacana</small>
                          </div>
                          <div>
                            <a href="">
                              <small class="font-weight-bold text-muted"
                                >Responder</small
                              >
                            </a>
                            <a href="">
                              <small class="font-weight-bold text-muted ml-4"
                                >Editar</small
                              >
                            </a>
                            <button data-toggle="dropdown" class="ml-4">
                              <v-icon>mdi-dots-horizontal</v-icon>
                            </button>
                            <ul class="dropdown-menu pl-0 managePostScreen">
                              <li>
                                <a href="#" class="small dropdown-item">
                                  <v-icon class="mr-4">mdi-delete</v-icon>
                                  <span>Apagar Post</span>
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
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
        <Sidebar class="mt-6" />
      </v-row>
    </div>
  </div>
</template>

<script>
import Header from './Header';
import Ordenations from '../Ordenations';
import Sidebar from './Sidebar';
import Mixins from '../../mixins';
import Award from '../modals/Award';
import Report from '../modals/Report';

export default {
  mixins: [Mixins],
  components: {
    Header,
    Ordenations,
    Sidebar,
    Award,
    Report,
  },
  data() {
    return {};
  },
};
</script>

<style>
.chat {
  padding-right: 0.4rem;
  padding-left: 0.4rem;
}

.borderDotted {
  border-left: dashed 2px #dae0e6;
}

.commentBackground {
  background-color: #f2f8fd;
}
</style>
