<template>
  <div>
    <header class="p-4 border-b">
      My App
    </header>

    <main class="p-4">
      <slot />
    </main>
  </div>
</template>

<script lang="ts" setup>
defineOptions({
  name: "SiteLayout",
});
</script>
