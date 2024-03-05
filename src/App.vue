<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HeaderComponent from "./components/HeaderComponent.vue"
import FooterComponent from "./components/FooterComponent.vue"
import SidebarComponent from "./components/SidebarComponent.vue"
</script>

<template>
  <header>
    
  </header>
  <HeaderComponent></HeaderComponent>
  <SidebarComponent></SidebarComponent>
  <RouterView />
  <footer>
    <FooterComponent></FooterComponent>
  </footer>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@100..900&display=swap');
body::-webkit-scrollbar {
  display: none;
}
/* body{
  background-image: url("./assets/Cover.jpg");
  background-size: 100vw 100vh;
  background-repeat: no-repeat;
} */
body {
  font-family: "Lexend Deca", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
}
#sidebar-btn {
  position: fixed;
}
</style>
