<template>
  <img :src="image" alt="" />
  <section class="right-content">
    <h2>{{ header }}</h2>
    <ul v-if="items && items.length > 0">
      <li v-for="(item, index) in items" :key="index">
        <img class="svg" v-if="item.svg" :src="item.svg" :alt="svgAlt" />
        {{ item.text }}
      </li>
    </ul>
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
  grid-column: 1;
}

.right-content {
  grid-column: 2;
  background-color: #4b4632;
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
ul {
  /* width: 40%; */
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: end;
  height: 75%;
}
li {
  list-style-type: none;
  font-size: 3rem;
  width: 50%;
}
.svg {
  width: 40px;
  height: 40px;
}

@media (max-width: 768px) {
  img {
    height: 300px;
    margin-bottom: 10px;
  }
  p {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }
  h2 {
    font-size: 1.2rem;
  }
  ul {
    height: fit-content;
    justify-content: space-around;
  }
  li {
    font-size: 1rem;
  }
}
</style>
