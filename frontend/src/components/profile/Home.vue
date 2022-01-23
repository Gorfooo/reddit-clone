<template>
  <div id="profileHome">
    <div class="hidden-sm-and-up bg-light mt-12 text-center">
      <img
        src="../../assets/default_user.png"
        class="mx-auto mt-2 rounded-circle"
        height="75vh"
        width="75vw"
      />
      <h3>u/Gorfo</h3>
      <span class="text-muted">1 karma</span>
      <span class="font-weight-bold"> · 3 anos</span>
      <span class="text-muted"> no reddit</span>
      <div>
        <a href="">
          <span class="text-primary">Editar Perfil</span>
          <v-icon small class="mb-1 ml-1 text-primary">mdi-pencil</v-icon>
        </a>
      </div>
    </div>
    <v-app-bar dense class="shadow-none" id="profileNav">
      <div class="overflow-auto text-nowrap" id="profileNavbar">
        <ul class="overflow-nav__list">
          <li>
            <a href="#" class="overflow-nav__item">Visão Geral</a>
          </li>
          <li><a href="#" class="overflow-nav__item">Posts</a></li>
          <li><a href="#" class="overflow-nav__item">Comentários</a></li>
          <li><a href="#" class="overflow-nav__item">Guardado</a></li>
          <li><a href="#" class="overflow-nav__item">Ocultado</a></li>
          <li><a href="#" class="overflow-nav__item">Posts curtidos</a></li>
          <li>
            <a href="#" class="overflow-nav__item">Posts não curtidos</a>
          </li>
          <li>
            <a href="#" class="overflow-nav__item">Prêmios recebidos</a>
          </li>
          <li><a href="#" class="overflow-nav__item">Prêmios dados</a></li>
        </ul>
      </div>
    </v-app-bar>
    <div class="container">
      <v-row class="d-flex justify-content-around">
        <v-col sm="12" md="12" lg="2" id="card1">
          <v-row class="d-flex justify-content-around mt-3">
            <v-col sm="12" md="12" lg="2" id="card1">
              <v-card class="pa-4 d-flex align-items-center">
                <v-toolbar-items class="hidden-md-and-down">
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
              <v-card class="mb-2 disabledCard">
                <div class="d-flex justify-content-start">
                  <div class="d-flex flex-column p-2 align-items-center">
                    <v-icon class="pr-2">mdi-arrow-up-bold-outline</v-icon>
                    <small class="mr-2">&nbsp;</small>
                    <v-icon class="pr-2">mdi-arrow-down-bold-outline</v-icon>
                  </div>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-col>

        <v-col sm="3" md="3" lg="2" id="card2" class="hidden-sm-and-down">
          <v-card class="mx-auto">
            <input
              type="image"
              src="../../assets/default_user.png"
              width="48"
              height="48"
            />
          </v-card>

          <v-card class="mx-auto mt-4 p-2">
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
                  <a href="" class="small">Moedas do Reddit</a>
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
#profileHome {
  background-color: #dae0e6 !important;
}

#profileNavbar::-webkit-scrollbar {
  height: 7px;
}

.overflow-nav__list {
  display: inline-flex;
  margin: 0;
  list-style: none;
}

.overflow-nav__item {
  display: block;
  margin: 0 10px;
  padding: 16px 10px;
  font-size: 0.935em;
  text-transform: uppercase;
  transition: all 0.2s ease;
}

.overflow-nav__item:hover {
  box-shadow: inset 0 -3px 0 #189af7;
}

@media only screen and (min-width: 598px) {
  #profileNav {
    margin-top: 3rem !important;
  }
}
/* ajustar abaixo */
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
.disabledCard {
  opacity: 50%;
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
