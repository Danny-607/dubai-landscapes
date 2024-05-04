<template>
  <img :src="image" :alt="alt" />
</template>

<script>
export default {
  name: 'GalleryImage',
  props: {
    image: {
      type: String,
      required: true
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
  object-fit: cover;
  width: 30vw;
  height: 40vh;
  margin: 20px auto;
}
@media (max-width: 768px) {
  img {
    width: 100vw;
  }
}
</style>
