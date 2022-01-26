<template>
  <div class="defaultBackground">
    <Header />
    <div class="container">
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
                        <h6 class="ml-2 mt-2 font-weight-bold text-muted">
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
                        <a
                          href=""
                          class="small linkHover font-weight-bold ml-2"
                        >
                          u/Gorfo</a
                        >
                        <small class="text-muted"> ·</small>
                        <span class="text-muted small postSender">
                          Enviado por
                          <a href="" class="linkHover">u/Gorfo</a></span
                        >
                        <span class="text-muted small"> há 9 horas</span>
                      </div>
                      <div class="d-flex justify-content-start ml-2">
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
                        <v-dialog v-model="$store.state.dialog" width="6000px">
                          <template v-slot:activator="{ on, attrs }">
                            <v-btn
                              @click="e"
                              color="primary"
                              dark
                              v-bind="attrs"
                              v-on="on"
                              v-model="$store.state.dialog"
                              style="margin-top: 50px; margin-left: 50px"
                              >other button
                            </v-btn>
                          </template>
                        </v-dialog>
                        <ul class="dropdown-menu pl-0 managePostScreen">
                          <li>
                            <a
                              href="#"
                              name="premiar"
                              @click="premiar"
                              class="small dropdown-item"
                            >
                              <v-icon class="mr-4">mdi-gift-outline</v-icon>
                              <a href="#">Premiar</a>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              name="despremiar"
                              @click="despremiar"
                              class="small dropdown-item d-none"
                            >
                              <v-icon class="mr-4">mdi-gift-off-outline</v-icon>
                              <a href="#">Despremiar</a>
                            </a>
                          </li>
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
                              <v-icon class="mr-4"
                                >mdi-flag-variant-outline</v-icon
                              >
                              <a href="#">Denunciar</a>
                            </a>
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

export default {
  components: {
    Header,
    Sidebar,
  },
  data() {
    return {};
  },
  methods: {
    premiar() {
      document.getElementsByName('premiar')[0].classList.add('d-none');
      document.getElementsByName('despremiar')[0].classList.remove('d-none');
    },
    despremiar() {
      document.getElementsByName('despremiar')[0].classList.add('d-none');
      document.getElementsByName('premiar')[0].classList.remove('d-none');
    },
    dontSubmit(e) {
      e.preventDefault();
      e.stopPropagation();
    },
  },
};
</script>

<style>
</style>
