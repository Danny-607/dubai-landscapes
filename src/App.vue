<script setup>
import { RouterLink, RouterView } from 'vue-router'
import logo from '@/assets/logo.jpeg'
</script>

<template>
  <header>
    <nav>
      <div class="left">
        <RouterLink to="/"><img :src="logo" alt="Logo image" /></RouterLink>
      </div>
      <div class="right">
        <RouterLink to="/services">Services</RouterLink>
        <RouterLink to="/contact">FAQ</RouterLink>
        <router-link to="/gallery">Gallery</router-link>
        <router-link to="/contact">Contact</router-link>
      </div>
    </nav>
  </header>

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
header {
  grid-row: 1;
  grid-column: span 3;
}
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #f5f1d6;
  color: white;
  width: 100%;
}
nav img {
  width: 100px;
  height: 100px;
}
a {
  text-decoration: none;
  color: #4b4632;
}
.right a {
  margin-left: 1rem;
  font-size: 2rem;
}
</style>
