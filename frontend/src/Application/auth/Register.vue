<template>
  <v-dialog v-model="$store.state.modalStore.register" width="800px">
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
          <v-dialog v-model="$store.state.modalStore.termsOfUse">
            <template v-slot:activator="{ on }">
              <a class="text-primary" v-on="on" href="#">Termos de Uso</a>
            </template>
          </v-dialog>
          <TermsOfUse />
          e
          <v-dialog v-model="$store.state.modalStore.politics">
            <template v-slot:activator="{ on }">
              <a class="text-primary" v-on="on" href="#"
                >Política de Privacidade.</a
              >
            </template>
          </v-dialog>
          <Politics />
          <div class="mb-6">
            <v-text-field
              label="Nome"
              class="mt-4"
              outlined
              dense
              maxlength="40"
              hide-details
              v-bind:error="invalid.name ? true : false"
              v-model="newUser.name"
            ></v-text-field>
            <div class="text-danger" v-if="invalid.name">
              {{ invalid.name }}
            </div>
          </div>

          <div class="row">
            <div class="col-sm-12 col-md-4">
              <v-text-field
                label="Nascimento"
                outlined
                dense
                maxlength="100"
                hide-details
                v-mask="'##-##-####'"
                v-bind:error="invalid.birthDate ? true : false"
                v-model="newUser.birthDate"
              ></v-text-field>
              <div class="text-danger" v-if="invalid.birthDate">
                {{ invalid.birthDate }}
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-sm-12 col-md-6">
              <div class="mb-6">
                <v-text-field
                  label="Email"
                  outlined
                  dense
                  maxlength="100"
                  hide-details
                  v-bind:error="invalid.email ? true : false"
                  v-model="newUser.email"
                ></v-text-field>
                <div class="text-danger" v-if="invalid.email">
                  {{ invalid.email }}
                </div>
              </div>
              <div class="mb-6">
                <v-text-field
                  label="Senha"
                  outlined
                  dense
                  maxlength="25"
                  hide-details
                  type="password"
                  v-bind:error="invalid.password ? true : false"
                  v-model="newUser.password"
                ></v-text-field>
                <div class="text-danger" v-if="invalid.password">
                  {{ invalid.password }}
                </div>
              </div>
              <div class="mb-6">
                <v-text-field
                  label="Confirme a senha"
                  outlined
                  dense
                  maxlength="25"
                  hide-details
                  type="password"
                  v-bind:error="invalid.passwordConfirmation ? true : false"
                  v-model="newUser.passwordConfirmation"
                ></v-text-field>
                <div class="text-danger" v-if="invalid.passwordConfirmation">
                  {{ invalid.passwordConfirmation }}
                </div>
              </div>
            </div>
            <div class="col-sm-12 col-md-6">
              <!-- captcha -->
            </div>
          </div>
          <v-btn
            class="float-right"
            color="primary"
            rounded
            @click="
              checkForm();
              toggleRegister();
            "
          >
            Cadastrar
          </v-btn>
          <v-btn
            class="float-right"
            color="primary"
            rounded
            @click="showData()"
          >
            teste
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
      newUser: {
        name: '',
        email: '',
        password: '',
        passwordConfirmation: '',
        birthDate: '',
      },
      invalid: {
        name: undefined,
        email: undefined,
        password: undefined,
        passwordConfirmation: undefined,
        birthDate: undefined,
      },
    };
  },
  methods: {
    toggleRegister() {
      this.$store.commit('modalStore/toggleRegister');
    },
    saveNewUser() {
      this.$store.commit('auth/setNewUserData', this.newUser);
      console.log(this.$store.state.auth.newUser);
      this.storeUser();
    },
    async storeUser() {
      await this.axios({
        method: 'post',
        url: '/user/create',
        withCredentials: false,
        params: {
          userData: this.$store.state.auth.newUser,
        },
      })
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    checkForm() {
      if (this.newUser.name.length < 3 || this.newUser.name === undefined) {
        this.invalid.name = 'Nome deve ter ao menos 3 caracteres';
      } else {
        this.invalid.name = undefined;
      }

      if (!this.isValidDate()) {
        this.invalid.birthDate = 'Informe uma data válida';
      } else {
        this.invalid.birthDate = undefined;
      }

      if (!this.isValidEmail() || this.newUser.email === undefined) {
        this.invalid.email = 'Email inválido';
      } else {
        this.invalid.email = undefined;
      }

      if (
        this.newUser.password.length < 6 ||
        this.newUser.password === undefined
      ) {
        this.invalid.password = 'Senha deve ter ao menos 6 caracteres';
      } else {
        this.invalid.password = undefined;
      }

      if (this.newUser.passwordConfirmation !== this.newUser.password) {
        this.invalid.passwordConfirmation =
          'As senhas informadas devem ser idênticas';
      } else {
        this.invalid.passwordConfirmation = undefined;
      }

      if (
        !this.invalid.name &&
        !this.invalid.email &&
        !this.invalid.password &&
        !this.invalid.passwordConfirmation &&
        !this.invalid.birthDate
      ) {
        this.newUser.birthDate = this.newUser.birthDate
          .split('-')
          .reverse()
          .join('-');
        this.saveNewUser();
      }
    },
    isValidDate() {
      const isDDMMYYYY =
        /(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d/;
      return this.newUser.birthDate.match(isDDMMYYYY) != null;
    },
    isValidEmail() {
      const regEx =
        // eslint-disable-next-line max-len
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return this.newUser.email.match(regEx) != null;
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
