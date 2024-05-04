<template>
  <section class="hero">
    <h2>{{ header }}</h2>

    <router-link class="hero-btn" to="/services">Our Services</router-link>
    <router-link class="hero-btn" to="/contact">Contact Us</router-link>
  </section>
</template>

<script>
export default {
  name: 'HeroComponent',
  props: {
    header: String
  }
}
</script>

<style scoped>
.hero {
  background: url('../assets/hero.jpg') no-repeat center center/cover;
  color: #fff;
  text-align: center;
  padding: 100px 0;
  grid-column: span 2;
  height: 60vh;
  font-size: 3rem;
}
a {
  text-decoration: none;
}
.hero-btn {
  background: #f5f1d6;
  color: #4b4632;
  width: 200px;
  height: 150px;
  font-size: 1.5rem;
  padding: 0.5rem 1rem;
  margin: 1rem;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}

.hero-btn:hover {
  background-color: #4b4632;
  color: #f5f1d6;
}

@media (max-width: 768px) {
  .hero {
    display: none;
  }
}
</style>
