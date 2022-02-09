<template>
  <div>
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
    <v-app-bar
      dense
      class="shadow-none d-flex justify-content-center"
      id="profileNav"
    >
      <div class="overflow-auto text-nowrap" id="profileNavbar">
        <ul class="overflow-nav__list">
          <li>
            <router-link to="/profile/overview" class="overflow-nav__item mx-2"
              >Visão Geral</router-link
            >
          </li>
          <li>
            <router-link to="/profile/posts" class="overflow-nav__item mx-2"
              >Posts</router-link
            >
          </li>
          <li>
            <router-link to="/profile/comments" class="overflow-nav__item mx-2"
              >Comentários</router-link
            >
          </li>
          <li>
            <router-link to="/profile/stored" class="overflow-nav__item mx-2"
              >Guardado</router-link
            >
          </li>
          <li>
            <router-link to="/profile/hidden" class="overflow-nav__item mx-2"
              >Ocultado</router-link
            >
          </li>
          <li>
            <router-link
              to="/profile/likedposts"
              class="overflow-nav__item mx-2"
              >Posts curtidos</router-link
            >
          </li>
          <li>
            <router-link
              to="/profile/dislikedposts"
              class="overflow-nav__item mx-2"
              >Posts não curtidos</router-link
            >
          </li>
          <li>
            <router-link
              to="/profile/awardsreceived"
              class="overflow-nav__item mx-2"
              >Prêmios recebidos</router-link
            >
          </li>
          <li>
            <router-link
              to="/profile/awardsgiven"
              class="overflow-nav__item mx-2"
              >Prêmios dados</router-link
            >
          </li>
        </ul>
      </div>
    </v-app-bar>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
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
</style>
