<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import FooterComponent from "./components/FooterComponent.vue"
</script>

<template>
  <header>
  </header>
  <RouterView />

  <footer>
    <FooterComponent></FooterComponent>
  </footer>
</template>

<style></style>
