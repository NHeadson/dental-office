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
  <v-form @submit.prevent="submitForm">
    <v-text-field
      v-model="form.name"
      label="Name"
      required
      maxlength="100"
      class="mb-2"
    />
    <v-text-field
      v-model="form.email"
      label="Email"
      type="email"
      required
      maxlength="254"
      class="mb-2"
    />
    <v-text-field v-model="form.phone" label="Phone (optional)" class="mb-2" />
    <v-textarea
      v-model="form.message"
      label="Message"
      required
      counter="750"
      maxlength="750"
      class="mb-2"
    />
    <v-btn type="submit" color="primary" :loading="loading">Send Message</v-btn>

    <v-alert v-if="status === 'success'" type="success" class="mt-4">
      Thanks! Your message has been sent.
    </v-alert>
    <v-alert v-if="status === 'error'" type="error" class="mt-4">
      Something went wrong. Please call us instead.
    </v-alert>
  </v-form>
</template>
