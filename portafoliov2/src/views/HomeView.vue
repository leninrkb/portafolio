<template>
  <div class="mx-3">
    <div class="grid grid-cols-1 gap-3">
      <div class="col">
        <span id="saludo1" class="font-mono text-slate-400 text-5xl">¡Hola👋!soy<br>
        </span>
        <span class="font-mono text-cyan-400 text-6xl">Lenin Acosta</span><br>
        <span class="font-mono text-cyan-500 text-4xl">Jr Dev.</span>
      </div>
      <div class="col mb-3">
        <Card data-aos="fade-right" :parrafo="datos_presentacion.parrafo" :subtitulo1="datos_presentacion.nombre"
          :subtitulo2="datos_presentacion.profesion" :img="datos_presentacion.img"
          :img_classes="datos_presentacion.estilos_img">
        </Card>
      </div>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
      <div class="col">
        <CardHabilidades :titulo="datos_card_habilidades[0].titulo" :parrafo="datos_card_habilidades[0].parrafo"
          :lista="datos_card_habilidades[0].lista">
        </CardHabilidades>
      </div>
      <div class="col">
        <CardHabilidades :titulo="datos_card_habilidades[1].titulo" :parrafo="datos_card_habilidades[1].parrafo"
          :lista="datos_card_habilidades[1].lista">
        </CardHabilidades>
      </div>
      <div class="col bg-slate-700">
        fghfgh
        <div class="text-center">
          <p>
            Hover the link to see the
            <a href="#"
              class="transititext-primary text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
              data-te-toggle="tooltip" title="Hi! I'm tooltip">tooltip</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardHabilidades from '@/components/CardHabilidades.vue';
import Card from '../components/Card.vue';
import { datos_habilidades, presentacion } from '../Data.js';
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