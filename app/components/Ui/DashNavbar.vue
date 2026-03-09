<script setup lang="ts">
defineOptions({ name: 'UiDashNavbar' });
</script>

<template>
  <header
    class="flex h-14 shrink-0 items-center justify-between border-b border-border bg-card px-4 lg:h-16 lg:px-6"
  >
    <slot />
  </header>
</template>
