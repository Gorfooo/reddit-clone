<template>
  <div class="defaultBackground">
    <div class="container-fluid mt-16">
      <v-row class="d-flex justify-content-center">
        <v-col lg="6" class="cards">
          <h5
            class="font-weight-bold postDivider border-bottom border-white py-4"
          >
            Postar
          </h5>
          <v-flex xs12 sm5 lg4 class="mt-5">
            <v-combobox
              v-model="selectedCommunity"
              :items="communities"
              label="Escolha uma comunidade"
            >
            </v-combobox>
          </v-flex>
          <v-card class="mt-5 mb-6">
            <v-row>
              <v-col>
                <v-text-field
                  dense
                  outlined
                  class="p-4 mb-2"
                  label="Título do Post"
                  :rules="rules"
                  hide-details="auto"
                ></v-text-field>
                <quill-editor
                  v-model="contentHtml"
                  :options="quillOptions"
                  class="bg-light mx-5"
                >
                </quill-editor>
                <hr />
                <v-row>
                  <v-col sm="6" md="8" class="ml-5">
                    <v-chip small link outlined color="red" class="mr-2 mb-2"
                      >NSFW</v-chip
                    >
                    <v-chip small link outlined color="green" class="mr-2 mb-2"
                      >Games</v-chip
                    >
                    <v-chip small link outlined color="orange" class="mr-2 mb-2"
                      >Humor</v-chip
                    >
                    <v-chip small link outlined class="mr-2 mb-2"
                      >Diversos</v-chip
                    >
                    <v-chip small link outlined color="yellow" class="mr-2 mb-2"
                      >Esportes</v-chip
                    >
                    <v-chip small link outlined color="purple" class="mr-2 mb-2"
                      >Notícias</v-chip
                    >
                    <v-chip small link outlined color="blue" class="mr-2 mb-2"
                      >Natureza</v-chip
                    >
                  </v-col>
                  <v-col>
                    <v-btn
                      type="submit"
                      @click="saveText"
                      color="primary"
                      rounded
                      class="float-right mr-5"
                      >Postar</v-btn
                    >
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-card>
        </v-col>

        <v-col lg="2" id="card2" class="createPostSidebar">
          <v-card class="p-2 mb-4">
            <img
              src="../assets/avatar.png"
              class="img-fluid rounded mediumPicture"
            />
            <a href="" class="small font-weight-bold ml-2 linkHover">
              Postando no Reddit</a
            >
            <hr />
            <small class="font-weight-bold"
              >1. Ponha-se no lugar do próximo</small
            >
            <hr />
            <small class="font-weight-bold"
              >2. Comporte-se da mesma forma que na vida real</small
            >
            <hr />
            <small class="font-weight-bold"
              >3. Procure a fonte original do conteúdo</small
            >
            <hr />
            <small class="font-weight-bold"
              >4. Pesquise se o conteúdo já foi postado antes</small
            >
            <hr />
            <small class="font-weight-bold"
              >5. Leia as regras da comunidade</small
            >
            <hr />
          </v-card>

          <small class="text-muted">
            Por favor, fique atento à política de conteúdo do Reddit</small
          >

          <TermsCard class="mb-6" />
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import TermsCard from './TermsCard';

export default {
  components: {
    TermsCard,
  },
  data() {
    return {
      communities: ['u/Gorfo', 'Comunidade 1', 'Comunidade 2', 'Comunidade 3'],
      selectedCommunity: [],
      rules: [(value) => !!value || 'Campo de preenchimento obrigatório.'],
      contentHtml: '',
      quillOptions: {
        placeholder: 'Compose an epic post...',
        formats: 'inline',
      },
    };
  },
  methods: {
    saveText() {
      console.log(this.contentHtml);
      if (this.contentHtml.includes('<iframe class="ql-video"')) {
        console.log('tem vídeo');
      }
      if (this.contentHtml.includes('<img src="data:')) {
        console.log('tem imagem');
      }
    },
  },
};
</script>

<style>
.ql-editor {
  height: 10rem !important;
}

@media only screen and (max-width: 990px) {
  .createPostSidebar {
    display: none;
  }
}

@media only screen and (max-width: 1800px) {
  .createPostSidebar {
    min-width: 20rem !important;
  }
}
</style>
