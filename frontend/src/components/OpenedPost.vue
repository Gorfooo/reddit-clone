<template>
  <div class="darkerBackground">
    <div class="container mt-9">
      <div
        class="
          blackBackground
          text-white
          p-3
          pt-2
          d-flex
          justify-content-between
          align-items-center
        "
      >
        <div class="ml-4">
          <span class="mr-1">Título do post</span>
        </div>
        <div class="mr-4">
          <v-icon color="white">mdi-close</v-icon>
          <span>Fechar</span>
        </div>
      </div>
      <div class="midBackground">
        <v-row class="pt-5 px-4">
          <v-col sm="12" md="12" lg="8">
            <v-card class="mb-4 pb-1">
              <div class="d-flex justify-content-start mb-3">
                <div class="d-flex flex-column pt-2 pl-2 align-items-center">
                  <v-icon class="pr-2 likeButton"
                    >mdi-arrow-up-bold-outline</v-icon
                  >
                  <small class="mr-2">1000</small>
                  <v-icon class="pr-2 dislikeButton"
                    >mdi-arrow-down-bold-outline</v-icon
                  >
                  <div class="d-flex">
                    <v-icon small class="pr-2">mdi-gift-outline</v-icon>
                    <small class="mr-2">500</small>
                  </div>
                </div>
                <div class="d-flex flex-column flex-grow-1 p-2">
                  <div class="align-items-start position-relative">
                    <img
                      src="../assets/default_user.png"
                      id="notificationImage"
                      class="img-fluid rounded"
                    />
                    <a href="" class="small font-weight-bold ml-2 linkHover">
                      r/worldnews</a
                    >
                    <small class="text-muted"> ·</small>
                    <span class="text-muted small postSender">
                      Enviado por
                      <a href="" class="linkHover">u/Gorfo</a></span
                    >
                    <span class="text-muted small"> há 9 horas</span>
                  </div>
                  <h6 class="mt-2 font-weight-bold">Título do post</h6>
                  <div>
                    <v-chip class="mr-3 text-white" small color="green" label
                      >Highlight</v-chip
                    >
                    <v-chip class="mr-3 text-white" small color="red" label
                      >NSFW</v-chip
                    >
                  </div>
                  <span class="mt-1 align-items-center d-none d-sm-flex"
                    >Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ullam quo, id aliquid et, repellat accusamus nemo
                    consectetur minus repellendus reiciendis non autem ratione
                    rem tenetur odio, amet animi. Vitae, quaerat.</span
                  >
                  <div class="d-flex justify-content-between">
                    <a href="" class="defaultHover p-1">
                      <v-icon>mdi-chat-outline</v-icon>
                      <small class="text-muted"> 16 comentários</small>
                    </a>
                    <v-dialog v-model="$store.state.award">
                      <template v-slot:activator="{ on }">
                        <a
                          href="#"
                          class="defaultHover p-1"
                          name="premiar"
                          v-on="on"
                          @click="$store.state.award = true"
                        >
                          <v-icon>mdi-gift-outline</v-icon>
                          <small class="text-muted"> Premiar</small>
                        </a>
                      </template>
                    </v-dialog>
                    <Award />

                    <a
                      href="#"
                      class="defaultHover p-1 d-none"
                      name="despremiar"
                      @click="despremiar"
                    >
                      <v-icon>mdi-gift-off-outline</v-icon>
                      <small class="text-muted"> Despremiar</small>
                    </a>
                    <a href="" class="defaultHover p-1 compartilharLarge">
                      <v-icon>mdi-arrow-right-top</v-icon>
                      <small class="text-muted"> Compartilhar</small>
                    </a>
                    <a href="" class="defaultHover p-1 guardarLarge">
                      <v-icon>mdi-folder-open-outline</v-icon>
                      <small class="text-muted"> Guardar</small>
                    </a>
                    <button data-toggle="dropdown" class="float-right">
                      <v-icon class="float-right">mdi-dots-horizontal</v-icon>
                    </button>
                    <ul class="dropdown-menu pl-0 managePostScreen">
                      <li class="compartilharSmall">
                        <a href="#" class="small dropdown-item">
                          <v-icon class="mr-4">mdi-arrow-right-top</v-icon>
                          <span>Compartilhar</span>
                        </a>
                      </li>
                      <li class="guardarSmall">
                        <a href="#" class="small dropdown-item">
                          <v-icon class="mr-4">mdi-folder-open-outline</v-icon>
                          <span>Guardar</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" class="small dropdown-item">
                          <v-icon class="mr-4">mdi-eye-off-outline</v-icon>
                          <span>Ocultar</span>
                        </a>
                      </li>
                      <li>
                        <v-dialog v-model="$store.state.report">
                          <template v-slot:activator="{ on }">
                            <a
                              href="#"
                              v-on="on"
                              @click="$store.state.report = true"
                              class="small dropdown-item"
                            >
                              <v-icon class="mr-4"
                                >mdi-flag-variant-outline</v-icon
                              >
                              <span>Denunciar</span>
                            </a>
                          </template>
                        </v-dialog>
                      </li>
                    </ul>
                    <div />
                  </div>
                </div>
              </div>
              <p class="mb-1 ml-5">
                Comentando como <span class="text-warning">Gorfo</span>
              </p>
              <div id="toolbar-container" class="whiteBackground">
                <select class="ql-header">
                  <option value="2">Tamanho 2</option>
                  <option value="3">Tamanho 3</option>
                  <option value="4">Tamanho 4</option>
                  <option value="">Normal</option>
                </select>
                <span class="ql-formats">
                  <button class="ql-list" value="ordered" />
                  <button class="ql-list" value="bullet" />
                  <button class="ql-indent" value="-1" />
                  <button class="ql-indent" value="+1" />
                </span>
                <button class="ql-bold" />
                <button class="ql-italic" />
                <button class="ql-underline" />
              </div>

              <quill-editor
                id="commentEditor"
                v-model="comment"
                :options="quillOptions"
                class="bg-light mx-5"
              >
              </quill-editor>

              <v-row>
                <v-col>
                  <v-btn
                    type="submit"
                    @click="saveComment"
                    color="orange"
                    rounded
                    class="mt-2 float-right text-white mr-5"
                    id="saveButton"
                    >Comentar</v-btn
                  >
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <div
                    class="d-flex align-items-center ml-5"
                    id="commentsOrdenation"
                  >
                    <span class="text-warning text-nowrap">Ordenar por:</span>
                    <v-select
                      v-model="selectedOrdenation"
                      :items="ordenation"
                      dense
                      class="mt-4 ml-2"
                    ></v-select>
                  </div>
                </v-col>
              </v-row>

              <div class="mt-4 mx-5">
                <div class="mb-8">
                  <img
                    src="../assets/default_user.png"
                    class="rounded profile-pic"
                  />
                  <span class="ml-3">Gorfo</span>
                  <span class="text-muted"> · há 9 h</span>
                  <div class="commentBorder ml-3 mt-2">
                    <div class="ml-2">
                      <p>comentário</p>
                      <v-icon class="pr-1 likeButton"
                        >mdi-arrow-up-bold-outline</v-icon
                      >
                      <small class="mr-1">1000</small>
                      <v-icon class="pr-1 mr-1 dislikeButton"
                        >mdi-arrow-down-bold-outline</v-icon
                      >
                      <span class="text-muted small font-weight-bold"
                        >Responder</span
                      >
                      <button data-toggle="dropdown" class="ml-2">
                        <v-icon>mdi-dots-horizontal</v-icon>
                      </button>
                      <ul class="dropdown-menu pl-0 managePostScreen">
                        <li>
                          <a href="#" class="small dropdown-item">
                            <v-icon class="mr-4">mdi-pencil</v-icon>
                            <span>Editar</span>
                          </a>
                        </li>
                        <li>
                          <a href="#" class="small dropdown-item">
                            <v-icon class="mr-4">mdi-delete</v-icon>
                            <span>Apagar</span>
                          </a>
                        </li>
                        <li>
                          <v-dialog v-model="$store.state.report">
                            <template v-slot:activator="{ on }">
                              <a
                                href="#"
                                v-on="on"
                                @click="$store.state.report = true"
                                class="small dropdown-item"
                              >
                                <v-icon class="mr-4"
                                  >mdi-flag-variant-outline</v-icon
                                >
                                <span>Denunciar</span>
                              </a>
                            </template>
                          </v-dialog>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="mb-8">
                  <img
                    src="../assets/default_user.png"
                    class="rounded profile-pic"
                  />
                  <span class="ml-3">Gorfo</span>
                  <span class="text-muted"> · há 9 h</span>
                  <div class="commentBorder ml-3 mt-2">
                    <div class="ml-2">
                      <p>comentário</p>
                      <v-icon class="pr-1 likeButton"
                        >mdi-arrow-up-bold-outline</v-icon
                      >
                      <small class="mr-1">1000</small>
                      <v-icon class="pr-1 mr-1 dislikeButton"
                        >mdi-arrow-down-bold-outline</v-icon
                      >
                      <span class="text-muted small font-weight-bold"
                        >Responder</span
                      >
                      <button data-toggle="dropdown" class="ml-2">
                        <v-icon>mdi-dots-horizontal</v-icon>
                      </button>
                      <ul class="dropdown-menu pl-0 managePostScreen">
                        <li>
                          <a href="#" class="small dropdown-item">
                            <v-icon class="mr-4">mdi-pencil</v-icon>
                            <span>Editar</span>
                          </a>
                        </li>
                        <li>
                          <a href="#" class="small dropdown-item">
                            <v-icon class="mr-4">mdi-delete</v-icon>
                            <span>Apagar</span>
                          </a>
                        </li>
                        <li>
                          <v-dialog v-model="$store.state.report">
                            <template v-slot:activator="{ on }">
                              <a
                                href="#"
                                v-on="on"
                                @click="$store.state.report = true"
                                class="small dropdown-item"
                              >
                                <v-icon class="mr-4"
                                  >mdi-flag-variant-outline</v-icon
                                >
                                <span>Denunciar</span>
                              </a>
                            </template>
                          </v-dialog>
                        </li>
                      </ul>
                      <div class="mb-8 mt-5">
                        <img
                          src="../assets/default_user.png"
                          class="rounded profile-pic"
                        />
                        <span class="ml-3">Gorfo</span>
                        <span class="text-muted"> · há 9 h</span>
                        <div class="commentBorder ml-3 mt-2">
                          <div class="ml-2">
                            <p>resposta</p>
                            <v-icon class="pr-1 likeButton"
                              >mdi-arrow-up-bold-outline</v-icon
                            >
                            <small class="mr-1">1000</small>
                            <v-icon class="pr-1 mr-1 dislikeButton"
                              >mdi-arrow-down-bold-outline</v-icon
                            >
                            <span class="text-muted small font-weight-bold"
                              >Responder</span
                            >
                            <button data-toggle="dropdown" class="ml-2">
                              <v-icon>mdi-dots-horizontal</v-icon>
                            </button>
                            <ul class="dropdown-menu pl-0 managePostScreen">
                              <li>
                                <a href="#" class="small dropdown-item">
                                  <v-icon class="mr-4">mdi-pencil</v-icon>
                                  <span>Editar</span>
                                </a>
                              </li>
                              <li>
                                <a href="#" class="small dropdown-item">
                                  <v-icon class="mr-4">mdi-delete</v-icon>
                                  <span>Apagar</span>
                                </a>
                              </li>
                              <li>
                                <v-dialog v-model="$store.state.report">
                                  <template v-slot:activator="{ on }">
                                    <a
                                      href="#"
                                      v-on="on"
                                      @click="$store.state.report = true"
                                      class="small dropdown-item"
                                    >
                                      <v-icon class="mr-4"
                                        >mdi-flag-variant-outline</v-icon
                                      >
                                      <span>Denunciar</span>
                                    </a>
                                  </template>
                                </v-dialog>
                                <Report />
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </v-card>
          </v-col>
          <v-col cols="4" id="openedPostSidebar">
            <v-card class="mx-auto p-2 mb-3">
              <div class="d-flex justify-content-start align-items-center mb-3">
                <img src="../assets/default_user.png" class="mediumPicture" />
                <span class="ml-2 flex-grow-1">r/Runescape</span>
              </div>

              <span class="text-muted mb-3"
                >Descrição do perfil/subreddit que postou</span
              >

              <hr />

              <div class="p-2">
                <v-icon>mdi-account-group</v-icon>
                <span>Criado em 10 de fev. de 2008</span>
              </div>

              <div class="text-center">
                <v-btn rounded outlined color="primary" class="w-75">
                  Seguir
                </v-btn>
              </div>
            </v-card>
            <v-card class="mx-auto mb-3">
              <div class="bg-primary">
                <h6 class="text-white font-weight-bold p-3">
                  Regras do Subreddit
                </h6>
              </div>
              <div>
                <v-list dense>
                  <v-list-item
                    v-for="(rule, i) in rules"
                    :key="i"
                    class="borderBottom"
                  >
                    <v-list-item-icon>
                      <p>{{ i + 1 }}.</p>
                    </v-list-item-icon>

                    <v-list-item-content>
                      <v-list-item-title
                        v-text="rule.text"
                        class="text-dark text-wrap"
                      ></v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </div>
            </v-card>
            <TermsCard />
          </v-col>
        </v-row>
      </div>
    </div>
  </div>
