<template>
  <div class="space-y-6">
    <div>
      <p
        class="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3"
      >
        Default
      </p>
      <div class="rounded-lg border overflow-hidden h-80">
        <UiDashLayout>
          <template #sidebar>
            <UiDashSidebar>
              <div class="flex h-14 items-center border-b border-border px-4">
                <span class="font-bold text-sm">MintUI</span>
              </div>
              <nav class="flex-1 space-y-1 p-3">
                <a
                  href="#"
                  class="flex items-center rounded-md px-3 py-2 text-sm font-medium bg-primary/10 text-primary"
                  >Dashboard</a
                >
                <a
                  href="#"
                  class="flex items-center rounded-md px-3 py-2 text-sm font-medium text-foreground/70 hover:bg-muted transition-colors"
                  >Analytics</a
                >
                <a
                  href="#"
                  class="flex items-center rounded-md px-3 py-2 text-sm font-medium text-foreground/70 hover:bg-muted transition-colors"
                  >Settings</a
                >
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
            <div class="grid grid-cols-3 gap-4">
              <div
                v-for="(item, i) in stats"
                :key="i"
                class="rounded-lg border border-border bg-card p-4"
              >
                <div class="text-xl font-bold">{{ item.value }}</div>
                <div class="text-sm text-muted-foreground mt-1">
                  {{ item.label }}
                </div>
              </div>
            </div>
          </UiDashContent>
        </UiDashLayout>
      </div>
    </div>

    <div>
      <p
        class="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3"
      >
        Variants
      </p>
      <div class="space-y-4">
        <div>
          <p class="text-xs text-muted-foreground mb-2">With header actions</p>
          <div class="rounded-lg border overflow-hidden h-64">
            <UiDashLayout>
              <template #sidebar>
                <UiDashSidebar>
                  <div
                    class="flex h-14 items-center border-b border-border px-4"
                  >
                    <span class="font-bold text-sm">App</span>
                  </div>
                  <nav class="flex-1 space-y-1 p-3">
                    <a
                      href="#"
                      class="flex items-center rounded-md px-3 py-2 text-sm font-medium bg-primary/10 text-primary"
                      >Overview</a
                    >
                    <a
                      href="#"
                      class="flex items-center rounded-md px-3 py-2 text-sm font-medium text-foreground/70"
                      >Projects</a
                    >
                  </nav>
                </UiDashSidebar>
              </template>
              <template #navbar>
                <UiDashNavbar>
                  <div class="flex items-center gap-2">
                    <span class="text-sm font-semibold">Projects</span>
                    <UiBadge variant="secondary" size="sm">12</UiBadge>
                  </div>
                  <div class="flex items-center gap-2">
                    <UiButton size="sm" variant="ghost">Export</UiButton>
                    <UiButton size="sm">+ New Project</UiButton>
                  </div>
                </UiDashNavbar>
              </template>
              <UiDashContent>
                <div class="text-sm text-muted-foreground">
                  Your projects will appear here...
                </div>
              </UiDashContent>
            </UiDashLayout>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const stats = [
  { value: '1,284', label: 'Total Users' },
  { value: '$9,420', label: 'Revenue' },
  { value: '98.2%', label: 'Uptime' },
];
</script>
