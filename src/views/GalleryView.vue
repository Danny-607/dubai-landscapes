<template>
  <section class="header">
    <h1>Our Projects:</h1>
    <p>
      Over the years, the team here at Dubai-Landscapes has worked on a whole host of projects
      throughout the UAE, helping to enhance the outdoor space of numerous clients in the region.
      While we could tell you about our best work, we thought it would be better to show you
      instead. On this page, you’ll find our projects gallery where you can browse through some of
      our recent projects.
    </p>
  </section>
  <section class="gallery">
    <GalleryImage v-for="image in images" :key="image.id" :image="image.url" :alt="image.alt" />
  </section>
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
        { id: 24, url: 'src/assets/IMG_9804.jpg', alt: 'Placeholder image 3' },
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
  margin: 20px auto;
}
.gallery {
  grid-row: 3;
  grid-column: span 2;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
.header {
  grid-column: span 2;
  text-align: center;
  background-color: #4b4632;
  color: white;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
h1 {
  font-size: 4rem;

  font-weight: bold;
  margin: 10px 0;
  text-decoration: underline;
}
p {
  font-size: 2rem;
  width: 85%;
}
</style>
