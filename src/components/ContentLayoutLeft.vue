<template>
  <section class="left-content">
    <h2>{{ header }}</h2>
    <ul v-if="items && items.length > 0">
      <li v-for="(item, index) in items" :key="index">
        <img v-if="item.svg" :src="item.svg" :alt="svgAlt" />

        {{ item }}
      </li>
    </ul>
    <p>{{ paragraph }}</p>
  </section>
  <img :src="image" :alt="alt" />
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
    },
    items: {
      type: Array,
      default: () => [],
      required: false
    },
    alt: {
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
  font-size: 3rem;
  font-weight: bold;
}

p {
  font-size: 2rem;
  font-weight: 300;
  line-height: 1.5;
  margin-bottom: 2rem;
}

@media (max-width: 768px) {
  p {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }
  .left-content {
    margin-bottom: 1rem;
  }
  h2 {
    font-size: 1.2rem;
  }
  img {
    display: none;
  }
}
</style>
