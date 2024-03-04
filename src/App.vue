<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HeaderComponent from "./components/HeaderComponent.vue"
import FooterComponent from "./components/FooterComponent.vue"
import SidebarComponent from "./components/SidebarComponent.vue"
</script>

<template>
  <header>
    <HeaderComponent></HeaderComponent>
  </header>
  <SidebarComponent></SidebarComponent>
  
  <RouterView />
  <footer>
    <FooterComponent></FooterComponent>
  </footer>
</template>

<style>
body::-webkit-scrollbar {
  display: none;
}
#sidebar-btn {

  position: fixed;
}
</style>
