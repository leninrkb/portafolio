<template>
  <v-app :theme="theme">
    <div>
      <v-app-bar :elevation="2" rounded>
        <template v-slot:append>
          <v-btn icon="mdi-heart"></v-btn>

          <v-btn icon="mdi-magnify"></v-btn>

          <v-btn icon="mdi-dots-vertical"></v-btn>
        </template>
        <v-btn :prepend-icon="theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'"
          @click="cambiarTema()"></v-btn>
      </v-app-bar>
    </div>
    <div>
      <v-main>
        <!-- <v-container> -->
        <v-parallax src="./assets/img/fondo.jpg">
          <div class="margen">
            <div class="espacio-abajo">
              <InfoPersonal></InfoPersonal>
            </div>
            <div>
              <Carousel></Carousel>
            </div>
          </div>
        </v-parallax>
        <!-- </v-container> -->
      </v-main>
    </div>
    <footer>
      <div>
        <Footer></Footer>
      </div>
    </footer>
  </v-app>


</template>

<script>
export default {
  name: 'App',
  data: () => ({
    //
  }),
}
</script>

<script setup>
import { ref } from 'vue'
import Footer from './components/Footer.vue'
import Carousel from './components/Carousel.vue';
import InfoPersonal from './components/InfoPersonal.vue';

const theme = ref('dark')
function cambiarTema() {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
}
</script>

<style>
.margen {
  padding: 10px;
}
.espacio-abajo{
  margin-bottom: 20px;
}
</style>



