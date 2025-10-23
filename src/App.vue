<template>
  <!-- Conditionally show the NavBar (hidden on HomeView) -->
  <transition name="nav-slide" appear>
    <NavBar v-if="$route.name !== 'home'" />
  </transition>

  <!-- Page transition for zoom-in/out -->
  <transition name="zoom" mode="out-in">
    <RouterView />
  </transition>
</template>

<script setup>
import NavBar from "@/components/NavBar.vue";
</script>

<style>
/* ====== ZOOM PAGE TRANSITION ====== */
.zoom-enter-active,
.zoom-leave-active {
  transition: all 0.8s cubic-bezier(0.55, 0.03, 0.24, 1);
}

.zoom-enter-from {
  transform: scale(1.2);
  opacity: 0;
}

.zoom-leave-to {
  transform: scale(0.8);
  opacity: 0;
}

/* ====== NAVBAR SLIDE + FADE ====== */
.nav-slide-enter-active,
.nav-slide-leave-active {
  transition: all 0.8s ease;
}
.nav-slide-enter-from,
.nav-slide-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

/* ====== GLOBAL STYLES ====== */
body {
  margin: 0;
  background-color: black;
  font-family: "JetBrains Mono", monospace;
  overflow-x: hidden;
}
</style>
