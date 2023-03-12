<template>
  <Navbar></Navbar>
  <router-view></router-view>
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

