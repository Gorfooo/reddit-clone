<template>
  <div id="home">
    <div class="container mt-16">
      <v-row class="d-flex justify-content-around">
        <v-col sm="12" md="12" lg="2" id="card1">
          <v-card class="pa-4 d-flex align-items-center">
            <img
              src="../../assets/default_user.png"
              class="rounded mr-2"
              id="profile-pic"
            />
            <v-text-field
              label="Criar post"
              outlined
              dense
              hide-details
            ></v-text-field>
            <a href="">
              <v-icon class="px-2">mdi-file-image-outline</v-icon>
            </a>
            <a href="">
              <v-icon class="px-2">mdi-link-variant</v-icon>
            </a>
          </v-card>

          <v-row class="d-flex justify-content-around mt-3">
            <v-col sm="12" md="12" lg="2" id="card1">
              <v-card class="pa-4 d-flex align-items-center">
                <v-toolbar-items class="hidden-md-and-down">
                  <!-- average likes -->
                  <a href="">
                    <v-btn class="mx-2" depressed x-small>
                      <v-icon class="px-2">mdi-rocket</v-icon>
                      Os melhores
                    </v-btn>
                  </a>
                  <!-- mais likes nas ultimas 24h -->
                  <a href="">
                    <v-btn class="mx-2" depressed x-small>
                      <v-icon class="px-2">mdi-fire</v-icon>
                      Em destaque
                    </v-btn>
                  </a>
                  <a href="">
                    <v-btn class="mx-2" depressed x-small>
                      <v-icon class="px-2">mdi-alert-decagram</v-icon>
                      Novo
                    </v-btn>
                  </a>
                  <!-- Na semana -->
                  <a href="">
                    <v-btn class="mx-2" depressed x-small>
                      <v-icon class="px-2">mdi-chart-box-outline</v-icon>
                      Mais votados
                    </v-btn>
                  </a>
                </v-toolbar-items>
                <div class="hidden-lg-and-up">
                  <div class="dropdown">
                    <div
                      class="btn dropdown-toggle"
                      type="button"
                      data-toggle="dropdown"
                    >
                      <v-icon>mdi-rocket</v-icon>
                      <span id="menuOrdenations">Os melhores</span>
                    </div>
                    <div
                      class="dropdown-menu pre-scrollable"
                      aria-labelledby="dropdownMenuButton"
                      id="dropdownOrdenations"
                    >
                      <a href="" class="dropdown-item">
                        <v-icon class="px-2">mdi-rocket</v-icon>
                        Os melhores
                      </a>
                      <a href="" class="dropdown-item">
                        <v-icon class="px-2">mdi-fire</v-icon>
                        Em destaque
                      </a>
                      <a href="" class="dropdown-item">
                        <v-icon class="px-2">mdi-alert-decagram</v-icon>
                        Novo
                      </a>
                      <a href="" class="dropdown-item">
                        <v-icon class="px-2">mdi-chart-box-outline</v-icon>
                        Mais votados
                      </a>
                    </div>
                  </div>
                </div>
              </v-card>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-card class="mb-2">
                <div class="d-flex justify-content-start">
                  <div
                    class="d-flex flex-column p-2 align-items-center"
                    id="likeDislikeColumn"
                  >
                    <v-icon class="pr-2" id="likeButton"
                      >mdi-arrow-up-bold-outline</v-icon
                    >
                    <small class="mr-2">1000</small>
                    <v-icon class="pr-2" id="dislikeButton"
                      >mdi-arrow-down-bold-outline</v-icon
                    >
                  </div>
                  <div class="d-flex justify-content-between p-2 flex-grow-1">
                    <div class="d-flex flex-column flex-grow-1">
                      <div class="align-items-start ml-2 position-relative">
                        <img
                          src="../../assets/default_user.png"
                          id="notificationImage"
                          class="img-fluid rounded"
                        />
                        <small class="font-weight-bold ml-2">
                          r/worldnews</small
                        >
                        <small class="text-muted"> ·</small>
                        <span class="text-muted small" id="postSender">
                          Enviado por u/Gorfo</span
                        >
                        <span class="text-muted small"> há 9 horas</span>
                        <v-icon class="float-right managePostDropdown"
                          >mdi-dots-horizontal</v-icon
                        >
                        <div class="position-absolute" id="managePostPosition">
                          <ul class="dropdown-menu pl-0" id="managePostScreen">
                            <li>
                              <small class="dropdown-item">
                                <v-icon class="mr-4"
                                  >mdi-eye-off-outline</v-icon
                                >
                                <a href="#">Ocultar</a>
                              </small>
                            </li>
                            <li>
                              <small class="dropdown-item">
                                <v-icon class="mr-4"
                                  >mdi-flag-variant-outline</v-icon
                                >
                                <a href="#">Denunciar</a>
                              </small>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <h6 class="ml-2 mt-2 font-weight-bold">Título do post</h6>
                      <span
                        class="mt-1 ml-2 align-items-center d-none d-sm-flex"
                        >Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Ullam quo, id aliquid et, repellat accusamus nemo
                        consectetur minus repellendus reiciendis non autem
                        ratione rem tenetur odio, amet animi. Vitae,
                        quaerat.</span
                      >
                      <div class="d-flex justify-content-between ml-2">
                        <div>
                          <v-icon>mdi-chat-outline</v-icon>
                          <small class="text-muted"> 16 comentários</small>
                        </div>
                        <div>
                          <v-icon>mdi-gift-outline</v-icon>
                          <small class="text-muted"> Premiar</small>
                        </div>
                        <div>
                          <v-icon>mdi-arrow-right-top</v-icon>
                          <small class="text-muted"> Partilhar</small>
                        </div>
                        <div>
                          <v-icon>mdi-folder-open-outline</v-icon>
                          <small class="text-muted"> Guardar</small>
                        </div>
                        <div />
                      </div>
                    </div>
                  </div>
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
                <div class="pa-3">Comunidades mais populares</div>
              </v-overlay>
            </v-img>

            <v-list nav dense class="text-dark">
              <v-list-item
                v-for="(item, i) in items"
                :key="i"
                class="border-bottom border-light"
              >
                <v-list-item-icon>
                  <p>{{ i + 1 }}</p>
                  <v-icon class="px-1">mdi-chevron-up</v-icon>
                  <v-icon v-text="item.icon"></v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title v-text="item.text"></v-list-item-title>
                </v-list-item-content>
                <v-btn rounded color="primary" x-small> Aderir </v-btn>
              </v-list-item>
            </v-list>

            <div class="text-center">
              <v-btn rounded color="primary" class="w-75"> Ver tudo </v-btn>
            </div>

            <a href="">
              <v-chip class="ma-2" small style="cursor: pointer">
                Mais votados
              </v-chip>
            </a>
            <a href="">
              <v-chip class="ma-2" small style="cursor: pointer">
                Perto de ti
              </v-chip>
            </a>
            <a href="">
              <v-chip class="ma-2" small style="cursor: pointer"> Aww </v-chip>
            </a>
            <a href="">
              <v-chip class="ma-2" small style="cursor: pointer">
                Notícias
              </v-chip>
            </a>
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
              <v-btn rounded color="error"> Experimentar Agora </v-btn>
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
              <v-btn rounded color="primary" class="w-75"> Criar Post </v-btn>
            </div>
            <div class="text-center">
              <v-btn rounded color="primary" outlined class="w-75 mt-2 mb-2">
                Criar Comunidade
              </v-btn>
            </div>
          </v-card>

          <v-card class="mx-auto mt-7">
            <v-row class="px-2">
              <v-col cols="5">
                <div>
                  <a href="" class="small">Ajuda</a>
                </div>
                <div>
                  <a href="" class="small">Moedas do Reddit</a>
                </div>
                <div>
                  <a href="" class="small">Reddit Premium</a>
                </div>
                <div>
                  <a href="" class="small">Reddit Gifts</a>
                </div>
                <div>
                  <a href="" class="small">Comunidades</a>
                </div>
                <div>
                  <a href="" class="small">Rereddit</a>
                </div>
                <div>
                  <a href="" class="small">Tópicos</a>
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
              <small class="ml-6 mt-4 mb-1"
                >Reddit Inc © 2022. Todos os direitos reservados</small
              >
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';

