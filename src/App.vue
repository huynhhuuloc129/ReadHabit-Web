<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HeaderComponent from "./components/HeaderComponent.vue"
import FooterComponent from "./components/FooterComponent.vue"
</script>

<template>
  <header>
    <HeaderComponent></HeaderComponent>
  </header>
  <div class="offcanvas offcanvas-start w-15" tabindex="-1" id="offcanvas" data-bs-keyboard="false"
    data-bs-backdrop="false">
    <div class="offcanvas-header">
      <h6 class="offcanvas-title d-none d-sm-block" id="offcanvas">Menu</h6>
      <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body px-0">
      <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-start" id="menu">
        <li class="nav-item">
          <a href="#" class="nav-link text-truncate">
            <i class="fs-5 bi-house"></i><span class="ms-1 d-none d-sm-inline">Home</span>
          </a>
        </li>
        <li>
          <a href="#submenu1" data-bs-toggle="collapse" class="nav-link text-truncate">
            <i class="fs-5 bi-speedometer2"></i><span class="ms-1 d-none d-sm-inline">Dashboard</span> </a>
        </li>
        <li>
          <a href="#" class="nav-link text-truncate">
            <i class="fs-5 bi-table"></i><span class="ms-1 d-none d-sm-inline">Orders</span></a>
        </li>
        <li class="dropdown">
          <a href="#" class="nav-link dropdown-toggle  text-truncate" id="dropdown" data-bs-toggle="dropdown"
            aria-expanded="false">
            <i class="fs-5 bi-bootstrap"></i><span class="ms-1 d-none d-sm-inline">Bootstrap</span>
          </a>
          <ul class="dropdown-menu text-small shadow" aria-labelledby="dropdown">
            <li><a class="dropdown-item" href="#">New project...</a></li>
            <li><a class="dropdown-item" href="#">Settings</a></li>
            <li><a class="dropdown-item" href="#">Profile</a></li>
            <li>
              <hr class="dropdown-divider">
            </li>
            <li><a class="dropdown-item" href="#">Sign out</a></li>
          </ul>
        </li>
        <li>
          <a href="#" class="nav-link text-truncate">
            <i class="fs-5 bi-grid"></i><span class="ms-1 d-none d-sm-inline">Products</span></a>
        </li>
        <li>
          <a href="#" class="nav-link text-truncate">
            <i class="fs-5 bi-people"></i><span class="ms-1 d-none d-sm-inline">Customers</span> </a>
        </li>
      </ul>
    </div>
  </div>
  <button id="sidebar-btn" class="btn" data-bs-toggle="offcanvas" data-bs-target="#offcanvas" role="button">
    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor"
      class="bi bi-arrow-right-square-fill" viewBox="0 0 16 16">
      <path
        d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1" />
    </svg>
  </button>
  <RouterView />
  <footer>
    <FooterComponent></FooterComponent>
  </footer>
</template>

<style>
#sidebar-btn {

  position: fixed;
}
</style>
