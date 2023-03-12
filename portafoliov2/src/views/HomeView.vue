<template>
  <div class="gri grid-cols-1">
    <div class="col mt-10 mx-3">
      <Card :parrafo="parrafo" 
      :subtitulo1="subtitulo1" 
      :subtitulo2="subtitulo2" 
      :img="img"
      :img_classes="img_classes"></Card>
    </div>
  </div>
</template>

<script>
import Card from '../components/Card.vue'
export default {
  name: 'HomeView',
  components:{
    Card
  },
  mounted(){
    this.parrafo = 'Como apasionado de la tecnología, he desarrollado habilidades en lenguajes de programación como Python, Java y C#. Tengo experiencia en proyectos de escritorio, web e inteligencia artificial. ¡Estoy emocionado de compartir mis habilidades y espero trabajar en proyectos emocionantes en el futuro!';
    this.subtitulo1 = 'Lenin Acosta';
    this.subtitulo2 = 'Desarrollador de software';
    this.img = require('../assets/lenin.jpg');
  },
  data(){
    return{
      parrafo:'',
      subtitulo1:'',
      subtitulo2:'',
      img:'',
      img_classes:'w-1/4 h-1/4 grayscale'
    }
  }
}
</script>