<template>
  <v-app-bar dense :elevation="20">
    <v-toolbar-title>
      <img alt="Reddit logo" src="../assets/reddit-logo.png" id="reddit-logo" />
    </v-toolbar-title>

    <div class="dropdown">
      <button
        class="btn dropdown-toggle"
        type="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expande
        d="false"
      >
        <v-icon>home</v-icon>
        <span id="menuButtonLabel">Início</span>
      </button>
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

    <v-text-field
      label="Pesquisar no Reddit"
      outlined
      dense
      class="mt-6"
    ></v-text-field>

    <v-icon class="p-2">mdi-arrow-top-right-thin-circle-outline</v-icon>
    <v-icon class="p-2">mdi-chart-box-outline</v-icon>
    <v-icon class="p-2" style="border-right: solid 1px">mdi-cctv</v-icon>
    <v-icon class="p-2">mdi-chat-processing-outline</v-icon>

    <div class="position-relative">
      <small
        class="badge badge-pill badge-danger position-absolute"
        id="notificationNumber"
        >2</small
      >
      <div class="dropdown">
        <v-icon
          class="p-2 btn dropdown-toggle"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expande
          d="false"
          >mdi-bell</v-icon
        >
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
              <small class="text-muted border-right border-dark pr-2"
                >Mensagens</small
              >
              <v-icon class="p-2">mdi-home-variant-outline</v-icon>
              <v-icon class="p-2">mdi-cog-outline</v-icon>
            </div>
          </div>
          <div class="d-flex justify-content-between dropdown-item">
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
          </div>
          <div class="d-flex justify-content-between dropdown-item">
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
          </div>
          <div class="d-flex justify-content-between dropdown-item">
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
          </div>
          <div class="d-flex justify-content-center dropdown-item">
            <a href="#" class="text-decoration-none text-primary">VER TUDO</a>
          </div>
        </div>
      </div>
    </div>

    <v-icon class="p-2">mdi-plus</v-icon>

    <div class="dropdown">
      <button
        class="btn dropdown-toggle d-flex align-items-center"
        id="button-profile-pic"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expande
        d="false"
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
            class="rounded mr-2"
            id="profile-pic"
          />
        </div>
        <div
          class="d-flex flex-column align-items-center"
          id="profile-pic-label"
        >
          <small>teste</small>
          <small class="text-muted">🔆teste</small>
        </div>
      </button>
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

    <button class="btn d-none" id="buttonCollapse">
      <v-icon class="float-right" to="/toolbarCollapsed"
        >mdi-view-headline</v-icon
      >
    </button>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      nightMode: false,
      online: true,
    };
  },
  methods: {
    stopTheEvent: (event) => event.stopPropagation(),
  },
};
</script>

<style>
div.v-toolbar__content {
  background-color: white !important;
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
#dropdownBell {
  min-width: 28vw;
  max-width: 28vw;
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
#profile-pic {
  width: 1.5rem;
  height: 1.5rem;
}
#notificationImage {
  width: 1.5rem;
  height: 1.5rem;
}
@media only screen and (max-width: 1017px) {
  #reddit-logo {
    width: 2.5rem;
    margin-right: 5rem;
    content: url('../assets/reddit-logo-mini.png');
  }
  #menuButtonLabel {
    padding-right: 5vw;
  }
}
@media only screen and (max-width: 842px) {
  #reddit-logo {
    width: 8rem;
    margin-right: 5rem;
    content: url('../assets/reddit-logo.png');
  }
  .dropdown,
  .v-text-field.v-text-field--enclosed,
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
}
a {
  color: #212529 !important;
  text-decoration: none !important;
}
#dropdownMenuButton,
#dropdownProfile,
#dropdownBell {
  max-height: 80vh;
}
</style>
