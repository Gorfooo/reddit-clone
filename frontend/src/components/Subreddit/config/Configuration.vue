<template>
  <div class="container mt-15">
    <h5 class="font-weight-bold">Configurações da comunidade</h5>
    <Navbar />
    <div class="row mb-6">
      <div class="col-sm-10 col-md-8 col-lg-6">
        <div class="flex-column flex-grow-1">
          <p class="font-weight-bold mb-1">Nome da comunidade</p>
          <small class="text-muted">Altere o nome da sua comunidade</small>
        </div>
        <v-text-field outlined dense hide-details="true"></v-text-field>
      </div>
    </div>
    <div class="row mb-6">
      <div class="col-sm-10 col-md-8 col-lg-6">
        <div class="flex-column flex-grow-1">
          <p class="font-weight-bold mb-1">Sobre (opcional)</p>
          <small class="text-muted"
            >Uma breve descrição da sua comunidade que aparece na página
            principal.</small
          >
        </div>
        <v-textarea solo class="mt-2" hide-details="true"></v-textarea>
      </div>
    </div>
    <div>
      <span class="text-muted">Imagens</span>
      <v-divider></v-divider>
      <div class="flex-column flex-grow-1">
        <p class="font-weight-bold mb-1">Imagem da comunidade e banner</p>
        <small class="text-muted"
          >Aconselhável usar dimensões 1920x250 ou dimensões próximas à
          isso.</small
        >
      </div>
      <div class="row mt-1">
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
            <img src="../../../assets/blue-background.jpg" class="bgImage" />
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
