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
          <v-icon @click="toggleRegister()" class="float-right mt-2"
            >mdi-close</v-icon
          >
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
              :error="$v.newUser.name.$error"
              v-model="newUser.name"
            ></v-text-field>
            <div class="text-danger" v-if="$v.newUser.name.$error">
              Nome deve ter ao menos
              {{ $v.newUser.name.$params.minLength.min }} caracteres
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
                :error="$v.newUser.birthDate.$error"
                v-model="newUser.birthDate"
              ></v-text-field>
              <div class="text-danger" v-if="$v.newUser.birthDate.$error">
                Informe uma data válida
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
                  :error="$v.newUser.email.$error"
                  v-model="newUser.email"
                ></v-text-field>
                <div class="text-danger" v-if="$v.newUser.email.$error">
                  Informe um e-mail válido
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
                  :error="$v.newUser.password.$error"
                  v-model="newUser.password"
                ></v-text-field>
                <div class="text-danger" v-if="$v.newUser.password.$error">
                  Senha deve ter ao menos
                  {{ $v.newUser.password.$params.minLength.min }} caracteres
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
                  :error="$v.newUser.passwordConfirmation.$error"
                  v-model="newUser.passwordConfirmation"
                ></v-text-field>
                <div
                  class="text-danger"
                  v-if="$v.newUser.passwordConfirmation.$error"
                >
                  Suas senhas devem ser iguais
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
            @click="checkForm()"
          >
            Cadastrar
          </v-btn>
          <!-- <v-btn
            class="float-right"
            color="primary"
            rounded
            @click="showData()"
          >
            teste
          </v-btn> -->
        </v-card-text>
      </div>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapState } from 'vuex';
import { required, minLength, email, sameAs } from 'vuelidate/lib/validators';
import moment from 'moment';
import TermsOfUse from '../modals/TermsOfUse';
import Politics from '../modals/Politics';

const validDate = (value) => moment(value, 'DD-MM-YYYY', true).isValid();
moment.suppressDeprecationWarnings = true;

export default {
  components: {
    TermsOfUse,
    Politics,
  },
  computed: {
    ...mapState('auth', ['newUser']),
  },
  validations: {
    newUser: {
      name: {
        required,
        minLength: minLength(3),
      },
      birthDate: {
        required,
        validDate,
      },
      email: {
        required,
        email,
      },
      password: {
        required,
        minLength: minLength(6),
      },
      passwordConfirmation: {
        required,
        sameAsPassword: sameAs(function getPassword() {
          return this.newUser.password;
        }),
      },
    },
  },
  methods: {
    toggleRegister() {
      this.$store.commit('modalStore/toggleRegister');
    },
    async storeNewUser() {
      await this.axios({
        method: 'post',
        url: '/user/create',
        withCredentials: false,
        params: {
          userData: this.newUser,
        },
      })
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        })
        .then(() => {
          this.toggleRegister();
        });
    },
    checkForm() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.storeNewUser();
      }
    },
    // showData() {},
  },
};
</script>

<style scoped>
.sideImage {
  width: 20%;
  height: 100%;
}
</style>
