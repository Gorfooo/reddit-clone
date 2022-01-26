<template>
  <v-app-bar
    dense
    outlined
    class="shadow-none position-absolute"
    id="mainNavbar"
  >
    <v-toolbar-title>
      <a href="#">
        <img
          alt="Reddit logo"
          src="../assets/reddit-logo.png"
          id="reddit-logo"
        />
      </a>
    </v-toolbar-title>

    <div class="dropdown" id="dropdownMenu">
      <div class="btn dropdown-toggle" type="button" data-toggle="dropdown">
        <v-icon>home</v-icon>
        <span id="menuButtonLabel">Início</span>
      </div>
      <div
        class="dropdown-menu pre-scrollable"
        aria-labelledby="dropdownMenuButton"
        id="dropdownMenuButton"
      >
        <input
          type="text"
          class="form-control dropdown-item border"
          placeholder="Filtrar"
        />
        <small class="text-muted dropdown-item">AS MINHAS COMUNIDADES</small>
        <a class="dropdown-item" href="#">Thing</a>
        <a class="dropdown-item" href="#">Something</a>
        <a class="dropdown-item" href="#">Dudes</a>
      </div>
    </div>

    <div id="navbarTextField" class="flex-grow-1">
      <v-text-field
        label="Pesquisar no Reddit"
        outlined
        dense
        hide-details
      ></v-text-field>
    </div>

    <v-tooltip bottom color="black">
      <template v-slot:activator="{ on, attrs }">
        <v-icon class="p-2" v-bind="attrs" v-on="on"
          >mdi-arrow-top-right-thin-circle-outline</v-icon
        >
      </template>
      <span>Em destaque</span>
    </v-tooltip>
    <v-tooltip bottom color="black">
      <template v-slot:activator="{ on, attrs }">
        <v-icon class="p-2" v-bind="attrs" v-on="on"
          >mdi-alert-decagram-outline</v-icon
        >
      </template>
      <span>Novos</span>
    </v-tooltip>
    <v-tooltip bottom color="black">
      <template v-slot:activator="{ on, attrs }">
        <v-icon
          class="p-2"
          v-bind="attrs"
          v-on="on"
          style="border-right: solid 1px"
          >mdi-cctv</v-icon
        >
      </template>
      <span>Live</span>
    </v-tooltip>
    <v-tooltip bottom color="black">
      <template v-slot:activator="{ on, attrs }">
        <v-icon class="p-2" v-bind="attrs" v-on="on"
          >mdi-chat-processing-outline</v-icon
        >
      </template>
      <span>Chat</span>
    </v-tooltip>

    <div class="position-relative">
      <small
        class="badge badge-pill badge-danger position-absolute"
        id="notificationNumber"
        >2</small
      >
      <div class="dropdown" id="dropdownNotifications">
        <v-tooltip bottom color="black">
          <template v-slot:activator="{ on, attrs }">
            <v-icon
              v-bind="attrs"
              v-on="on"
              class="btn dropdown-toggle"
              data-toggle="dropdown"
              >mdi-bell</v-icon
            >
          </template>
          <span>Notificações</span>
        </v-tooltip>

        <div
          class="dropdown-menu dropdown-menu-right overflow-auto"
          id="dropdownBell"
          aria-labelledby="dropdownMenuButton"
        >
          <div class="dropdown-item d-flex justify-content-between">
            <div class="mt-2">
              <span>Notificações</span>
            </div>
            <div>
              <a href="" class="small text-muted border-right border-dark pr-2"
                >Mensagens</a
              >
              <v-icon class="p-2">mdi-home-variant-outline</v-icon>
              <v-icon class="p-2">mdi-cog-outline</v-icon>
            </div>
          </div>
          <a href="" class="d-flex justify-content-between dropdown-item">
            <img
              src="../assets/default_user.png"
              id="notificationImage"
              class="img-fluid rounded"
            />
            <div class="d-flex flex-column">
              <div class="align-items-start ml-2">
                <span>r/worldnews</span>
                <span class="text-muted"> · 5h</span>
              </div>
              <span class="text-muted text-wrap mt-2 ml-2 align-items-center"
                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                quo, id aliquid et, repellat accusamus nemo consectetur minus
                repellendus reiciendis non autem ratione rem tenetur odio, amet
                animi. Vitae, quaerat.</span
              >
            </div>

            <div class="position-relative">
              <v-icon class="align-items-start ocultNotificationDropdown"
                >mdi-dots-horizontal</v-icon
              >
              <div class="position-absolute">
                <ul class="dropdown-menu pl-0">
                  <li>
                    <small>
                      <a href="#" class="dropdown-item"
                        >Ocultar esta notificação</a
                      >
                    </small>
                  </li>
                  <li>
                    <small>
                      <a href="#" class="dropdown-item text-wrap"
                        >Desativar notificações de novidades desta comunidade</a
                      >
                    </small>
                  </li>
                </ul>
              </div>
            </div>
          </a>
          <a href="" class="d-flex justify-content-between dropdown-item">
            <img
              src="../assets/default_user.png"
              id="notificationImage"
              class="img-fluid rounded"
            />
            <div class="d-flex flex-column">
              <div class="align-items-start ml-2">
                <span>r/worldnews</span>
                <span class="text-muted"> · 5h</span>
              </div>
              <span class="text-muted text-wrap mt-2 ml-2 align-items-center"
                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                quo, id aliquid et, repellat accusamus nemo consectetur minus
                repellendus reiciendis non autem ratione rem tenetur odio, amet
                animi. Vitae, quaerat.</span
              >
            </div>
            <v-icon class="align-items-start">mdi-dots-horizontal</v-icon>
          </a>
          <a href="" class="d-flex justify-content-between dropdown-item">
            <img
              src="../assets/default_user.png"
              id="notificationImage"
              class="img-fluid rounded"
            />
            <div class="d-flex flex-column">
              <div class="align-items-start ml-2">
                <span>r/worldnews</span>
                <span class="text-muted"> · 5h</span>
              </div>
              <span class="text-muted text-wrap mt-2 ml-2 align-items-center"
                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                quo, id aliquid et, repellat accusamus nemo consectetur minus
                repellendus reiciendis non autem ratione rem tenetur odio, amet
                animi. Vitae, quaerat.</span
              >
            </div>
            <v-icon class="align-items-start">mdi-dots-horizontal</v-icon>
          </a>
          <a href="" class="d-flex justify-content-center dropdown-item">
            <button class="text-decoration-none text-primary">VER TUDO</button>
          </a>
        </div>
      </div>
    </div>

    <v-tooltip bottom color="black">
      <template v-slot:activator="{ on, attrs }">
        <v-icon class="p-2" v-bind="attrs" v-on="on">mdi-plus</v-icon>
      </template>
      <span>Postar</span>
    </v-tooltip>

    <div class="dropdown" id="dropdownProfileMain">
      <a
        class="dropdown-toggle d-flex align-items-center"
        id="button-profile-pic"
        data-toggle="dropdown"
      >
        <div class="position-relative">
          <small
            class="badge badge-pill badge-success position-absolute"
            :class="{ 'badge-danger': !online }"
            id="onlineIconBadge"
            >&nbsp;</small
          >
          <img
            src="../assets/default_user.png"
            class="profile-pic rounded mr-2"
          />
        </div>
        <div
          class="d-flex flex-column align-items-center"
          id="profile-pic-label"
        >
          <small>Gorfo</small>
          <small class="text-muted">🔆 0 karma</small>
        </div>
      </a>
      <div
        class="dropdown-menu pre-scrollable"
        aria-labelledby="dropdownMenuButton"
        id="dropdownProfile"
      >
        <small class="text-muted dropdown-item">ESTADO ONLINE</small>
        <div class="d-flex justify-content-between dropdown-item">
          <span>On</span>
          <v-switch
            flat
            hide-details
            @click="stopTheEvent"
            v-model="online"
          ></v-switch>
        </div>
        <small class="text-muted dropdown-item">AS MINHAS COISAS</small>
        <a href="" class="justify-content-start dropdown-item">
          <v-icon class="pr-2">mdi-account-circle-outline</v-icon>
          <span>Perfil</span>
        </a>
        <a href="" class="justify-content-start dropdown-item">
          <v-icon class="pr-2">mdi-plus</v-icon>
          <span>Criar Avatar</span>
        </a>
        <a href="" class="justify-content-start dropdown-item">
          <v-icon class="pr-2">mdi-cog-outline</v-icon>
          <span>Definições do Utilizador</span>
        </a>
        <small class="text-muted dropdown-item">OPÇÕES DE VISUALIZAÇÃO</small>
        <div class="d-flex justify-content-between dropdown-item">
          <v-icon class="pr-2">mdi-weather-night</v-icon>
          <span>Modo noturno</span>
          <v-switch
            flat
            hide-details
            @click="stopTheEvent"
            v-model="nightMode"
          ></v-switch>
        </div>
        <small class="text-muted dropdown-item">MAIS COISAS</small>
        <a href="" class="justify-content-start dropdown-item">
          <v-icon class="pr-2">mdi-account-group</v-icon>
          <span>Cria uma comunidade</span>
        </a>
        <a href="" class="d-flex justify-content-start dropdown-item">
          <v-icon class="pr-2">mdi-hand-coin-outline</v-icon>
          <div class="d-flex flex-column align-items-center">
            <span>Moedas</span>
            <small class="text-muted">0 moedas</small>
          </div>
        </a>
        <a href="" class="justify-content-start dropdown-item">
          <v-icon class="pr-2">mdi-shield-crown</v-icon>
          <span>Premium</span>
        </a>
        <a href="" class="justify-content-start dropdown-item">
          <v-icon class="pr-2">mdi-flash-outline</v-icon>
          <span>Evoluções</span>
        </a>
        <a href="" class="justify-content-start dropdown-item">
          <v-icon class="pr-2">mdi-adjust</v-icon>
          <span>Talk</span>
        </a>
        <a href="" class="justify-content-start dropdown-item">
          <v-icon class="pr-2">mdi-telescope</v-icon>
          <span>Previsões</span>
        </a>
        <a href="" class="justify-content-start dropdown-item">
          <v-icon class="pr-2">mdi-help-circle-outline</v-icon>
          <span>Centro de Ajuda</span>
        </a>
        <a
          href="https://old.reddit.com/search?q=Daredevil&source=trending"
          target="_blank"
          class="justify-content-start dropdown-item"
        >
          <v-icon class="pr-2">mdi-arrow-up-right</v-icon>
          <span>Visitar o Reddit Antigo</span>
        </a>
        <hr />
        <a href="" class="justify-content-start dropdown-item">
          <v-icon class="pr-2">mdi-arrow-collapse-right</v-icon>
          <span>Terminar sessão</span>
        </a>
      </div>
    </div>

    <button class="d-none" id="buttonCollapse" @click="showCollapsedBar">
      <v-icon class="float-right text-white" to="/toolbarCollapsed"
        >mdi-view-headline</v-icon
      >
    </button>
  </v-app-bar>
