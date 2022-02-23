<template>
  <div class="mt-12">
    <div class="container p-4">
      <h5>Comunidades em destaque</h5>
      <h6 class="text-muted">
        Explore as comunidades que mais crescem no Reddit. Encontre as
        comunidades mais populares que tratem de seus assuntos favoritos.
      </h6>
    </div>
    <div class="defaultBackground">
      <div class="container">
        <div class="row">
          <div class="col-4" id="categoriesSidebar">
            <v-list dense>
              <v-subheader class="font-weight-bold border-bottom"
                ><h6>Categorias</h6></v-subheader
              >
              <v-list-item-group color="primary">
                <v-list-item
                  v-for="(category, i) in categories"
                  :key="i"
                  @click="selectedCategory = i"
                >
                  <v-list-item-content>
                    <v-list-item-title>{{ category }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </div>
          <div class="d-flex align-items-center ml-4" id="categoriesSelect">
            <span class="text-nowrap">Categoria: </span>
            <v-select
              v-model="selectedCategoryLabel"
              :items="categories"
              dense
              @change="findIndex"
              class="mt-2 ml-2"
            ></v-select>
          </div>
          <div class="col-sm-12 col-md-8">
            <v-list dense>
              <v-subheader class="font-weight-bold border-bottom"
                ><h6>
                  Comunidades que mais cresceram hoje sobre "{{
                    categories[selectedCategory]
                  }}"
                </h6></v-subheader
              >
              <v-list-item-group color="primary">
                <v-list-item
                  v-for="(community, i) in selectedCategoryCommunities"
                  :key="i"
                >
                  <span>{{ i + 1 }}</span>
                  <img src="../assets/avatar.png" class="profile-pic ml-6" />
                  <v-list-item-content>
                    <v-list-item-title class="d-flex align-items-center">
                      <a href="" class="flex-grow-1">{{ community }}</a>
                      <v-btn color="primary" small rounded>Aderir</v-btn>
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedCategory: 0,
      selectedCategoryLabel: '',
      categories: [
        'Todas as comunidades',
        'NSFW',
        'Games',
        'Humor',
        'Diversos',
        'Esportes',
        'Notícias',
        'Natureza',
      ],
      selectedCategoryCommunities: [
        'comunidade 1',
        'comunidade 2',
        'comunidade 3',
        'comunidade 4',
      ],
    };
  },
  methods: {
    findIndex(e) {
      this.selectedCategory = this.categories.indexOf(e);
    },
  },
};
</script>

<style>
#categoriesSelect {
  display: none !important;
}

@media only screen and (max-width: 767px) {
  #categoriesSidebar {
    display: none;
  }
  #categoriesSelect {
    display: inherit !important;
  }
}
</style>
