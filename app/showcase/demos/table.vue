<script setup lang="ts">
const columns = [
  { key: 'name', label: 'Name', sortable: true },
  { key: 'email', label: 'Email', sortable: true },
  { key: 'role', label: 'Role' },
  { key: 'status', label: 'Status', align: 'center' as const },
];

const data = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    role: 'Admin',
    status: 'Active',
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane@example.com',
    role: 'User',
    status: 'Active',
  },
  {
    id: 3,
    name: 'Bob Wilson',
    email: 'bob@example.com',
    role: 'Editor',
    status: 'Inactive',
  },
  {
    id: 4,
    name: 'Alice Brown',
    email: 'alice@example.com',
    role: 'User',
    status: 'Active',
  },
];

const minimalColumns = [
  { key: 'product', label: 'Product' },
  { key: 'price', label: 'Price', align: 'right' as const },
];

const minimalData = [
  { id: 1, product: 'Widget Pro', price: '$29.00' },
  { id: 2, product: 'Widget Lite', price: '$9.00' },
];
</script>

<template>
  <div class="space-y-6">
    <div>
      <p
        class="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3"
      >
        Default
      </p>
      <div class="rounded-lg overflow-hidden">
        <UiTable
          :columns="columns"
          :data="data"
          row-key="id"
          default-sort-key="name"
        />
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
          <p class="text-xs text-muted-foreground mb-2">Minimal</p>
          <div class="rounded-lg overflow-hidden max-w-md">
            <UiTable
              :columns="minimalColumns"
              :data="minimalData"
              row-key="id"
            />
          </div>
        </div>
        <div>
          <p class="text-xs text-muted-foreground mb-2">With custom cell</p>
          <div class="rounded-lg overflow-hidden">
            <UiTable
              :columns="[
                { key: 'name', label: 'Name' },
                { key: 'status', label: 'Status', align: 'center' as const },
              ]"
              :data="[
                { id: 1, name: 'Active User', status: 'Active' },
                { id: 2, name: 'Pending User', status: 'Pending' },
              ]"
              row-key="id"
            >
              <template #cell-status="{ value }">
                <UiBadge
                  :variant="value === 'Active' ? 'default' : 'secondary'"
                  size="sm"
                >
                  {{ value }}
                </UiBadge>
              </template>
            </UiTable>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
