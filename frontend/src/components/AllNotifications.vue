<template>
  <div class="defaultBackground">
    <div class="container mt-15">
      <h5 class="font-weight-bold">Notificações</h5>
      <hr />
      <v-card class="p-2">
        <a href="#" class="d-flex dropdown-item">
          <img
            src="../assets/default_user.png"
            id="notificationImage"
            class="img-fluid rounded"
          />
          <div class="d-flex flex-column flex-grow-1">
            <div class="align-items-start ml-2">
              <span>r/worldnews</span>
              <span class="text-muted"> · 5h</span>
            </div>
            <span class="text-muted text-wrap mt-1 ml-2 align-items-start"
              >lorem</span
            >
          </div>

          <v-icon class="align-items-start">mdi-eye-off-outline</v-icon>
        </a>
        <a href="#" class="d-flex dropdown-item">
          <img
            src="../assets/default_user.png"
            id="notificationImage"
            class="img-fluid rounded"
          />
          <div class="d-flex flex-column flex-grow-1">
            <div class="align-items-start ml-2">
              <span>r/worldnews</span>
              <span class="text-muted"> · 5h</span>
            </div>
            <span class="text-muted text-wrap mt-1 ml-2 align-items-start"
              >Comentou em
              <a href="#" class="text-primary linkHover">Título do post</a>
            </span>
          </div>

          <v-icon class="align-items-start">mdi-eye-off-outline</v-icon>
        </a>
        <a href="#" class="d-flex dropdown-item">
          <img
            src="../assets/default_user.png"
            id="notificationImage"
            class="img-fluid rounded"
          />
          <div class="d-flex flex-column flex-grow-1">
            <div class="align-items-start ml-2">
              <span>r/runescape</span>
              <span class="text-muted"> · 5h</span>
            </div>
            <span class="text-muted text-wrap mt-1 ml-2 align-items-start"
              >Você foi aceito/recusado na comunidade
              <a href="#" class="text-primary linkHover">r/Runescape</a>, motivo
              da recusa:xxx
            </span>
          </div>

          <v-icon class="align-items-start">mdi-eye-off-outline</v-icon>
        </a>
        <a href="#" class="d-flex dropdown-item">
          <img
            src="../assets/default_user.png"
            id="notificationImage"
            class="img-fluid rounded"
          />
          <div class="d-flex flex-column flex-grow-1">
            <div class="align-items-start ml-2">
              <span>r/worldnews</span>
              <span class="text-muted"> · 5h</span>
            </div>
            <span class="text-muted text-wrap mt-1 ml-2 align-items-start">
              <a href="#" class="text-primary linkHover">u/User</a> começou a
              seguir você
            </span>
          </div>

          <v-icon class="align-items-start">mdi-eye-off-outline</v-icon>
        </a>
        <a href="#" class="d-flex dropdown-item">
          <img
            src="../assets/default_user.png"
            id="notificationImage"
            class="img-fluid rounded"
          />
          <div class="d-flex flex-column flex-grow-1">
            <div class="align-items-start ml-2">
              <span>r/worldnews</span>
              <span class="text-muted"> · 5h</span>
            </div>
            <span class="text-muted text-wrap mt-1 ml-2 align-items-start"
              >Você recebeu novas mensagens no chat!
            </span>
          </div>

          <v-icon class="align-items-start">mdi-eye-off-outline</v-icon>
        </a>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.defaultBackground {
  height: 100%;
}
</style>
