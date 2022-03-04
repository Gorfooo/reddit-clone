<template>
  <v-dialog v-model="$store.state.modalStore.login" width="600px">
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
          <v-icon @click="toggleLogin()" class="float-right mt-2"
            >mdi-close</v-icon
          >
          <p class="text-h5 mt-2">Login</p>
          <span>
            Ao cadastrar, você estará criando uma conta no Reddit e concordando
            com nossos
          </span>
          <v-divider></v-divider>
          <v-text-field
            label="Email"
            outlined
            dense
            v-model="loginUser.email"
          ></v-text-field>
          <v-text-field
            label="Senha"
            outlined
            dense
            v-model="loginUser.password"
          ></v-text-field>
          <span> Esqueceu a senha? </span>
          <a href="#" class="text-primary">Clique aqui</a>
          <span> para alterá-la.</span>
          <div class="mt-3">
            <span>Primeira vez no Reddit?</span>
            <v-dialog v-model="$store.state.modalStore.register">
              <template v-slot:activator="{ on }">
                <a v-on="on" class="text-primary"> Cadastre-se</a>
              </template>
            </v-dialog>
            <Register />
          </div>
          <v-btn
            class="float-right"
            color="primary"
            rounded
            @click="checkForm()"
          >
            <!-- @click="toggleLogin()" -->
            Logar
          </v-btn>
        </v-card-text>
      </div>
    </v-card>
  </v-dialog>
</template>

<script>
import Register from './Register';

export default {
  components: {
    Register,
  },
  data() {
    return {
      loginUser: {
        email: '',
        password: '',
      },
    };
  },
  methods: {
    toggleLogin() {
      this.$store.commit('modalStore/toggleLogin');
    },
  },
};
</script>

<style scoped>
.sideImage {
  width: 20%;
  height: 100%;
}
</style>
