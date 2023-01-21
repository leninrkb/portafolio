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
            <div class="espacio-abajo">
              <InfoPersonal></InfoPersonal>
            </div>
            <div class="espacio-abajo espacios-laterales">
              <Carousel></Carousel>
            </div>
            <div class="espacio-abajo espacios-laterales">
              <HabilidadesDomina></HabilidadesDomina>
            </div>
            <div class="espacio-abajo espacios-laterales">
              <Experiencia></Experiencia>
            </div>
            <div class="espacio-abajo espacios-laterales">
              <Contacto></Contacto>
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
import HabilidadesDomina from './components/HabilidadesDomina.vue'
import Experiencia from './components/Experiencia.vue'
import Contacto from './components/Contacto.vue'

const theme = ref('dark')
function cambiarTema() {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
}
</script>

<style>
.margen {
  padding: 10px;
}

.espacio-abajo {
  margin-bottom: 20px;
}

.espacios-laterales {
    margin-left: 20px;
    margin-right: 20px;
}
</style>



