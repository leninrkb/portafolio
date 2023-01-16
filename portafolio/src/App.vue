<template>
  <v-app :theme="theme">
    <v-app-bar :elevation="2" rounded>
      <template v-slot:append>
        <v-btn icon="mdi-heart"></v-btn>

        <v-btn icon="mdi-magnify"></v-btn>

        <v-btn icon="mdi-dots-vertical"></v-btn>
      </template>
      <v-btn :prepend-icon="theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'" @click="onClick">Cambia el tema</v-btn>
    </v-app-bar>

    <v-main>
      <!-- <v-container> -->
      <v-parallax src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">
        asdasda
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
