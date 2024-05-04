<template>
  <div>
    <button class="hamburger" :class="{ active: isOpen }" @click="toggleMenu">☰</button>
    <div class="menu" v-if="isOpen">
      <RouterLink class="menu-item" to="/" @click="closeMenu">Home</RouterLink>
      <RouterLink class="menu-item" to="/services" @click="closeMenu">Services</RouterLink>
      <RouterLink class="menu-item" to="/faq" @click="closeMenu">FAQ</RouterLink>
      <RouterLink class="menu-item" to="/gallery" @click="closeMenu">Gallery</RouterLink>
      <RouterLink class="menu-item" to="/contact" @click="closeMenu">Contact</RouterLink>
    </div>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router'
export default {
  components: {
    RouterLink
  },
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen
    },
    closeMenu() {
      this.isOpen = false
    }
  }
}
</script>

<style scoped>
.hamburger {
  display: none;
  background-color: grey;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 30px;
  cursor: pointer;
  z-index: 100; /* Make sure the hamburger is above other content */
  position: absolute;
  top: 45px;
  right: 50px;
}
.hamburger.active {
  position: fixed;
}
.menu {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  border: none;
  z-index: 99; /* High z-index to overlay on the rest of the page */
}

.menu-item {
  padding: 10px;
  text-decoration: none;
  color: white;
  border-bottom: 1px solid #eee;
  font-size: 3rem;
}

.menu-item:hover {
  background-color: #f0f0f0;
}

@media (max-width: 768px) {
  .hamburger {
    display: block;
  }
}
</style>
