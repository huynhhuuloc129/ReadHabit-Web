<script setup lang="ts">
import { RouterView } from 'vue-router'
import FooterComponent from "./components/FooterComponent.vue"
function scrollToTop() {
  window.scrollTo(0, 0);
}
</script>

<template>
  <header>
    <meta name="viewport" content="width=device-width, initial-scale=1">
  </header>
  <div id="router">
    <Suspense>
      <RouterView />
    </Suspense>
  </div>
  <button @click="scrollToTop()" type="button" class="btn btn-danger btn-floating btn-lg" id="btn-back-to-top">
    <i class="fas fa-arrow-up"></i>
  </button>
  <footer>
    <FooterComponent></FooterComponent>
  </footer>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@100..900&display=swap');
@import "https://unpkg.com/@vueup/vue-quill@1.0.0-beta.9/dist/vue-quill.snow.css";
/* @import url('https://fonts.googleapis.com/css2?family=Tilt+Warp&display=swap'); */
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+HK:wght@100..900&family=Reem+Kufi+Fun:wght@400..700&family=Tilt+Warp&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+HK:wght@100..900&family=Reem+Kufi+Fun:wght@400..700&family=Signika+Negative:wght@300..700&family=Signika:wght@300..700&family=Tilt+Warp&display=swap');

:root {
  --main-color: #2B517A;
}
body{
  font-family:"Signika", sans-serif;
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

a {
  color: var(--main-color);
}

/* body {
  font-family: "Lexend Deca", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
} */

#sidebar-btn {
  position: fixed;
}

#router {
  min-height: 100vh;
}
@media only screen and (max-width: 1300px) {
  body {
    font-size: xx-small;
  }
}
</style>
