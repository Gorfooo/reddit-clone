<template>
  <v-row class="d-flex justify-content-around mt-3">
    <v-col sm="12" md="12" lg="2" id="card1">
      <v-card class="pa-4 d-flex align-items-center">
        <v-toolbar-items class="hidden-md-and-down">
          <!-- os melhores de cada comunidade e depois os novos -->
          <a href="">
            <v-btn class="mx-2" depressed x-small>
              <v-icon class="px-2">mdi-fire</v-icon>
              Em destaque
            </v-btn>
          </a>
          <a href="">
            <v-btn class="mx-2" depressed x-small>
              <v-icon class="px-2">mdi-alert-decagram</v-icon>
              Novo
            </v-btn>
          </a>
          <!-- Na semana -->
          <a href="">
            <v-btn class="mx-2" depressed x-small>
              <v-icon class="px-2">mdi-chart-box-outline</v-icon>
              Mais votados
            </v-btn>
          </a>
        </v-toolbar-items>
        <div class="hidden-lg-and-up">
          <div class="dropdown">
            <div
              class="btn dropdown-toggle"
              type="button"
              data-toggle="dropdown"
            >
              <v-icon>mdi-rocket</v-icon>
              <span id="menuOrdenations">Os melhores</span>
            </div>
            <div
              class="dropdown-menu pre-scrollable"
              aria-labelledby="dropdownMenuButton"
            >
              <a href="" class="dropdown-item">
                <v-icon class="px-2">mdi-fire</v-icon>
                Em destaque
              </a>
              <a href="" class="dropdown-item">
                <v-icon class="px-2">mdi-alert-decagram</v-icon>
                Novo
              </a>
              <a href="" class="dropdown-item">
                <v-icon class="px-2">mdi-chart-box-outline</v-icon>
                Mais votados
              </a>
            </div>
          </div>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {};
</script>

<style>
#menuOrdenations {
  padding-right: 2vw;
}
#card1 {
  min-width: 55vw;
}
</style>
