<template>
  <v-dialog
    v-model="$store.state.modalStore.report"
    width="600px"
    :retain-focus="false"
  >
    <template v-slot:activator="{ on }">
      <v-btn class="d-none" v-on="on" />
    </template>
    <v-card>
      <v-card-title>
        <span class="text-h5 flex-grow-1">Enviar Denúncia</span>
        <v-icon @click="toggleReport()">mdi-close</v-icon>
      </v-card-title>
      <v-card-text>
        Obrigado por cuidar de si mesmo(a) e de seus colegas redditors,
        denunciando questões que violem as regras. Diga-nos o que está
        acontecendo e vamos analisar o assunto.
      </v-card-text>
      <v-card-text>
        <v-chip link outlined class="mr-2 mb-2"
          >Viola as regras dessa comunidade</v-chip
        >
        <v-chip link outlined class="mr-2 mb-2">Assédio</v-chip>
        <v-chip link outlined class="mr-2 mb-2">Ameaça de violência</v-chip>
        <v-chip link outlined class="mr-2 mb-2">Ódio</v-chip>
        <v-chip link outlined class="mr-2 mb-2"
          >Sexualização de menores de idade</v-chip
        >
        <v-chip link outlined class="mr-2 mb-2"
          >Compartilhamento de informações pessoais</v-chip
        >
        <v-chip link outlined class="mr-2 mb-2"
          >Pornografia involuntária</v-chip
        >
        <v-chip link outlined class="mr-2 mb-2">Transações proibidas</v-chip>
        <v-chip link outlined class="mr-2 mb-2">Falsidade ideológica</v-chip>
        <v-chip link outlined class="mr-2 mb-2"
          >Violação de direitos autorais</v-chip
        >
        <v-chip link outlined class="mr-2 mb-2"
          >Automutilação ou suicídio</v-chip
        >
        <v-chip link outlined class="mr-2 mb-2">Spam</v-chip>
        <v-chip link outlined class="mr-2 mb-2">Desinformação</v-chip>
        <p class="mt-2">
          Caso desejar, nos conte com mais detalhes o motivo da denúncia.
        </p>
        <v-textarea solo></v-textarea>
      </v-card-text>
      <v-card-text>
        <v-alert dense outlined class="text-muted"
          >Não tem certeza se algo viola as regras? Releia a
          <v-dialog v-model="$store.state.modalStore.politics">
            <template v-slot:activator="{ on }">
              <a v-on="on" class="text-decoration-underline text-primary"
                >Política de Conteúdo do Reddit</a
              >
            </template>
          </v-dialog>
          <Politics />
          e as regras da comunidade
        </v-alert>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-dialog v-model="reported" width="500px" :retain-focus="false">
          <template v-slot:activator="{ on }">
            <v-btn v-on="on" color="orange" outlined> Enviar denúncia </v-btn>
          </template>
          <v-card>
            <v-card-title class="text-h6">
              Agradecemos a sua denúncia
            </v-card-title>

            <v-card-text>
              Obrigado mais uma vez pela denúncia e por cuidar de si mesmo(a) e
              de seus colegas redditors. Suas denúncias nos ajudam a fazer do
              Reddit um lugar melhor, mais seguro e mais acolhedor para todos, e
              isso significa muito para nós.
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                @click="
                  toggleReport();
                  reported = false;
                "
                color="primary"
                text
              >
                Concluído
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import Politics from './Politics';

export default {
  components: {
    Politics,
  },
  data() {
    return {
      reported: false,
    };
  },
  methods: {
    toggleReport() {
      this.$store.commit('modalStore/toggleReport');
    },
  },
};
</script>
