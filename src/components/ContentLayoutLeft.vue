<template>
  <section class="left-content">
    <h2>{{ header }}</h2>
    <p>{{ paragraph }}</p>
  </section>
  <img :src="image" alt="" />
</template>

<script>
export default {
  name: 'ContentLayoutLeft',
  props: {
    header: {
      type: String,
      required: true
    },
    paragraph: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  grid-column: 2;
}
.left-content {
  grid-column: 1;
  background-color: #a8a191;
  color: white;
  padding: 1rem;
}
h2 {
  font-size: 2rem;
  font-weight: bold;
}

p {
  font-size: 1.5rem;
  font-weight: 300;
  line-height: 1.5;
  margin-bottom: 2rem;
}
</style>
