<template>
  <HeroComponent header="UAE's Largest Landscapers" />
  <ContentLayoutRight
    header="UAE's Largest Landscapers"
    paragraph="Your garden or outdoor space is an extension of your entire home. A place where you can relax after a long day, entertain friends and family or socialise with loved ones. At Dubai-Landscapes,we’ve spent a decade in the UAE, crafting bespoke outdoor living spaces that achieve exactly what our clients desire"
    image="src/assets/hero.jpg"
  />
  <ContentLayoutLeft header="yes" paragraph="pppp" image="src/assets/hero.jpg" />
  <ContentLayoutRight
    header="UAE's Largest Landscapers"
    paragraph="Your garden or outdoor space is an extension of your entire home. A place where you can relax after a long day, entertain friends and family or socialise with loved ones. At Dubai-Landscapes,we’ve spent a decade in the UAE, crafting bespoke outdoor living spaces that achieve exactly what our clients desire"
    image="src/assets/hero.jpg"
  />
  <ContentLayoutLeft header="yes" paragraph="pppp" image="src/assets/hero.jpg" />
</template>

<script>
import HeroComponent from '@/components/HeroComponent.vue'
import ContentLayoutRight from '@/components/ContentLayoutRight.vue'
import ContentLayoutLeft from '@/components/ContentLayoutLeft.vue'
export default {
  name: 'HomeView',
  components: {
    HeroComponent,
    ContentLayoutRight,
    ContentLayoutLeft
  }
}
</script>

<style scoped></style>
