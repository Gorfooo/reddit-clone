<template>
  <div class="defaultBackground">
    <Header />
    <div class="container-fluid mt-6">
      <div class="row">
        <div class="col-md-12 col-lg-7 col-sm-12 offset-lg-1">
          <v-card v-for="n in 10" :key="n" class="disabledCard">
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
        </div>
        <div class="col-1">
          <Sidebar />
        </div>
      </div>
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
