<script setup lang="ts">
defineOptions({ name: 'UiDashContent' });
</script>

<template>
  <main class="flex-1 overflow-y-auto bg-background p-4 md:p-6 lg:p-8">
    <slot />
  </main>
</template>