</template>

<script>
import Mixins from '../mixins';
import TermsCard from './TermsCard';
import Award from './modals/Award';
import Report from './modals/Report';

export default {
  mixins: [Mixins],
  components: {
    TermsCard,
    Award,
    Report,
  },
  data() {
    return {
      rules: [
        { text: 'rule1 rule1 rule1 rule1 rule1 rule1 rule1 rule1 rule1' },
        { text: 'rule2' },
        { text: 'rule3' },
        { text: 'rule4' },
        { text: 'rule5' },
      ],
      ordenation: ['Mais votados', 'Mais recentes', 'Mais antigos'],
      selectedOrdenation: 'Mais votados',
      comment: '',
      quillOptions: {
        placeholder: 'Compose an epic comment...',
        formats: 'inline',
        modules: {
          toolbar: '#toolbar-container',
        },
      },
    };
  },
  methods: {
    saveComment() {
      console.log(this.comment);
    },
  },
};
</script>

<style>
.darkerBackground {
  background-color: #2e2f30;
}

.blackBackground {
  background-color: black;
}

.midBackground {
  background-color: #646d73;
}

.whiteBackground {
  background: white;
}

.commentBorder {
  border-left: solid 2px #dae0e6;
}

.mediumPicture {
  width: 3rem;
  height: 3rem;
}

#commentsOrdenation {
  max-width: 15rem;
}

.posterImage {
  min-width: 10vw;
  max-width: 10vw;
  min-height: 10vh;
  max-height: 10vh;
}

.compartilharSmall {
  display: none;
}

@media only screen and (max-width: 992px) {
  #openedPostSidebar {
    display: none;
  }
}

@media only screen and (max-width: 400px) {
  .compartilharSmall {
    display: inherit;
  }
  .compartilharLarge {
    display: none;
  }
}

.v-select__selection--comma,
.v-icon__svg {
  color: #ffbc21;
}

/* Quill Editor */
.ql-editor {
  height: 8rem !important;
}

.v-text-field > .v-input__control > .v-input__slot:before {
  border: none;
}

#toolbar-container {
  margin-left: 1.25rem;
  margin-right: 1.25rem;
}
</style>
