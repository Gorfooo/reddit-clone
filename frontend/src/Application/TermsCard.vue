<template>
  <v-card class="mx-auto mt-7">
    <v-row class="px-2">
      <v-col cols="5">
        <div>
          <a href="https://www.reddithelp.com/hc/en-us/" class="small">Ajuda</a>
        </div>
        <div>
          <a href="https://www.reddit.com/premium" class="small"
            >Reddit Premium</a
          >
        </div>
        <div>
          <a href="https://www.redditinc.com/careers/" class="small"
            >Carreiras</a
          >
        </div>
        <div>
          <a href="https://www.redditinc.com/press/" class="small">Imprensa</a>
        </div>
      </v-col>
      <v-col cols="7">
        <div>
          <a href="https://www.redditinc.com/advertising" class="small"
            >Anunciar</a
          >
        </div>
        <div>
          <a href="https://www.redditinc.com/blog" class="small">Blog</a>
        </div>
        <div>
          <v-dialog v-model="termsOfUse">
            <template v-slot:activator="{ on }">
              <a class="small" v-on="on" @click="$store.state.termsOfUse = true"
                >Termos</a
              >
            </template>
          </v-dialog>
          <TermsOfUse />
        </div>
        <div>
          <v-dialog v-model="$store.state.politics">
            <template v-slot:activator="{ on }">
              <a v-on="on" @click="$store.state.politics = true" class="small"
                >Política de Conteúdo</a
              >
            </template>
          </v-dialog>
        </div>
        <div>
          <v-dialog v-model="$store.state.politics">
            <template v-slot:activator="{ on }">
              <a v-on="on" @click="$store.state.politics = true" class="small"
                >Política de Privacidade</a
              >
            </template>
          </v-dialog>
        </div>
        <div>
          <v-dialog v-model="$store.state.politics">
            <template v-slot:activator="{ on }">
              <a v-on="on" @click="$store.state.politics = true" class="small"
                >Política de Moderação</a
              >
            </template>
          </v-dialog>
          <Politics />
        </div>
      </v-col>
    </v-row>
    <v-row class="d-flex justify-content-center">
      <small class="mt-4 mb-1"
        >Reddit Inc © 2022. Todos os direitos reservados</small
      >
    </v-row>
  </v-card>
</template>

<script>
import { mapState } from 'vuex';
import TermsOfUse from './modals/TermsOfUse';
import Politics from './modals/Politics';

export default {
  components: {
    TermsOfUse,
    Politics,
  },
  computed: {
    ...mapState('modalStore', ['termsOfUse']),
  },
};
</script>
