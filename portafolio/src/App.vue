<template>
  <v-app :theme="theme">
    <v-app-bar :elevation="2" rounded>
      <template v-slot:append>
        <v-btn icon="mdi-heart"></v-btn>

        <v-btn icon="mdi-magnify"></v-btn>

        <v-btn icon="mdi-dots-vertical"></v-btn>
      </template>
      <v-btn :prepend-icon="theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'" @click="onClick">Cambia el
        tema</v-btn>
    </v-app-bar>

    <v-main>
      <!-- <v-container> -->
      <v-parallax src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">
        <div id="contenido">
          <div id="slider">
            <h2>Aqui van mis proyectos</h2>
            <v-carousel show-arrows="hover">
              <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" cover></v-carousel-item>

              <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg" cover></v-carousel-item>

              <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" cover></v-carousel-item>
            </v-carousel>
          </div>
          <div id="info">
            <v-card title="capturar casco" text="..." variant="tonal">
              <v-card-actions>
                <v-btn>Click me</v-btn>
              </v-card-actions>
            </v-card>
          </div>
        </div>
      </v-parallax>
      <!-- </v-container> -->
    </v-main>
  </v-app>



</template>

<script setup>
import { ref } from 'vue'

const theme = ref('dark')

function onClick() {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
}
</script>


<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
}
</script>
