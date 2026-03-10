<template>
  <div class="space-y-6">
    <div>
      <p
        class="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3"
      >
        Default
      </p>
      <div class="rounded-lg border overflow-hidden h-64">
        <UiDashContent>
          <div class="grid grid-cols-2 gap-4">
            <div
              v-for="(item, i) in cards"
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
          <p class="text-xs text-muted-foreground mb-2">With list</p>
          <div class="rounded-lg border overflow-hidden h-64">
            <UiDashContent>
              <div class="space-y-2">
                <div
                  v-for="(item, i) in listItems"
                  :key="i"
                  class="flex items-center justify-between p-3 rounded-lg border bg-card"
                >
                  <div class="flex items-center gap-3">
                    <div
                      class="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-medium"
                    >
                      {{ item.initials }}
                    </div>
                    <div>
                      <div class="text-sm font-medium">{{ item.name }}</div>
                      <div class="text-xs text-muted-foreground">
                        {{ item.email }}
                      </div>
                    </div>
                  </div>
                  <UiBadge
                    :variant="
                      item.status === 'Active' ? 'default' : 'secondary'
                    "
                    >{{ item.status }}</UiBadge
                  >
                </div>
              </div>
            </UiDashContent>
          </div>
        </div>
        <div>
          <p class="text-xs text-muted-foreground mb-2">Empty state</p>
          <div class="rounded-lg border overflow-hidden h-48">
            <UiDashContent
              class="flex flex-col items-center justify-center h-full"
            >
              <div class="text-muted-foreground text-center">
                <div class="text-4xl mb-2">📭</div>
                <div class="text-sm font-medium">No items yet</div>
                <div class="text-xs mt-1">
                  Add your first item to get started
                </div>
              </div>
            </UiDashContent>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const cards = [
  { value: '3,842', label: 'Page views' },
  { value: '1,284', label: 'Unique visitors' },
  { value: '4m 32s', label: 'Avg. session' },
  { value: '24.1%', label: 'Bounce rate' },
];

const listItems = [
  {
    initials: 'JD',
    name: 'John Doe',
    email: 'john@example.com',
    status: 'Active',
  },
  {
    initials: 'JS',
    name: 'Jane Smith',
    email: 'jane@example.com',
    status: 'Active',
  },
  {
    initials: 'BW',
    name: 'Bob Wilson',
    email: 'bob@example.com',
    status: 'Inactive',
  },
];
</script>
