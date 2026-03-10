<script setup lang="ts">
const series = [
  {
    name: 'Revenue',
    data: [3100, 4000, 2800, 5100, 4200, 7300, 5400, 6100, 4900, 7200, 6800, 8100],
  },
  {
    name: 'Expenses',
    data: [2100, 3200, 2400, 3600, 2800, 4100, 3200, 4300, 3100, 4800, 4200, 5100],
  },
]

const categories = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const options = {
  xaxis: {
    categories,
  },
}
</script>

<template>
  <div class="rounded-lg border overflow-hidden max-w-2xl">
    <UiChart type="area" :series="series" :options="options" :height="300" />
  </div>
</template>
