<template>
  <section class="hero">
    <h2>{{ header }}</h2>

    <button class="hero-btn">Our Services</button>
    <button class="hero-btn"><router-link to="/contact">Contact Us</router-link></button>
  </section>

  <section class="services"></section>
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

  font-size: 3rem;
}
.hero-btn {
  background: #f5f1d6;
  color: #4b4632;
  width: 200px;
  height: 50px;
  font-size: 1.5rem;
  padding: 0.5rem 1rem;
  margin: 1rem;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}
</style>
