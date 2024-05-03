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
/* Your component's CSS styles go here */
</style>
