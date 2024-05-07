<template>
  <!-- Gallery image component -->
  <img :src="image" :alt="alt" />
</template>

<script>
export default {
  name: 'GalleryImage', // Component name
  props: {
    // Define props for the image source and alt text
    image: {
      type: String, // Type validation for image source
      required: true // Image source is required
    },
    alt: {
      type: String, // Type validation for alt text
      required: true // Alt text is required
    }
  }
}
</script>

<style scoped>
/* Scoped styles for the GalleryImage component */
img {
  object-fit: cover; /* Ensure the image covers the entire container */
  width: 30vw; /* Set width relative to the viewport width */
  height: 40vh; /* Set height relative to the viewport height */
  margin: 20px auto; /* Center the image horizontally with some margin */
}

/* Media query for responsive design */
@media (max-width: 768px) {
  /* Adjust image width for small screens */
  img {
    width: 100vw; /* Set image width to full viewport width */
  }
}
</style>
