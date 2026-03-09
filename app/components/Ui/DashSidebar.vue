<script setup lang="ts">
defineOptions({ name: 'UiDashSidebar' });
</script>

<template>
  <aside
    class="hidden w-64 shrink-0 flex-col border-r border-border bg-card md:flex"
  >
    <slot />
  </aside>
</template>
