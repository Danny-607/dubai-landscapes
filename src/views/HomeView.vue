<template>
  <HeroComponent header="UAE's Largest Landscapers" />
  <ContentLayoutRight
    header="UAE's Largest Landscapers"
    paragraph="Your garden or outdoor space is an extension of your entire home. A place where you can relax after a long day, entertain friends and family or socialise with loved ones. At Dubai-Landscapes,we’ve spent a decade in the UAE, crafting bespoke outdoor living spaces that achieve exactly what our clients desire"
    image="images/hero.jpg"
  />
  <ContentLayoutLeft
    header="Hard and soft landscaping services"
    paragraph="Not only can we offer the design and installation of a number of soft and hard landscaping elements, but we’ll craft an outdoor living space 
that looks amazing, while is also functional and practical for your family to use. From outdoor design elements like paving, decking and Easigrass 
artificial turf to luxurious seating and dedicated barbecue areas, we can do it all."
    image="images/hero.jpg"
  />
  <ContentLayoutRight
    header="UAE's Largest Landscapers"
    paragraph="So wherever you’re based in the UAE, contact Dubai-Landscapes today to find 
out more about our range of landscaping services and bespoke gardens. Message us on WhatsApp and a member of our team will be in touch"
    image="images/hero.jpg"
  />
  <ContentLayoutLeft
    header="British Design and Installation Services"
    paragraph="A British company with more than 30 years in the industry, our UAE offering extends across the country, including Abu Dhabi, 
Dubai and the surrounding areas. Providing our customers with leading British design and installation services for a whole host 
of outdoor living elements, we always create customised spaces and bespoke gardens that perfectly match the unique specifications
 of our clients’ outdoor spaces, and align with your vision. Over the years, we’ve earned a reputation for being the premier landscaping 
company in the UAE. "
    image="images/hero.jpg"
  />
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
