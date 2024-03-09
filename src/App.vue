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
        class="btn btn-danger btn-floating btn-lg"
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
:root{
  --main-color:#2B517A;
}
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
a{
  color: var(--main-color);
}
body {
  font-family: "Lexend Deca", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
}
#sidebar-btn {
  position: fixed;
}
</style>
