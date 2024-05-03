<script setup>
import NavbarComponent from './components/NavbarComponent.vue'
</script>

<template>
  <NavbarComponent />
  <RouterView />
</template>

<style>
#app {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-rows: 15vh auto;
  grid-template-columns: 1fr 1fr;
}
</style>
