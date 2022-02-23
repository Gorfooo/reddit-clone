<template>
  <div class="position-fixed chatScreen bg-light p-3">
    <div class="row">
      <div class="col-4">
        <h6 class="font-weight-bold text-nowrap">Bate-papo</h6>
        <div class="d-flex justify-content-around">
          <v-btn text rounded>Todos</v-btn>
          <v-btn text rounded>Dms</v-btn>
        </div>
        <v-list nav dense>
          <v-list-item
            v-for="(user, i) in users"
            :key="i"
            class="dropdown-item d-flex align-items-center"
          >
            <v-list-item-icon>
              <img src="../assets/default_user.png" class="profile-pic mr-2" />
              <v-list-item-title v-text="user"></v-list-item-title>
            </v-list-item-icon>
          </v-list-item>
        </v-list>
      </div>
      <div class="borda" />
      <div class="col position-relative">
        <div class="d-flex">
          <!-- wrap -->
          <img src="../assets/default_user.png" class="profile-pic mr-2" />
          <h6 class="flex-grow-1">Gorfo</h6>
          <v-icon @click="$store.state.showChat = false">mdi-close</v-icon>
        </div>
        <hr />
        <div class="d-flex flex-column overflow-auto text-wrap">
          <div class="messages">
            <div class="mb-2">
              <p class="text-muted small mb-0">12:00</p>
              <span
                >conversa conversa conversa conversa conversa conversa conversa
                conversa conversa conversa conversa conversa</span
              >
            </div>
            <div
              class="
                d-flex
                flex-column
                align-items-end
                myMessageBackground
                mb-2
              "
            >
              <p class="text-muted small mb-0">12:00</p>
              <span class=""
                >conversa conversa conversa conversa conversa conversa conversa
                conversa conversa conversa conversa conversa</span
              >
            </div>
            <div class="mb-2">
              <p class="text-muted small mb-0">12:00</p>
              <span
                >conversa conversa conversa conversa conversa conversa conversa
                conversa conversa conversa conversa conversa</span
              >
            </div>
            <div class="mb-2">
              <p class="text-muted small mb-0">12:00</p>
              <span
                >conversa conversa conversa conversa conversa conversa conversa
                conversa conversa conversa conversa conversa</span
              >
            </div>
            <div class="mb-2">
              <p class="text-muted small mb-0">12:00</p>
              <span
                >conversa conversa conversa conversa conversa conversa conversa
                conversa conversa conversa conversa conversa</span
              >
            </div>
            <div class="mb-2">
              <p class="text-muted small mb-0">12:00</p>
              <span
                >conversa conversa conversa conversa conversa conversa conversa
                conversa conversa conversa conversa conversa</span
              >
            </div>
          </div>
        </div>
        <v-textarea
          outlined
          rows="2"
          dense
          no-resize
          hide-details="true"
          class="position-absolute messageTextField"
        >
          <v-icon slot="append-outer" class="outer-icon">mdi-send</v-icon>
        </v-textarea>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      kickMod: false,
      users: [
        'user 1',
        'user 2',
        'user 1',
        'user 1',
        'user 1',
        'user 1',
        'user 1',
        'user 1',
        'user 1',
        'user 1',
        'user 5',
      ],
    };
  },
};
</script>

<style scoped>
.chatScreen {
  bottom: -12px;
  right: 2vw;
  z-index: 1;
  width: 40rem;
  border-radius: 1rem;
  height: 30rem;
}
.borda {
  border-left: solid 1px #dae0e6;
  height: 35rem;
}
.myMessageBackground {
  background-color: #aeb9cc;
  border-radius: 0.5rem;
  padding: 5px;
}
.messageTextField {
  bottom: 6.3rem;
  width: 90%;
}
.theme--light.v-list {
  background-color: #f8f9fa !important;
  cursor: pointer;
  height: 24rem;
  overflow: auto;
}
.messages {
  overflow: auto;
  height: 20rem;
}
.outer-icon {
  margin-top: 0.6rem;
}

::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: #c5c5c5;
}

/*fullscreen*/
@media only screen and (max-width: 1280px), screen and (max-height: 516px) {
  .chatScreen {
    width: 100%;
    height: 100%;
    border-radius: 0px;
    bottom: 0px;
    right: 0px;
  }
  .theme--light.v-list {
    height: calc(100vh - 5rem);
  }
  .borda {
    border-left: solid 1px #dae0e6;
    height: 100vh;
  }
  .messages {
    height: calc(100vh - 10rem);
  }
  .messageTextField {
    bottom: 1.5rem;
  }
}
</style>
