<script setup lang="ts">
defineOptions({ name: 'UiCardHeader' });
</script>

<template>
  <div class="flex flex-col gap-1.5 p-6">
    <slot />
  </div>
</template>
