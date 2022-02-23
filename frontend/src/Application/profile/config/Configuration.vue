<template>
  <div class="container mt-15">
    <h5 class="font-weight-bold">Configurações de perfil</h5>
    <Navbar />
    <div class="d-flex align-items-center mb-6">
      <div class="flex-column flex-grow-1">
        <p class="font-weight-bold mb-1">Endereço de email</p>
        <small class="text-muted">email@gmail.com</small>
      </div>
      <div class="align-items-end">
        <v-dialog v-model="changeEmail" width="400px">
          <template v-slot:activator="{ on }">
            <v-btn v-on="on" outlined rounded small color="primary"
              >Alterar</v-btn
            >
          </template>
          <v-card>
            <v-card-title>
              <v-icon class="mr-2">mdi-email-multiple-outline</v-icon>
              <span class="text-h5">Atualizar seu email</span>
            </v-card-title>
            <v-card-text>
              <span class="text-muted"
                >Altere seu endereço de email abaixo. Enviaremos um novo email
                de verificação para que você possa confirmar este novo
                email.</span
              >
              <v-text-field
                outlined
                class="mt-4"
                dense
                label="Senha Atual"
              ></v-text-field>
              <v-text-field outlined dense label="Email Novo"></v-text-field>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-dialog v-model="changeEmailConfirmation" width="300px">
                <template v-slot:activator="{ on }">
                  <v-btn v-on="on" color="green" text> Trocar Email </v-btn>
                </template>
                <v-card>
                  <v-card-title>
                    <span class="text-h5">Confirmação</span>
                  </v-card-title>
                  <v-card-text>
                    <span class="text-muted">E-mail alterado com sucesso.</span>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                      color="green"
                      text
                      @click="
                        changeEmailConfirmation = false;
                        changeEmail = false;
                      "
                    >
                      Confirmar
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
    </div>
    <div class="d-flex align-items-center mb-6">
      <div class="flex-column flex-grow-1">
        <p class="font-weight-bold mb-1">Alterar senha</p>
        <small class="text-muted">Não compartilhe sua senha com ninguém</small>
      </div>
      <div class="align-items-end">
        <v-dialog v-model="changePassword" width="400px">
          <template v-slot:activator="{ on }">
            <v-btn v-on="on" outlined rounded small color="primary"
              >Alterar</v-btn
            >
          </template>
          <v-card>
            <v-card-title>
              <v-icon class="mr-2">mdi-lock-alert-outline</v-icon>
              <span class="text-h5">Atualizar sua senha</span>
            </v-card-title>
            <v-card-text>
              <span class="text-muted"
                >Preencha os campos abaixo para trocar sua senha.</span
              >
              <v-text-field
                outlined
                class="mt-4"
                dense
                label="Senha Atual"
              ></v-text-field>
              <v-text-field outlined dense label="Senha Nova"></v-text-field>
              <v-text-field outlined dense label="Senha Nova"></v-text-field>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-dialog v-model="changePasswordConfirmation" width="300px">
                <template v-slot:activator="{ on }">
                  <v-btn v-on="on" color="green" text> Trocar Senha </v-btn>
                </template>
                <v-card>
                  <v-card-title>
                    <span class="text-h5">Confirmação</span>
                  </v-card-title>
                  <v-card-text>
                    <span class="text-muted">Senha alterada com sucesso.</span>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                      color="green"
                      text
                      @click="
                        changePasswordConfirmation = false;
                        changePassword = false;
                      "
                    >
                      Confirmar
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
    </div>
    <div class="row mb-6">
      <div class="col-sm-10 col-md-8 col-lg-6">
        <div class="flex-column flex-grow-1">
          <p class="font-weight-bold mb-1">Nome de Exibição</p>
          <small class="text-muted">Altere seu nome de usuário</small>
        </div>
        <v-text-field outlined dense hide-details="true"></v-text-field>
      </div>
    </div>
    <div class="row mb-6">
      <div class="col-sm-10 col-md-8 col-lg-6">
        <div class="flex-column flex-grow-1">
          <p class="font-weight-bold mb-1">Sobre (opcional)</p>
          <small class="text-muted"
            >Uma breve descrição sobre você que aparece no seu perfil.</small
          >
        </div>
        <v-textarea solo class="mt-2" hide-details="true"></v-textarea>
      </div>
    </div>
    <div>
      <span class="text-muted">Imagens</span>
      <v-divider></v-divider>
      <div class="flex-column flex-grow-1">
        <p class="font-weight-bold mb-1">Avatar e banner</p>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="position-relative profileImage">
            <img src="../../../assets/tattoo.png" class="w-25 profileImage" />
            <label
              class="
                v-icon
                notranslate
                mdi
                p-1
                mdi-camera-outline
                text-primary
                theme--light
                position-absolute
                btnUploadProfile
              "
              ><input
                id="profileImage"
                type="file"
                name="profileImage"
                accept="image/*"
                style="display: none"
            /></label>
          </div>
        </div>
        <div class="col-sm-12">
          <div class="position-relative bgImage">
            <img
              src="../../../assets/blue-background.jpg"
              class="w-100 bgImage"
            />
            <label
              class="
                v-icon
                notranslate
                mdi
                p-1
                mdi-camera-outline
                text-primary
                theme--light
                position-absolute
                btnUploadBackground
              "
              ><input
                id="bgImage"
                type="file"
                name="bgImage"
                accept="image/*"
                style="display: none"
            /></label>
          </div>
        </div>
      </div>
      <v-dialog v-model="saved" width="400px">
        <template v-slot:activator="{ on }">
          <v-btn v-on="on" color="primary" rounded class="float-right mt-6"
            >Salvar</v-btn
          >
        </template>
        <v-card>
          <v-card-title>
            <span class="text-h5">Confirmação</span>
          </v-card-title>
          <v-card-text>
            <span class="text-muted">Alterações salvas com sucesso!</span>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green" text @click="saved = false"> Confirmar </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';
