<template>

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
    <v-main>
      <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" duration="3000">
        <v-parallax src="../assets/img/wall2.jpg">
          <!-- <div class="go-top-container">
            <div class="go-top-button">
              <i class="fas fa-chevron-up"></i>
            </div>
          </div> -->
          <div class="espacio-abajo">
            <TypeEffect></TypeEffect>
          </div>
          <div class="espacio-abajo">
            <InfoPersonal :duracion="duracion"></InfoPersonal>
          </div>
          <div class="espacio-abajo espacios-laterales">
            <Carousel :duracion="duracion"></Carousel>
          </div>
          <div class="espacio-abajo espacios-laterales">
            <HabilidadesDomina :duracion="duracion"></HabilidadesDomina>
          </div>
          <!-- <div class="espacio-abajo espacios-laterales">
            <Experiencia :duracion="duracion"></Experiencia>
          </div> -->
          <div class="espacio-abajo espacios-laterales">
            <Contacto :duracion="duracion"></Contacto>
          </div>
        </v-parallax>
      </div>
    </v-main>
    <Footer></Footer>
  </v-app>

</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'HomeView',
  data() {
    return {
      duracion: 1000
    }
  },
  mounted(){
    // window.onscroll = function () {
    //   document.querySelector('.go-top-container').classList.add('show')

    //   if(document.documentElement.scrollTop > 100){
    //     document.querySelector('.go-top-container').classList.add('show')

    //   }else{
    //     document.querySelector('.go-top-container').classList.remove('show')

    //   }
    // };
  }
});
</script>

<script setup >
import { ref } from 'vue'
import Footer from '@/components/Footer.vue'
import Carousel from '@/components/Carousel.vue';
import InfoPersonal from '@/components/InfoPersonal.vue';
import HabilidadesDomina from '@/components/HabilidadesDomina.vue'
import Experiencia from '@/components/Experiencia.vue'
import Contacto from '@/components/Contacto.vue'
// import Logo from '@/components/Logo.vue';
import TypeEffect from '@/components/Adicionales/TypeEffect.vue';
import { onMounted } from "vue";
import AOS from "aos";
// import { magicMouse } from 'magicmouse.js'
// import Scrollbar from 'smooth-scrollbar'

onMounted(() => {
  // Scrollbar.init(document.querySelector('#scroll-container'));
  AOS.init();
})
const theme = ref('dark');
// const options = {
//   "cursorOuter": "circle-basic",
//   "hoverEffect": "circle-move",
//   "hoverItemMove": false,
//   "defaultCursor": false,
//   "outerWidth": 30,
//   "outerHeight": 30
// };
// magicMouse(options);

function cambiarTema() {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
}
</script>


<style>
#scroll-container {
  width: 100%;
  height: 100vh;
}

.margen {
  padding: 10px;
}

.espacio-abajo {
  margin-bottom: 80px;
}

.espacios-laterales {
  margin-left: 20px;
  margin-right: 20px;
}

.espacios-laterales-medio {
  margin-left: 50px;
  margin-right: 50px;
}

.go-top-container {
  position: fixed;
  bottom: 4rem;
  right: 4rem;
  width: 6.6rem;
  height: 6.6;
  z-index: -1;
}

.go-top-buttom {
  width: 0rem;
  height: 0rem;
  background: rgb(123, 233, 211);
  border-radius: 50%;
  cursor: pointer;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
}

.go-top-button i {
  position: absolute;
  font-size: 1.7rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
  color: antiquewhite;
  transition: .2s;
}

.show {
  z-index: 10;
}

.show .go-top-buttom {
  animation: popup .3s ease-in-out;
  width: 6.6rem;
  height: 6.6rem;
  z-index: 11;

}

.show i {
  transform: translate(-50%, -50%) scale(1);
}

@keyframes popup {
  0% {
    width: 0rem;
    height: 0rem;
  }

  50% {
    width: 8rem;
    height: 8rem;
  }

  50% {
    width: 6.6rem;
    height: 6.6rem;
  }
}
</style>