</template>

<script>
import $ from 'jquery';

export default {
  data() {
    return {
      nightMode: false,
      online: true,
    };
  },
  methods: {
    stopTheEvent: (event) => event.stopPropagation(),
    showCollapsedBar() {
      const collapsedBar = document.getElementById('collapsed');
      collapsedBar.classList.toggle('d-none');
    },
  },
  mounted() {
    // quando sai do foco dar toggle dnv
    $('.ocultNotificationDropdown').on('click', function Drop(e) {
      $($(this).next('div')[0].firstChild).toggle();
      e.stopPropagation();
    });
  },
};
</script>

<style>
#mainNavbar {
  background-color: white !important;
  border-bottom: solid 1px;
  border-color: #dae0e6;
}
v-app-bar {
  position: fixed;
  width: 100%;
}
#reddit-logo {
  width: 9rem;
}
#menuButtonLabel {
  padding-right: 10vw;
}
i {
  cursor: pointer;
}
#notificationNumber {
  transform: scale(0.9);
  right: 0;
}
#onlineIconBadge {
  transform: scale(0.6);
  right: 0;
  bottom: -0.3rem;
  margin-top: 0.8rem;
}
#profile-pic-label {
  padding-right: 7rem;
}
.profile-pic {
  width: 1.5rem;
  height: 1.5rem;
}
#notificationImage {
  width: 1.5rem;
  height: 1.5rem;
}
a {
  color: #212529 !important;
  text-decoration: none !important;
}
#dropdownBell {
  min-width: 32vw;
  max-width: 32vw;
}
.dropdown-item:active {
  color: black !important;
  background-color: #fff !important;
}
#dropdownMenuButton,
#dropdownProfile,
#dropdownBell {
  max-height: 80vh;
}
.v-tooltip__content {
  text-align: center;
}
@media only screen and (max-width: 1038px) {
  #reddit-logo {
    width: 2.5rem;
    margin-right: 5rem;
    content: url('../assets/reddit-logo-mini.png');
  }
  #menuButtonLabel {
    padding-right: 5vw;
  }
}

@media only screen and (max-width: 1464px) {
  ul.dropdown-menu {
    top: -0.2rem;
    left: -14rem;
    width: 15rem;
  }
}
@media only screen and (max-width: 1000px) {
  ul.dropdown-menu {
    top: -0.2rem;
    left: -11rem;
    width: 12rem;
  }
}

@media only screen and (max-width: 842px) {
  #dropdownMenu,
  #dropdownProfileMain,
  #dropdownNotifications,
  #navbarTextField,
  .v-icon.v-icon.p-2,
  #notificationNumber {
    display: none;
  }
  .v-toolbar--dense .v-toolbar__content {
    justify-content: space-between;
  }
  #buttonCollapse {
    display: inherit !important;
  }
  #mainNavbar {
    background-color: #1e1e1e !important;
  }
  #reddit-logo {
    content: url('../assets/dark-mode-reddit-logo.png');
    width: 8rem;
    margin-top: 0.2rem;
  }
}
@media only screen and (min-width: 842px) {
  #collapsed {
    display: none;
  }
}
</style>
