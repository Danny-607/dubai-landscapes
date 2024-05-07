<template>
  <!-- Left section of the contact view -->
  <div class="left">
    <p>
      If you need any more information on the range of services Dubai-Landscapes offers, or want to
      hire our team to carry out work on your property in the UAE, we’re always here to help. We
      place customer service at the forefront of everything we do and strive to bring British
      service to the UAE market. To find out more information about how we can enhance your outdoor
      living experience, drop us a message on WhatsApp or give us a call. Alternatively, you can
      complete the online form and a member of our team will get in touch with you.
    </p>
  </div>
  <!-- Right section of the contact view -->
  <div class="right">
    <h1>Get in touch today</h1>
    <p>Get in touch with us today to discuss your landscaping needs.</p>
    <!-- Form for user input -->
    <form action="">
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" required />
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required />
      <label for="message">Message:</label>
      <textarea id="message" name="message" required></textarea>
      <button type="submit">Send</button>
    </form>
    <!-- Contact information -->
    <p><img class="svg" src="/images/phone.svg" alt="" /> Phone number: 1234567890</p>
  </div>
</template>

<script>
export default {
  name: 'ContactView',
  data() {
    return {}
  },
  methods: {},
  mounted() {}
}
</script>

<style scoped>
/* Scoped styles for the ContactView component */

/* Styling for the left section */
.left {
  grid-column: 1;
  display: flex;
  background-color: #a8a191;
  color: white;
  padding: 1rem;
  height: 85vh;
  justify-content: center;
  align-items: center;
  font-size: 1.75rem;
}

/* Styling for the right section */
.right {
  grid-column: 2;
  grid-row: span 2;
  background-color: #4b4632;
  color: white;
  padding: 1rem;
}

/* Styling for SVG images */
.svg {
  width: 30px;
  height: 30px;
}

/* Styling for form elements */
form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

/* Styling for headings */
h1 {
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
}

/* Styling for labels */
label {
  margin-bottom: 0.5rem;
  font-size: 1.75rem;
}

/* Styling for input fields */
input {
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
}

/* Styling for textarea */
textarea {
  height: 150px;
  border-radius: 5px;
}

/* Styling for submit button */
button[type='submit'] {
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background-color: #a8a191;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

/* Hover effect for submit button */
button[type='submit']:hover {
  background-color: #6b653e;
}

/* Styling for paragraphs */
p {
  font-size: 1.3rem;
}

/* Additional styling for paragraphs in the right section */
.right p {
  text-align: center;
}

/* Responsive design for smaller screens */
@media (max-width: 768px) {
  .left {
    display: none;
  }
}
</style>
