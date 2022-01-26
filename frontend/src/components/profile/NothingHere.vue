<template>
  <div class="defaultBackground">
    <Header />
    <div class="container">
      <v-row class="d-flex justify-content-around">
        <v-col sm="12" md="12" lg="2" class="cards">
          <v-row>
            <v-col>
              <v-card v-for="n in 10" :key="n" class="disabledCard cards">
                <div class="d-flex justify-content-start">
                  <div class="d-flex flex-column p-2 align-items-center">
                    <v-icon class="pr-2">mdi-arrow-up-bold-outline</v-icon>
                    <span>&nbsp;</span>
                    <v-icon class="pr-2">mdi-arrow-down-bold-outline</v-icon>
                  </div>
                  <h5
                    v-if="n == 3"
                    class="text-center flex-grow-1 align-self-end m-0"
                  >
                    hmm... Parece que não há nada aqui
                  </h5>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
        <Sidebar />
      </v-row>
    </div>
  </div>
</template>

<script>
import Header from './Header';
import Sidebar from './Sidebar';

export default {
  components: {
    Header,
    Sidebar,
  },
  data() {
    return {};
  },
};
</script>

<style>
.disabledCard {
  opacity: 50%;
}

i {
  cursor: default;
}
</style>
