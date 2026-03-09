<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useDark, useIntersectionObserver } from '@vueuse/core';
import VueApexCharts from 'vue3-apexcharts';

defineOptions({ name: 'UiChart' });

export type ChartType =
  | 'line'
  | 'area'
  | 'bar'
  | 'pie'
  | 'donut'
  | 'radialBar'
  | 'scatter'
  | 'bubble'
  | 'heatmap'
  | 'candlestick'
  | 'boxPlot'
  | 'radar'
  | 'polarArea'
  | 'rangeBar'
  | 'rangeArea'
  | 'treemap';

interface Props {
  type?: ChartType;
  series: any[];
  options?: Record<string, any>;
  height?: string | number;
  width?: string | number;
  animateOnScroll?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  type: 'line',
  options: () => ({}),
  height: 350,
  width: '100%',
  animateOnScroll: true,
});

const isMounted = ref(false);
const isVisible = ref(false);
const chartRef = ref<HTMLElement | null>(null);

onMounted(() => {
  isMounted.value = true;

  if (!props.animateOnScroll) {
    isVisible.value = true;
    return;
  }

  useIntersectionObserver(
    chartRef,
    (entries: IntersectionObserverEntry[]) => {
      if (entries[0]?.isIntersecting) {
        isVisible.value = true;
      }
    },
    { threshold: 0.1 },
  );
});

const isDark = useDark();

const mergedOptions = computed(() => {
  return {
    chart: {
      background: 'transparent',
      toolbar: { show: false },
      fontFamily: 'inherit',
      animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 800,
        animateGradually: { enabled: true, delay: 150 },
        dynamicAnimation: { enabled: true, speed: 350 },
      },
      ...props.options?.chart,
    },
    theme: {
      mode: isDark.value ? 'dark' : 'light',
      ...props.options?.theme,
    },
    colors: props.options?.colors || [
      '#6366f1', // Indigo 500
      '#14b8a6', // Teal 500
      '#f43f5e', // Rose 500
      '#f59e0b', // Amber 500
      '#8b5cf6', // Violet 500
      '#06b6d4', // Cyan 500
    ],
    fill: {
      type: props.type === 'area' ? 'gradient' : 'solid',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.45,
        opacityTo: 0.05,
        stops: [0, 90, 100],
      },
      ...props.options?.fill,
    },
    dataLabels: {
      enabled: false,
      ...props.options?.dataLabels,
    },
    stroke: {
      curve: 'smooth',
      width: props.type === 'pie' || props.type === 'donut' ? 0 : 3,
      lineCap: 'round',
      ...props.options?.stroke,
    },
    markers: {
      size: 0,
      strokeWidth: 2,
      hover: { size: 6, sizeOffset: 3 },
      ...props.options?.markers,
    },
    grid: {
      borderColor: isDark.value ? '#374151' : '#e5e7eb', // gray-700 : gray-200
      strokeDashArray: 4,
      xaxis: { lines: { show: false } }, // Remove vertical lines for cleaner look
      yaxis: { lines: { show: true } },
      padding: { top: 0, right: 0, bottom: 0, left: 10 },
      ...props.options?.grid,
    },
    legend: {
      position: 'top',
      horizontalAlign: 'right',
      markers: { radius: 12 },
      labels: {
        colors: isDark.value ? '#f8fafc' : '#0f172a', // slate-50 : slate-900
      },
      ...props.options?.legend,
    },
    xaxis: {
      labels: {
        style: {
          colors: isDark.value ? '#94a3b8' : '#64748b', // slate-400 : slate-500
        },
      },
      ...props.options?.xaxis,
    },
    yaxis: {
      labels: {
        style: {
          colors: isDark.value ? '#94a3b8' : '#64748b', // slate-400 : slate-500
        },
      },
      ...props.options?.yaxis,
    },
    tooltip: {
      theme: isDark.value ? 'dark' : 'light',
      style: { fontSize: '12px', fontFamily: 'inherit' },
      marker: { show: true },
      x: { show: true },
      ...props.options?.tooltip,
    },
    ...props.options,
  };
});
</script>

<template>
  <div class="ui-chart w-full relative" ref="chartRef">
    <VueApexCharts
      v-if="isMounted && isVisible"
      :type="type"
      :height="height"
      :width="width"
      :series="series"
      :options="mergedOptions"
    />
    <div
      v-else
      class="w-full bg-muted/10 transition-all rounded-xl flex items-center justify-center opacity-50"
      :style="{ height: typeof height === 'number' ? `${height}px` : height }"
    ></div>
  </div>
</template>
