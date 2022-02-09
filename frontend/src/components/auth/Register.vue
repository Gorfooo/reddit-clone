<template>
  <v-dialog v-model="$store.state.register" width="800px">
    <template v-slot:activator="{ on }">
      <v-btn class="d-none" v-on="on" />
    </template>
    <v-card>
      <div class="d-flex position-relative">
        <div class="sideImage">
          <img
            src="../../assets/sideImage.png"
            class="position-absolute sideImage"
          />
        </div>
        <v-card-title> </v-card-title>
        <v-card-text>
          <p class="text-h5 mt-2">Cadastrar-se</p>
          <span>
            Ao cadastrar, você estará criando uma conta no Reddit e concordando
            com nossos
          </span>
          <v-dialog v-model="$store.state.termsOfUse">
            <template v-slot:activator="{ on }">
              <a
                class="text-primary"
                v-on="on"
                @click="$store.state.termsOfUse = true"
                href="#"
                >Termos de Uso</a
              >
            </template>
          </v-dialog>
          <TermsOfUse />
          e
          <v-dialog v-model="$store.state.politics">
            <template v-slot:activator="{ on }">
              <a
                class="text-primary"
                v-on="on"
                @click="$store.state.politics = true"
                href="#"
                >Política de Privacidade.</a
              >
            </template>
          </v-dialog>
          <Politics />
          <v-text-field label="Nome" class="mt-4" outlined dense></v-text-field>
          <v-menu
            ref="menu"
            v-model="menu"
            :close-on-content-click="false"
            :return-value.sync="date"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                v-model="date"
                label="Nascimento"
                prepend-icon="mdi-calendar"
                readonly
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker v-model="date" no-title scrollable>
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="menu = false"> Cancel </v-btn>
              <v-btn text color="primary" @click="$refs.menu.save(date)">
                OK
              </v-btn>
            </v-date-picker>
          </v-menu>
          <v-divider></v-divider>
          <div class="row">
            <div class="col-sm-12 col-md-6">
              <v-text-field label="Email" outlined dense></v-text-field>
              <v-text-field label="Senha" outlined dense></v-text-field>
              <v-text-field
                label="Confirme a senha"
                outlined
                dense
              ></v-text-field>
            </div>
            <div class="col-sm-12 col-md-6">
              <!-- captcha -->
            </div>
          </div>
          <v-btn
            class="float-right"
            color="primary"
            rounded
            @click="$store.state.register = false"
          >
            Cadastrar
          </v-btn>
        </v-card-text>
      </div>
    </v-card>
  </v-dialog>
</template>

<script>
import TermsOfUse from '../modals/TermsOfUse';
import Politics from '../modals/Politics';

export default {
  components: {
    TermsOfUse,
    Politics,
  },
  data() {
    return {
      date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      menu: false,
    };
  },
};
</script>

<style scoped>
.sideImage {
  width: 20%;
  height: 100%;
}
</style>
