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
        <Card data-aos="fade-right" :parrafo="parrafo" :subtitulo1="subtitulo1" :subtitulo2="subtitulo2" :img="img"
          :img_classes="img_classes">
        </Card>
      </div>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
      <div class="col bg-slate-500">
        aqui va un resumen de lo que me gusta
      </div>
      <div class="col bg-slate-600">
        aqui va el cv
      </div>
      <div class="col">
        <CardHabilidades></CardHabilidades>
      </div>
    </div>
  </div>
</template>

<script>
import CardHabilidades from '@/components/CardHabilidades.vue';
import Card from '../components/Card.vue'
export default {
  name: 'HomeView',
  components: {
    Card,
    CardHabilidades
  },
  mounted() {
    this.parrafo = 'Como apasionado de la tecnología, he desarrollado habilidades en lenguajes de programación como Python, Java y C#. Tengo experiencia en proyectos de escritorio, web e inteligencia artificial. ¡Es un placer compartir mis habilidades, espero trabajemos en proyectos emocionantes en el futuro!';
    this.subtitulo1 = 'Lenin Acosta';
    this.subtitulo2 = 'Desarrollador de software';
    this.img = require('../assets/lenin.jpg');
  },
  data() {
    return {
      parrafo: '',
      subtitulo1: '',
      subtitulo2: '',
      img: '',
      img_classes: 'w-1/4 h-1/4 grayscale'
    }
  }
}
</script>


<style scoped>
#saludo1 {
  display: block;
  white-space: nowrap;
  /* border-right: 4px solid; */
  width: 11ch;
  animation: typing 1s steps(11);
  overflow: hidden;
}

@keyframes typing {
  from {
    width: 0;
  }
}

/* @keyframes blink{
  50%{border-color: transparent;}
} */</style>