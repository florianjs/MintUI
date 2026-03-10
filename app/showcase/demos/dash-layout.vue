<template>
  <div class="rounded-lg border overflow-hidden h-96">
    <UiDashLayout>
      <template #sidebar>
        <UiDashSidebar>
          <div class="flex h-14 items-center border-b border-border px-4">
            <span class="font-bold text-sm">MintUI</span>
          </div>
          <nav class="flex-1 space-y-1 p-3">
            <a href="#" class="flex items-center rounded-md px-3 py-2 text-sm font-medium bg-primary/10 text-primary">Dashboard</a>
            <a href="#" class="flex items-center rounded-md px-3 py-2 text-sm font-medium text-foreground/70 hover:bg-muted transition-colors">Analytics</a>
            <a href="#" class="flex items-center rounded-md px-3 py-2 text-sm font-medium text-foreground/70 hover:bg-muted transition-colors">Settings</a>
          </nav>
        </UiDashSidebar>
      </template>
      <template #navbar>
        <UiDashNavbar>
          <span class="text-sm font-semibold">Dashboard</span>
          <UiButton size="sm" variant="outline">+ New</UiButton>
        </UiDashNavbar>
      </template>
      <UiDashContent>
        <div class="grid grid-cols-3 gap-4 mb-6">
          <div v-for="(item, i) in stats" :key="i" class="rounded-lg border border-border bg-card p-4">
            <div class="text-2xl font-bold">{{ item.value }}</div>
            <div class="text-sm text-muted-foreground mt-1">{{ item.label }}</div>
          </div>
        </div>
      </UiDashContent>
    </UiDashLayout>
  </div>
</template>

<script setup lang="ts">
const stats = [
  { value: '1,284', label: 'Total Users' },
  { value: '$9,420', label: 'Revenue' },
  { value: '98.2%', label: 'Uptime' },
]
</script>
