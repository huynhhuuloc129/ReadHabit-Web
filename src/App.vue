<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import FooterComponent from "./components/FooterComponent.vue"
function scrollToTop() {
  window.scrollTo(0,0);
}
</script>

<template>
  <header>
    
  </header>
  <RouterView />
  <button @click="scrollToTop()"
        type="button"
        class="btn btn-primary btn-floating btn-lg"
        id="btn-back-to-top"
        >
  <i class="fas fa-arrow-up"></i>
</button>
  <footer>
    <FooterComponent></FooterComponent>
  </footer>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@100..900&display=swap');
#btn-back-to-top {
  border-radius: 50%;
  position: fixed;
  bottom: 20px;
  right: 20px;
  /* display: none; */
}
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
