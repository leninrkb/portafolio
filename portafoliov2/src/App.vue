<template>
  <Navbar></Navbar>
  <div class="container mx-auto">
    <router-view></router-view>
  </div>
</template>

<script>
import HomeView from './views/HomeView.vue';
import Navbar from './components/Navbar.vue';
export default{
  name:'App',
  components:{
    HomeView,
    Navbar
  }
}
</script>

<style>
body{
  background-color: dimgrey;
}
</style>

