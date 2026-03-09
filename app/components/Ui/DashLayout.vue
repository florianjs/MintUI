<script setup lang="ts">
import { useSlots } from 'vue';

defineOptions({ name: 'UiDashLayout' });

const slots = useSlots();
</script>

<template>
  <div class="flex min-h-screen w-full bg-background md:flex-row flex-col">
    <!-- Sidebar Slot -->
    <slot name="sidebar" />

    <!-- Main Content Area Wrapper -->
    <div class="flex flex-1 flex-col overflow-hidden">
      <slot name="navbar" />
      <slot />
    </div>
  </div>
</template>
