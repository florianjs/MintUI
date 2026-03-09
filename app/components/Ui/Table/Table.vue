<template>
  <div
    class="w-full overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-950"
  >
    <div class="overflow-x-auto">
      <table class="w-full text-left text-sm text-gray-500 dark:text-gray-400">
        <thead
          class="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-900 dark:text-gray-400"
        >
          <tr>
            <th
              v-for="col in columns"
              :key="col.key"
              scope="col"
              class="px-6 py-4 font-medium"
              :class="[
                col.sortable
                  ? 'cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-gray-800'
                  : '',
                col.align === 'right'
                  ? 'text-right'
                  : col.align === 'center'
                    ? 'text-center'
                    : 'text-left',
              ]"
              @click="col.sortable ? sortBy(col.key) : null"
            >
              <div
                class="flex items-center gap-1"
                :class="[
                  col.align === 'right'
                    ? 'justify-end'
                    : col.align === 'center'
                      ? 'justify-center'
                      : 'justify-start',
                ]"
              >
                {{ col.label }}
                <!-- Sort indicator -->
                <span
                  v-if="col.sortable && sortKey === col.key"
                  class="text-gray-900 dark:text-gray-200"
                >
                  <svg
                    v-if="sortOrder === 'asc'"
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-3.5 w-3.5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <svg
                    v-else
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-3.5 w-3.5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
                <span
                  v-else-if="col.sortable"
                  class="text-gray-300 dark:text-gray-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-3.5 w-3.5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
              </div>
            </th>
          </tr>
        </thead>
        <tbody
          v-auto-animate
          class="divide-y divide-gray-200 bg-white dark:divide-gray-800 dark:bg-gray-950"
        >
          <tr
            v-for="(row, index) in sortedData"
            :key="row[rowKey] || index"
            class="transition-colors hover:bg-gray-50 dark:hover:bg-gray-900"
          >
            <td
              v-for="col in columns"
              :key="col.key"
              class="whitespace-nowrap px-6 py-4"
              :class="[
                col.align === 'right'
                  ? 'text-right'
                  : col.align === 'center'
                    ? 'text-center'
                    : 'text-left',
              ]"
            >
              <slot
                :name="`cell-${col.key}`"
                :row="row"
                :column="col"
                :value="row[col.key]"
              >
                <div class="text-gray-900 dark:text-white">
                  {{ row[col.key] }}
                </div>
              </slot>
            </td>
          </tr>
          <tr v-if="sortedData.length === 0">
            <td
              :colspan="columns.length"
              class="px-6 py-8 text-center text-gray-500 dark:text-gray-400"
            >
              <slot name="empty"> No data available </slot>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { vAutoAnimate } from '@formkit/auto-animate/vue';

export interface TableColumn {
  key: string;
  label: string;
  sortable?: boolean;
  align?: 'left' | 'center' | 'right';
}

const props = withDefaults(
  defineProps<{
    columns: TableColumn[];
    data: any[];
    rowKey?: string;
    defaultSortKey?: string;
    defaultSortOrder?: 'asc' | 'desc';
  }>(),
  {
    rowKey: 'id',
    defaultSortOrder: 'asc',
  },
);

const sortKey = ref(props.defaultSortKey || '');
const sortOrder = ref(props.defaultSortOrder);

const sortBy = (key: string) => {
  if (sortKey.value === key) {
    sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc';
  } else {
    sortKey.value = key;
    sortOrder.value = 'asc'; // Reset to ascending when changing columns
  }
};

const sortedData = computed(() => {
  if (!sortKey.value) return props.data;

  return [...props.data].sort((a, b) => {
    const valA = a[sortKey.value];
    const valB = b[sortKey.value];

    if (valA === valB) return 0;

    const modifier = sortOrder.value === 'asc' ? 1 : -1;

    if (typeof valA === 'string' && typeof valB === 'string') {
      return valA.localeCompare(valB) * modifier;
    }

    return (valA < valB ? -1 : 1) * modifier;
  });
});
</script>
