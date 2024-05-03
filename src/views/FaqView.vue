<template>
  <hero-component header="FAQ" />
  <section class="information">
    <h1>Answering your questions!</h1>
    <p>
      Want to know more about the services we offer? Maybe you have specific questions about our
      processes that you’d like to learn more about? Or perhaps you just need clarification on a few
      details. Whatever the case, the team at Dubai-Landscapes is on hand to help answer any
      questions you have. Check out our list of frequently asked questions below; if your question
      is not covered feel free to contact our team directly. Drop us a message on WhatsApp or give
      us a call.
    </p>
  </section>
  <div class="back-drop">
    <FaqDropDown question="What is the meaning of life?" answer="42" />
    <FaqDropDown
      question="What is the airspeed velocity of an unladen swallow?"
      answer="African or European?"
    />
  </div>
</template>

<script>
import FaqDropDown from '@/components/FaqDropDown.vue'
export default {
  name: 'FaqView',
  components: {
    FaqDropDown
  }
}
</script>

<style scoped>
.information {
  padding: 1rem;
  grid-column: 1 / span 2;
  background-color: #4b4632;
  color: white;
  font-size: 1.5rem;
}
.back-drop {
  background-color: rgba(0, 0, 0, 0.5);
  padding: 1rem;
  width: 80%;
  border-radius: 5px;
  color: white;
  grid-column: span 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  justify-self: center;
}
</style>
