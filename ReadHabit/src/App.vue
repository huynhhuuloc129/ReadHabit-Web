<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HeaderComponent from "./components/HeaderComponent.vue"

import FooterComponent from "./components/FooterComponent.vue"
</script>

<template>
  <header>
    <HeaderComponent></HeaderComponent>
  </header>
  <RouterView />

  <footer>
    <FooterComponent></FooterComponent>
  </footer>
</template>

<style></style>
