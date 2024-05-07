<template>
  <!-- FAQ drop down menu -->
  <div class="faq-item">
    <!-- Button to toggle visibility of answer -->
    <button class="faq-btn" @click="toggleVisibility">{{ question }}</button>
    <!-- Answer section, shown when isVisible is true -->
    <div v-if="isVisible" class="faq-answer">
      <p>{{ answer }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FaqDropDown', // Component name
  props: {
    // Props for question and answer text
    question: {
      type: String, // Type validation for question
      required: true // Question is required
    },
    answer: {
      type: String, // Type validation for answer
      required: true // Answer is required
    }
  },
  data() {
    return {
      isVisible: false // Initial visibility state
    }
  },
  methods: {
    // Method to toggle visibility of answer
    toggleVisibility() {
      this.isVisible = !this.isVisible // Toggle isVisible state
    }
  },
  mounted() {}
}
</script>

<style scoped>
.faq-item {
  margin-bottom: 1rem;
  width: 100%;
}
.faq-btn {
  padding: 1rem;
  background-color: #e0e0e0;
  width: 100%;
  text-align: left;
  border: none;
  cursor: pointer;
  border-radius: 10px;
  font-size: 1rem;
}
.faq-answer {
  padding: 1rem;
  font-size: 1rem;
  background-color: #f0f0f0;
  width: 100%;
  color: black;
  border-radius: 10px;
}
</style>