import Navbar from './Navbar';

export default {
  components: {
    Navbar,
  },
  data() {
    return {
      changeEmail: false,
      changePassword: false,
      changeEmailConfirmation: false,
      changePasswordConfirmation: false,
      saved: false,
    };
  },
  mounted() {
    $('#bgImage').on('change', function () {
      const $input = $(this);
      if ($input.val().length > 0) {
        const fileReader = new FileReader();
        fileReader.onload = function (data) {
          $('.bgImage').attr('src', data.target.result);
        };
        fileReader.readAsDataURL($input.prop('files')[0]);
        $('.bgImage').css('display', 'block');
      }
    });

    $('#profileImage').on('change', function () {
      const $input = $(this);
      if ($input.val().length > 0) {
        const fileReader = new FileReader();
        fileReader.onload = function (data) {
          $('.profileImage').attr('src', data.target.result);
        };
        fileReader.readAsDataURL($input.prop('files')[0]);
        $('.profileImage').css('display', 'block');
      }
    });
  },
};
</script>

<style>
.btnUploadBackground {
  right: 7px;
  bottom: 0px;
  border: solid 1px #6395ec;
  background-color: white;
  border-radius: 5rem;
}

.btnUploadProfile {
  border: solid 1px #6395ec;
  background-color: white;
  border-radius: 5rem;
  right: 7px;
  bottom: 0px;
}
</style>

<style scoped>
.profileImage {
  border-radius: 0.5rem;
  height: 10rem;
  min-width: 10rem;
  max-width: 10rem;
}

.bgImage {
  border-radius: 0.5rem;
  height: 10rem;
}

@media only screen and (min-width: 515px) {
  .bgImage {
    min-width: 30rem;
    max-width: 30rem;
  }
}
</style>
