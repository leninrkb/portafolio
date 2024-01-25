<template>
  <div class="mx-3">
    <div class="grid grid-cols-1 gap-3">
      <div class="col">
        <span id="saludo1" class="font-mono text-slate-400 text-5xl">¡Hi👋! I'm<br>
        </span>
        <span class="font-mono text-cyan-400 text-6xl">Lenin</span><br>
        <!-- <span class="font-mono text-cyan-500 text-4xl">Jr Dev.</span> -->
      </div>
      <div class="col mb-3">
        <Card data-aos="fade-right" :parrafo="datos_presentacion.parrafo" :subtitulo1="datos_presentacion.nombre"
          :subtitulo2="datos_presentacion.profesion" :img="datos_presentacion.img"
          :img_classes="datos_presentacion.estilos_img">
        </Card>
      </div>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-10" v-for="item in datos_card_habilidades">
      <div class="col">
        <CardHabilidades :titulo="item.titulo" :parrafo="item.parrafo"
          :lista="item.lista">
        </CardHabilidades>
      </div>
    </div>
  </div>
</template>

<script>
import CardHabilidades from '@/components/CardHabilidades.vue';
import Card from '../components/Card.vue';
import { datos_habilidades, presentacion } from '../DatosComponentes.js';
export default {
  name: 'HomeView',
  components: {
    Card,
    CardHabilidades
  },
  data() {
    return {
      datos_presentacion: presentacion,
      datos_card_habilidades: datos_habilidades
    }
  }
}
</script>


<style scoped>
#saludo1 {
  display: block;
  white-space: nowrap;
  border-right: 4px solid;
  width: 12ch;
  animation: typing 1s steps(12), blink .8s infinite step-end alternate;
  overflow: hidden;
}

@keyframes typing {
  from {
    width: 0;
  }
}

@keyframes blink {
  50% {
    border-color: transparent;
  }
}
</style>