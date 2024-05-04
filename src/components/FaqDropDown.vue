<template>
  <!-- faq drop down menu -->
  <div class="faq-item">
    <button class="faq-btn" @click="toggleVisibility">{{ question }}</button>
    <div v-if="isVisible" class="faq-answer">
      <p>{{ answer }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FaqDropDown',
  props: {
    question: {
      type: String,
      required: true
    },
    answer: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      isVisible: false
    }
  },
  methods: {
    toggleVisibility() {
      this.isVisible = !this.isVisible
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
