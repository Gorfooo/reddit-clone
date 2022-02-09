<template>
  <v-app-bar dense class="shadow-none border-bottom mb-6">
    <div class="overflow-auto text-nowrap" id="profileNavbar">
      <ul class="overflow-nav__list pl-0">
        <li>
          <router-link
            to="/subreddit/configuration/community"
            class="overflow-nav__item mr-2"
            >Comunidade</router-link
          >
        </li>
        <li>
          <router-link
            to="/subreddit/configuration/modrequests"
            class="overflow-nav__item ml-2"
            >Solicitações de moderação</router-link
          >
        </li>
        <li>
          <router-link
            to="/subreddit/configuration/moderators"
            class="overflow-nav__item ml-2"
            >Moderadores</router-link
          >
        </li>
        <li>
          <router-link
            to="/subreddit/configuration/rules"
            class="overflow-nav__item ml-2"
            >Regras</router-link
          >
        </li>
      </ul>
    </div>
  </v-app-bar>
</template>

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
  padding: 8px 5px;
  font-size: 0.935em;
  transition: all 0.2s ease;
}

.overflow-nav__item:hover {
  box-shadow: inset 0 -3px 0 #189af7;
}
</style>
