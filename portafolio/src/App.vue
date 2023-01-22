<template>
  <div id="butter">
    <v-app :theme="theme">
      <!-- <div data-aos="fade-down" data-aos-duration="2000">
      <v-app-bar :elevation="2" rounded>
        <template v-slot:append>
          <v-btn icon="mdi-heart"></v-btn>

          <v-btn icon="mdi-magnify"></v-btn>

          <v-btn icon="mdi-dots-vertical"></v-btn>
        </template>
        <v-btn :prepend-icon="theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'"
          @click="cambiarTema()"></v-btn>
      </v-app-bar>
    </div> -->
    
      <div data-aos="fade-up" data-aos-duration="2000">
        <v-main>
          <!-- <v-container> -->
          <v-parallax src="./assets/img/fondo3.png">
            <Logo></Logo>
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
      <div>
        <Footer></Footer>
      </div>
    </v-app>
  </div>
</template>



<script setup >
import { ref } from 'vue'
import Footer from './components/Footer.vue'
import Carousel from './components/Carousel.vue';
import InfoPersonal from './components/InfoPersonal.vue';
import HabilidadesDomina from './components/HabilidadesDomina.vue'
import Experiencia from './components/Experiencia.vue'
import Contacto from './components/Contacto.vue'
import Logo from './components/Logo.vue';
import { onMounted } from "vue";
import AOS from "aos";
import { magicMouse } from 'magicmouse.js'

onMounted(() => {
  AOS.init();
})

// magicmouse start
const options = {
  "cursorOuter": "circle-basic",
  "hoverEffect": "circle-move",
  "hoverItemMove": false,
  "defaultCursor": false,
  "outerWidth": 30,
  "outerHeight": 30
};
magicMouse(options);
// magicmouse end

const theme = ref('dark')
function cambiarTema() {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
}
</script>

<style>
html {
  scroll-behavior: smooth;
}

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

.espacios-laterales-medio {
  margin-left: 50px;
  margin-right: 50px;
}
</style>



