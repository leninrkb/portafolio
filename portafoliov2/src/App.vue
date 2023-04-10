<template>
  <Navbar></Navbar>
  <div class="container mx-auto mt-10">
    <router-view></router-view>
  </div>
  <div class="h-40"></div>
  <Footer></Footer>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
export default{
  name:'App',
  components:{
    Navbar,
    Footer,
  }
}
</script>

<style>
body{
  background-image: repeating-linear-gradient(135deg, rgb(0,0,0) 0px, rgb(0,0,0) 10px,transparent 10px, transparent 11px),repeating-linear-gradient(22.5deg, rgb(0,0,0) 0px, rgb(0,0,0) 10px,transparent 10px, transparent 11px),linear-gradient(90deg, hsl(194,74%,56%),hsl(266,74%,56%),hsl(338,74%,56%),hsl(50,74%,56%),hsl(122,74%,56%));
  /* background-image: linear-gradient(45deg, rgb(33,33,33) 0%,transparent 73%),repeating-linear-gradient(90deg, rgba(127, 127, 127,0.1) 0px, rgba(127, 127, 127,0.1) 1px,transparent 1px, transparent 17px),repeating-linear-gradient(0deg, rgba(127, 127, 127,0.1) 0px, rgba(127, 127, 127,0.1) 1px,transparent 1px, transparent 17px),linear-gradient(0deg, rgb(33,33,33),rgb(33,33,33)); */
}


</style>

