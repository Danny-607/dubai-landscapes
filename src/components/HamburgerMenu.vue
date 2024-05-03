<template>
  <div>
    <button class="hamburger" @click="toggleMenu">☰</button>
    <div
      class="menu"
      v-if="isOpen"
      :style="{ transform: isOpen ? 'translateY(0)' : 'translateY(-100%)' }"
    >
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
  background: none;
  border: none;
  font-size: 30px;
  cursor: pointer;
  z-index: 100; /* Make sure the hamburger is above other content */
  position: relative; /* Ensures that the button is clickable and positioned correctly */
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
  transform: translateY(-100%); /* Start above the screen */
  transition: transform 0.5s ease; /* Smooth transition for descending */
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
