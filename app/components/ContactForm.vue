<script lang="ts" setup>
const form = ref({ name: '', email: '', phone: '', message: '' })
const loading = ref(false)
const status = ref<'idle' | 'success' | 'error'>('idle')

async function submitForm() {
  loading.value = true
  status.value = 'idle'
  try {
    await $fetch('/api/contact', { method: 'POST', body: form.value })
    status.value = 'success'
    form.value = { name: '', email: '', phone: '', message: '' }
  } catch {
    status.value = 'error'
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <form v-if="status !== 'success'" class="contact-form" @submit.prevent="submitForm">
    <input
      v-model="form.name"
      type="text"
      placeholder="Name"
      maxlength="100"
      required
      class="form-input"
    >
    <input
      v-model="form.email"
      type="email"
      placeholder="Email"
      maxlength="254"
      required
      class="form-input"
    >
    <input
      v-model="form.phone"
      type="text"
      placeholder="Phone (optional)"
      class="form-input"
    >
    <textarea
      v-model="form.message"
      placeholder="Message"
      maxlength="750"
      rows="4"
      required
      class="form-input form-textarea"
    />
    <button type="submit" class="form-submit" :disabled="loading">
      {{ loading ? 'Sending…' : 'Send Message' }}
    </button>
    <p v-if="status === 'error'" class="form-error">
      Something went wrong. Please call us instead at (262) 785-1499.
    </p>
  </form>
  <p v-else class="form-success">
    Thanks — we'll be in touch shortly. 
    <br>
    If it's an emergency, please call us at (262) 785-1499.
  </p>
</template>

<style scoped>
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.form-input {
  font-family: 'Karla', sans-serif;
  font-size: 15px;
  padding: 13px 14px;
  border: 1px solid #C3D8DC;
  background: transparent;
  color: #16323A;
  border-radius: 0;
}

.form-input::placeholder {
  color: #7C979C;
}

.form-input:focus {
  outline: none;
  border-color: #1B6E82;
}

.form-textarea {
  resize: vertical;
}

.form-submit {
  background: #1B6E82;
  color: #fff;
  border: none;
  padding: 15px;
  font-weight: 600;
  font-size: 15px;
  border-radius: 2px;
  cursor: pointer;
  margin-top: 6px;
  transition: background 0.2s ease;
}

.form-submit:hover:not(:disabled) {
  background: #16323A;
}

.form-submit:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.form-success {
  font-size: 15px;
  color: #3F5C63;
  margin: 0;
}

.form-error {
  font-size: 14px;
  color: #B4483A;
  margin: 4px 0 0;
}
</style>
