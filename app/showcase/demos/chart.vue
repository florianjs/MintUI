<script setup lang="ts">
const areaSeries = [
  {
    name: 'Revenue',
    data: [
      3100, 4000, 2800, 5100, 4200, 7300, 5400, 6100, 4900, 7200, 6800, 8100,
    ],
  },
  {
    name: 'Expenses',
    data: [
      2100, 3200, 2400, 3600, 2800, 4100, 3200, 4300, 3100, 4800, 4200, 5100,
    ],
  },
];

const barSeries = [
  { name: 'Sales', data: [44, 55, 57, 56, 61, 58, 63, 60, 66] },
];

const donutSeries = [44, 55, 13, 33];

const categories = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const areaOptions = { xaxis: { categories } };
const barOptions = {
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
  },
};
const donutOptions = { labels: ['Team A', 'Team B', 'Team C', 'Team D'] };
</script>

<template>
  <div class="space-y-6">
    <div>
      <p
        class="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3"
      >
        Default
      </p>
      <div class="rounded-lg border overflow-hidden max-w-2xl">
        <UiChart
          type="area"
          :series="areaSeries"
          :options="areaOptions"
          :height="300"
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
          <p class="text-xs text-muted-foreground mb-2">Bar chart</p>
          <div class="rounded-lg border overflow-hidden max-w-md">
            <UiChart
              type="bar"
              :series="barSeries"
              :options="barOptions"
              :height="250"
            />
          </div>
        </div>
        <div>
          <p class="text-xs text-muted-foreground mb-2">Donut chart</p>
          <div class="rounded-lg border overflow-hidden p-4 max-w-xs">
            <UiChart
              type="donut"
              :series="donutSeries"
              :options="donutOptions"
              :height="280"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