export default {
  data() {
    return {
      items: [
        { text: 'My Files', icon: 'mdi-folder' },
        { text: 'Shared with me', icon: 'mdi-account-multiple' },
        { text: 'Starred', icon: 'mdi-star' },
        { text: 'Recent', icon: 'mdi-history' },
        { text: 'Offline', icon: 'mdi-check-circle' },
      ],
    };
  },
  mounted() {
    $('.managePostDropdown').on('click', function Drop(e) {
      $($(this).next('div')[0].firstChild).toggle();
      e.stopPropagation();
    });
  },
};
</script>

<style>
#home {
  background-color: #dae0e6 !important;
}
#menuOrdenations {
  padding-right: 2vw;
}
#card1 {
  min-width: 55vw;
}
#card2 {
  min-width: 20rem;
}
.theme--light.v-list {
  background: white !important;
}
.v-list-item__title {
  color: black;
}
#likeButton:hover {
  color: #91c483;
}
#dislikeButton:hover {
  color: #ff6464;
}
#likeDislikeColumn {
  background-color: #f8f9fa;
}
#managePostPosition {
  right: -3.5rem;
}
#managePostScreen {
  width: 2rem;
}
@media only screen and (max-width: 993px) {
  #card2 {
    display: none;
  }
}
@media only screen and (max-width: 599px) {
  #postSender {
    display: none;
  }
}
@media only screen and (max-width: 1200px) {
  #card2 {
    min-width: 18.5rem;
  }
}
</style>
