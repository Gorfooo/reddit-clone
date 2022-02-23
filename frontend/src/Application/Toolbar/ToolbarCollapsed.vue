<template>
  <div id="collapsed" class="position-absolute mt-12 d-none">
    <v-text-field
      label="Pesquisar"
      placeholder="Pesquisar no Reddit"
      filled
      rounded
      dense
      dark
      hide-details
      class="mx-5 mt-2"
    ></v-text-field>
    <v-list dark>
      <v-list-item href="/#/profile/overview">
        <v-list-item-icon>
          <v-icon>mdi-account-circle-outline</v-icon>
        </v-list-item-icon>

        <v-list-item-title>Perfil</v-list-item-title>
      </v-list-item>

      <v-list-item href="/#/createpost">
        <v-list-item-icon>
          <v-icon>mdi-plus</v-icon>
        </v-list-item-icon>

        <v-list-item-title>Postar</v-list-item-title>
      </v-list-item>

      <v-list-item href="https://www.reddit.com/premium">
        <v-list-item-icon>
          <v-icon>mdi-shield-crown</v-icon>
        </v-list-item-icon>

        <v-list-item-title>Premium</v-list-item-title>
      </v-list-item>

      <v-list-item href="https://www.reddit.com/powerups">
        <v-list-item-icon>
          <v-icon>mdi-flash-outline</v-icon>
        </v-list-item-icon>

        <v-list-item-title>Evoluções</v-list-item-title>
      </v-list-item>

      <v-list-group prepend-icon="mdi-account-group">
        <template v-slot:activator>
          <v-list-item-title>As minhas comunidades</v-list-item-title>
        </template>

        <v-list-item v-for="(title, i) in admins" :key="i" link class="ml-14">
          <v-list-item-title v-text="title"></v-list-item-title>
        </v-list-item>
      </v-list-group>

      <v-dialog v-model="$store.state.createCommunity">
        <template v-slot:activator="{ on }">
          <v-list-item v-on="on" @click="$store.state.createCommunity = true">
            <v-list-item-icon>
              <v-icon>mdi-account-group</v-icon>
            </v-list-item-icon>

            <v-list-item-title>Criar comunidade</v-list-item-title>
          </v-list-item>
        </template>
      </v-dialog>
      <CreateCommunity />

      <v-list-item @click="$store.state.showChat = !$store.state.showChat">
        <v-list-item-icon>
          <v-icon>mdi-chat-processing-outline</v-icon>
        </v-list-item-icon>

        <v-list-item-title>Conversa</v-list-item-title>
      </v-list-item>

      <v-list-item>
        <v-list-item-icon>
          <v-icon>mdi-folder-open-outline</v-icon>
        </v-list-item-icon>

        <v-list-item-title>Guardado</v-list-item-title>
      </v-list-item>

      <v-list-group prepend-icon="mdi-cog-outline">
        <template v-slot:activator>
          <v-list-item-title>Definições</v-list-item-title>
        </template>

        <v-list-item link class="ml-14">
          <v-list-item-title>Mostrar estado online</v-list-item-title>
          <v-list-item-icon class="m-0">
            <v-checkbox v-model="online" hide-details></v-checkbox>
          </v-list-item-icon>
        </v-list-item>
        <v-list-item link class="ml-14">
          <v-list-item-title>Idioma</v-list-item-title>
          <v-list-item-icon class="m-0">
            <v-select
              v-model="currentLanguage"
              :items="languages"
              menu-props="auto"
              hide-details
              label="Idioma"
              single-line
            ></v-select>
          </v-list-item-icon>
        </v-list-item>
        <v-list-item link class="ml-14">
          <v-list-item-title>Definições da conta</v-list-item-title>
        </v-list-item>
      </v-list-group>

      <v-list-item>
        <v-list-item-icon>
          <v-icon>mdi-finance</v-icon>
        </v-list-item-icon>

        <v-list-item-title>r/popular</v-list-item-title>
      </v-list-item>

      <v-list-item>
        <v-list-item-icon>
          <v-icon>mdi-chart-histogram</v-icon>
        </v-list-item-icon>

        <v-list-item-title>r/all</v-list-item-title>
      </v-list-item>

      <v-list-item href="https://www.reddithelp.com/hc/en-us/">
        <v-list-item-icon>
          <v-icon>mdi-help-circle-outline</v-icon>
        </v-list-item-icon>

        <v-list-item-title>Centro de Ajuda</v-list-item-title>
      </v-list-item>

      <v-list-group prepend-icon="mdi-alert-circle-outline">
        <template v-slot:activator>
          <v-list-item-title>Mais</v-list-item-title>
        </template>

        <v-list-item href="https://www.redditinc.com/" link class="ml-14">
          <v-list-item-title>Acerca do Reddit</v-list-item-title>
        </v-list-item>
        <v-list-item
          href="https://www.redditinc.com/advertising"
          link
          class="ml-14"
        >
          <v-list-item-title>Anunciar</v-list-item-title>
        </v-list-item>
        <v-list-item href="https://www.redditinc.com/blog" link class="ml-14">
          <v-list-item-title>Blog</v-list-item-title>
        </v-list-item>
        <v-list-item
          href="https://www.redditinc.com/careers/"
          link
          class="ml-14"
        >
          <v-list-item-title>Carreiras</v-list-item-title>
        </v-list-item>
        <v-list-item href="https://www.redditinc.com/press/" link class="ml-14">
          <v-list-item-title>Imprensa</v-list-item-title>
        </v-list-item>
      </v-list-group>

      <v-list-group prepend-icon="mdi-text-box-outline">
        <template v-slot:activator>
          <v-list-item-title>Políticas e Termos</v-list-item-title>
        </template>

        <v-list-item link class="ml-14">
          <v-dialog v-model="$store.state.termsOfUse">
            <template v-slot:activator="{ on }">
              <v-list-item-title
                v-on="on"
                @click="$store.state.termsOfUse = true"
                >Termos de Uso</v-list-item-title
              >
            </template>
          </v-dialog>
          <TermsOfUse />
        </v-list-item>
        <v-list-item link class="ml-14">
          <v-dialog v-model="$store.state.politics">
            <template v-slot:activator="{ on }">
              <v-list-item-title v-on="on" @click="$store.state.politics = true"
                >Política de Privacidade</v-list-item-title
              >
            </template>
          </v-dialog>
        </v-list-item>
        <v-list-item link class="ml-14">
          <v-dialog v-model="$store.state.politics">
            <template v-slot:activator="{ on }">
              <v-list-item-title v-on="on" @click="$store.state.politics = true"
                >Política de Conteúdo</v-list-item-title
              >
            </template>
          </v-dialog>
        </v-list-item>
        <v-list-item link class="ml-14">
          <v-dialog v-model="$store.state.politics">
            <template v-slot:activator="{ on }">
              <v-list-item-title v-on="on" @click="$store.state.politics = true"
                >Política de Moderação</v-list-item-title
              >
            </template>
          </v-dialog>
          <Politics />
        </v-list-item>
      </v-list-group>

      <div class="p-3">
        <v-btn rounded color="primary" class="d-block w-100">
          Terminar Sessão
        </v-btn>
      </div>
    </v-list>
  </div>
</template>

<script>
import TermsOfUse from '../modals/TermsOfUse';
import Politics from '../modals/Politics';
import CreateCommunity from '../modals/CreateCommunity';

export default {
  components: {
    TermsOfUse,
    Politics,
    CreateCommunity,
  },
  data() {
    return {
      admins: ['r/2007scape', 'r/cars'],
      online: true,
      currentLanguage: 'Português (PT)',
      languages: [
        'English (US)',
        'Deutsch',
        'Español (ES)',
        'Español (MX)',
        'Français',
        'Italiano',
        'Português (PT)',
        'Português (BR)',
      ],
    };
  },
};
</script>

<style scoped>
#collapsed {
  color: white;
  top: 0;
  width: 100%;
  background: #1e1e1e;
}
.theme--light.v-list {
  background-color: #1e1e1e !important;
}
.v-list-item__title {
  color: white;
}
.v-icon__svg {
  color: white !important;
}
</style>
