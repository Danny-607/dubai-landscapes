<template>
  <h1>Our Projects:</h1>
  <div class="container">
    <GalleryImage v-for="image in images" :key="image.id" :image="image.url" :alt="image.alt" />
  </div>
</template>

<script>
import GalleryImage from '@/components/GalleryImage.vue'
export default {
  name: 'GalleryView',
  components: {
    GalleryImage
  },
  data() {
    return {
      images: [
        { id: 1, url: 'src/assets/016A3060.jpg', alt: 'Placeholder image 1' },
        { id: 2, url: 'src/assets/016A3065.jpg', alt: 'Placeholder image 2' },
        { id: 3, url: 'src/assets/016A3170.jpg', alt: 'Placeholder image 3' },
        { id: 4, url: 'src/assets/016A3216-HDR.jpg', alt: 'Placeholder image 3' },
        { id: 5, url: 'src/assets/016A3289.jpg', alt: 'Placeholder image 3' },
        { id: 6, url: 'src/assets/016A3308.jpg', alt: 'Placeholder image 1' },
        { id: 7, url: 'src/assets/CM3_4146.jpg', alt: 'Placeholder image 2' },
        { id: 8, url: 'src/assets/CM3_4424.jpg', alt: 'Placeholder image 3' },
        { id: 9, url: 'src/assets/CM3_4450.jpg', alt: 'Placeholder image 3' },
        { id: 10, url: 'src/assets/IMG_9373.jpg', alt: 'Placeholder image 3' },
        { id: 11, url: 'src/assets/IMG_9413.jpg', alt: 'Placeholder image 1' },
        { id: 12, url: 'src/assets/IMG_9497.jpg', alt: 'Placeholder image 2' },
        { id: 13, url: 'src/assets/IMG_9528.jpg', alt: 'Placeholder image 3' },
        { id: 14, url: 'src/assets/IMG_9582.jpg', alt: 'Placeholder image 3' },
        { id: 15, url: 'src/assets/IMG_9596.jpg', alt: 'Placeholder image 3' },
        { id: 16, url: 'src/assets/IMG_9648.jpg', alt: 'Placeholder image 1' },
        { id: 17, url: 'src/assets/IMG_9665.jpg', alt: 'Placeholder image 2' },
        { id: 18, url: 'src/assets/IMG_9685.jpg', alt: 'Placeholder image 3' },
        { id: 19, url: 'src/assets/IMG_9687.jpg', alt: 'Placeholder image 3' },
        { id: 20, url: 'src/assets/IMG_9695.jpg', alt: 'Placeholder image 3' },
        { id: 21, url: 'src/assets/IMG_9700.jpg', alt: 'Placeholder image 1' },
        { id: 22, url: 'src/assets/IMG_9725.jpg', alt: 'Placeholder image 2' },
        { id: 23, url: 'src/assets/IMG_9772.jpg', alt: 'Placeholder image 3' },
        { id: 24, url: 'src/assets/IMG_9804.JPG', alt: 'Placeholder image 3' },
        { id: 25, url: 'src/assets/016A3298.jpg', alt: 'Placeholder image 3' }
      ]
    }
  },
  methods: {},
  mounted() {}
}
</script>

<style scoped>
img {
  width: 30vw;
  height: 40vh;
  margin: 0 auto;
}
.container {
  grid-row: 3;
  grid-column: span 2;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
</style>
