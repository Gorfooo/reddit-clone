<template>
  <div class="defaultBackground">
    <Header />
    <div class="container-fluid mt-6">
      <v-row class="d-flex justify-content-around">
        <v-col sm="12" md="12" lg="2" class="cards">
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
                    <v-icon class="chat">mdi-chat-outline</v-icon>
                  </div>
                  <div class="d-flex justify-content-between p-2 flex-grow-1">
                    <div class="d-flex flex-column flex-grow-1">
                      <div class="align-items-start ml-2 position-relative">
                        <small class="text-primary">Gorfo</small>
                        <span class="text-muted small">
                          Comentou em
                          <a href="" class="linkHover">título do post</a> ·
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
                            <a href="">
                              <small class="font-weight-bold text-muted ml-4"
                                >Apagar</small
                              >
                            </a>
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
        <Sidebar />
      </v-row>
    </div>
  </div>
</template>

<script>
import Header from './Header';
import Ordenations from '../Ordenations';
import Sidebar from './Sidebar';

export default {
  components: {
    Header,
    Ordenations,
    Sidebar,
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
