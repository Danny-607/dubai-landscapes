<template>
  <!-- Hamburger menu component -->
  <div>
    <!-- Hamburger button -->
    <button class="hamburger" :class="{ active: isOpen }" @click="toggleMenu">☰</button>
    <!-- Menu items -->
    <div class="menu" v-if="isOpen">
      <!-- RouterLinks for navigation -->
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
      isOpen: false // Flag for toggling the menu
    }
  },
  methods: {
    // Method to toggle the menu visibility
    toggleMenu() {
      this.isOpen = !this.isOpen
    },
    // Method to close the menu when a link is clicked
    closeMenu() {
      this.isOpen = false
    }
  }
}
</script>

<style scoped>
/* Scoped styles for the HamburgerMenu component */
.hamburger {
  display: none;
  background-color: grey;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 30px;
  cursor: pointer;
  z-index: 100; /* Ensure the hamburger is above other content */
  position: absolute;
  top: 45px;
  right: 50px;
}

/* Styling for active hamburger button */
.hamburger.active {
  position: fixed;
}

/* Styling for the menu */
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
  z-index: 99; /* Ensure high z-index to overlay on the rest of the page */
}

/* Styling for menu items */
.menu-item {
  padding: 10px;
  text-decoration: none;
  color: white;
  border-bottom: 1px solid #eee;
  font-size: 3rem;
}

/* Hover effect for menu items */
.menu-item:hover {
  background-color: #f0f0f0;
}

/* Media query for responsive design */
@media (max-width: 768px) {
  /* Display hamburger button on small screens */
  .hamburger {
    display: block;
  }
}
</style>
