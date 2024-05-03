<template>
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
  <div class="right">
    <h1>Get in touch today</h1>
    <p>Get in touch with us today to discuss your landscaping needs.</p>
    <form action="">
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" required />
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required />
      <label for="message">Message:</label>
      <textarea id="message" name="message" required></textarea>
      <button type="submit">Send</button>
    </form>
    <p>Phone number: 1234567890</p>
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
.right {
  grid-column: 2;
  grid-row: span 2;
  background-color: #4b4632;
  color: white;
  padding: 1rem;
}

form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
h1 {
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
}
label {
  margin-bottom: 0.5rem;
  font-size: 1.75rem;
}

input {
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
}
textarea {
  height: 150px;
  border-radius: 5px;
}

button[type='submit'] {
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background-color: #4b4632;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button[type='submit']:hover {
  background-color: #6b653e;
}
p {
  font-size: 1.3rem;
}
</style>
