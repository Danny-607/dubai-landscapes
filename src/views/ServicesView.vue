<template>
  <!-- Content Layout Right component for 1st row -->
  <ContentLayoutRight
    header="Our Premium Landscaping Services"
    paragraph=""
    :items="listItems"
    image="/images/IMG_9700.jpg"
  />
  <!-- Content Layout Left component for 2nd row -->
  <ContentLayoutLeft
    header="Highest quality materials"
    paragraph="We are a British-owned company, whose entire team is English managed, we always use products that have been manufactured using the highest quality materials. This includes award-winning artificial turf from Easigrass, a product that is 100% British designed as well as child and pet safe."
    image="/images/IMG_9528.jpg"
  />
  <!-- Content Layout Right component for 3rd row -->
  <ContentLayoutRight
    header="Every build is tailored to you!"
    paragraph="Our team can transform every garden or outdoor space, taking on board the unique requirements of our customers. We never take a ‘one size fits all’ approach, instead tailoring our services specifically to the needs of our clients."
    image="/images/IMG_9685.jpg"
  />
  <!-- Content Layout Left component for 4th row -->
  <ContentLayoutLeft
    header="Most experienced and reliable company in the UAE."
    paragraph="Dubai-Landscapes is one of the most experienced and reliable garden landscaping companies in the UAE. Experts in both soft and hard landscaping, we’re able to do it all, from providing perfect paving to enhancing gardens with flowers and plants that are able to withstand the UAE’s unique climate. Our team is full of local experts who have extensive knowledge of the type of plants that will work best for your outdoor space."
    image="/images/IMG_9804.jpg"
  />
</template>

<script>
import ContentLayoutRight from '@/components/ContentLayoutRight.vue'
import ContentLayoutLeft from '@/components/ContentLayoutLeft.vue'
import gazeboSvg from '@/assets/gazebo.svg'
import DeckingSvg from '@/assets/decking.svg'
import BarbecueSvg from '@/assets/barbecue.svg'
import FountainSvg from '@/assets/fountain.svg'
import PergolaSvg from '@/assets/pergola.svg'

export default {
  name: 'ServicesView',
  components: {
    ContentLayoutRight,
    ContentLayoutLeft
  },
  data() {
    return {
      // List items for premium landscaping services
      listItems: [
        { text: 'Gazebos', svg: gazeboSvg, svgAlt: 'Icon for a gazebo' },
        { text: 'Water Features', svg: FountainSvg, svgAlt: 'Icon for a fountain' },
        { text: 'Pergolas', svg: PergolaSvg, svgAlt: 'Icon for a pergola' },
        { text: 'Barbecue Areas', svg: BarbecueSvg, svgAlt: 'Icon for a barbecue' },
        { text: 'Decking', svg: DeckingSvg, svgAlt: 'Icon for decking' },
        { text: 'And Much More...' }
      ],
      // SVG icons for various services
      BarbecueSvg: BarbecueSvg,
      DeckingSvg: DeckingSvg,
      PergolaSvg: PergolaSvg,
      FountainSvg: FountainSvg
    }
  },
  methods: {},
  mounted() {}
}
</script>

<style scoped></style>
