<template>
  <img :src="image" alt="" />
  <section class="right-content">
    <h2>{{ header }}</h2>
    <p>{{ paragraph }}</p>
  </section>
</template>

<script>
export default {
  name: 'ContentLayoutRight',
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
  grid-column: 1;
}

.right-content {
  grid-column: 2;
  background-color: #4b4632;
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
