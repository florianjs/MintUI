<template>
  <div class="rounded-lg border overflow-hidden h-64">
    <UiDashContent>
      <div class="grid grid-cols-2 gap-4">
        <div v-for="(item, i) in cards" :key="i" class="rounded-lg border border-border bg-card p-4">
          <div class="text-xl font-bold">{{ item.value }}</div>
          <div class="text-sm text-muted-foreground mt-1">{{ item.label }}</div>
        </div>
      </div>
    </UiDashContent>
  </div>
</template>

<script setup lang="ts">
const cards = [
  { value: '3,842', label: 'Page views' },
  { value: '1,284', label: 'Unique visitors' },
  { value: '4m 32s', label: 'Avg. session' },
  { value: '24.1%', label: 'Bounce rate' },
]
</script>
