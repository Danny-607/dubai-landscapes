<template>
  <header>
    <nav>
      <HamburgerMenu />
      <div class="left">
        <RouterLink :to="{ name: 'home' }"><img :src="logo" alt="Logo image" /></RouterLink>
      </div>
      <div class="right">
        <RouterLink :to="{ name: 'services' }">Services</RouterLink>
        <RouterLink :to="{ name: 'faq' }">FAQ</RouterLink>
        <router-link :to="{ name: 'gallery' }">Gallery</router-link>
        <router-link :to="{ name: 'contact' }">Contact</router-link>
      </div>
    </nav>
  </header>
</template>

<script>
import logo from '@/assets/logo.jpeg'
import HamburgerMenu from './HamburgerMenu.vue'
import { RouterLink } from 'vue-router'

export default {
  name: 'NavbarComponent',
  components: {
    RouterLink,
    HamburgerMenu
  },
  data() {
    return {
      logo
    }
  }
}
</script>

<style scoped>
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
  height: 15vh;
}
nav img {
  width: 125px;
  height: 15vh;
}
a {
  text-decoration: none;
  color: #4b4632;
}

.right a {
  margin-left: 1rem;
  font-size: 2rem;
  text-decoration: underline;
}
.left {
  width: 100%;
}
a:hover {
  color: #1b7000;
}
@media (max-width: 768px) {
  .right {
    display: none;
  }

  header {
    width: 100%;
  }
}
</style>
