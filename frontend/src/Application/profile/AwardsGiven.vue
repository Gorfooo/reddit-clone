<template>
  <div class="defaultBackground">
    <Header />
    <div class="container-fluid mt-6">
      <v-row class="d-flex justify-content-around">
        <v-col sm="12" md="12" lg="2" class="cards">
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
                    <v-icon x-large class="px-7 bgLight"
                      >mdi-file-image-outline</v-icon
                    >
                    <!-- <v-icon x-large class="px-7 bg-light">mdi-youtube</v-icon> -->

                    <div class="d-flex flex-column flex-grow-1">
                      <div class="align-items-start ml-2 position-relative">
                        <h6 class="mt-2 font-weight-bold text-muted">
                          Título do post
                          <v-chip color="red" class="ml-2" small label outlined
                            >NSFW</v-chip
                          >
                          <v-chip
                            color="green"
                            class="ml-2"
                            small
                            label
                            outlined
                            >Highlight</v-chip
                          >
                        </h6>
                        <a href="" class="small linkHover font-weight-bold">
                          u/Gorfo</a
                        >
                        <small class="text-muted"> ·</small>
                        <span class="text-muted small postSender">
                          Enviado por
                          <a href="" class="linkHover">u/Gorfo</a></span
                        >
                        <span class="text-muted small"> há 9 horas</span>
                      </div>
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
                          <v-icon class="float-right"
                            >mdi-dots-horizontal</v-icon
                          >
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
                            <v-dialog v-model="$store.state.modalStore.report">
                              <template v-slot:activator="{ on }">
                                <a
                                  href="#"
                                  v-on="on"
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
                  </a>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
        <Sidebar />
      </v-row>
    </div>
  </div>
</template>

<script>
import Header from './Header';
import Sidebar from './Sidebar';
import Mixins from '../../mixins';
import Award from '../modals/Award';
import Report from '../modals/Report';

export default {
  mixins: [Mixins],
  components: {
    Header,
    Sidebar,
    Award,
    Report,
  },
};
</script>

<style>
</style>
