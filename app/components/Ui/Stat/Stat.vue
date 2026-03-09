<template>
  <div
    class="relative overflow-hidden rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950"
  >
    <div class="flex items-center justify-between">
      <div>
        <div class="text-sm font-medium text-gray-500 dark:text-gray-400">
          {{ title }}
        </div>
        <div class="mt-2 flex items-baseline gap-2">
          <span
            class="text-3xl font-semibold tracking-tight text-gray-900 dark:text-white"
          >
            {{ prefix }}{{ formattedValue }}{{ suffix }}
          </span>
          <span
            v-if="trend"
            class="flex items-center text-sm font-medium"
            :class="[
              trend === 'up'
                ? 'text-green-600 dark:text-green-400'
                : 'text-red-600 dark:text-red-400',
            ]"
          >
            <svg
              v-if="trend === 'up'"
              xmlns="http://www.w3.org/2000/svg"
              class="mr-1 h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                clip-rule="evenodd"
              />
            </svg>
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              class="mr-1 h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z"
                clip-rule="evenodd"
              />
            </svg>
            {{ trendValue }}
          </span>
        </div>
        <div
          v-if="description"
          class="mt-1 text-sm text-gray-500 dark:text-gray-400"
        >
          {{ description }}
        </div>
      </div>
      <div
        v-if="$slots.icon"
        class="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-50 dark:bg-gray-900"
      >
        <slot name="icon"></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, watch, ref, onMounted } from 'vue';
import { useTransition, TransitionPresets } from '@vueuse/core';

const props = withDefaults(
  defineProps<{
    title: string;
    value: number;
    prefix?: string;
    suffix?: string;
    description?: string;
    trend?: 'up' | 'down' | 'none';
    trendValue?: string;
    animated?: boolean;
    duration?: number;
    format?: 'number' | 'currency' | 'compact';
    decimals?: number;
  }>(),
  {
    prefix: '',
    suffix: '',
    trend: 'none',
    animated: true,
    duration: 1500,
    format: 'number',
    decimals: 0,
  },
);

const targetValue = ref(0); // Start at 0 for animation
const outputValue = useTransition(targetValue, {
  duration: props.duration,
  transition: TransitionPresets.easeOutCubic,
});

// Number formatter
const formatter = computed(() => {
  if (props.format === 'currency') {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: props.decimals,
      minimumFractionDigits: props.decimals,
    });
  } else if (props.format === 'compact') {
    return new Intl.NumberFormat('en-US', {
      notation: 'compact',
      maximumFractionDigits: props.decimals,
    });
  }
  return new Intl.NumberFormat('en-US', {
    maximumFractionDigits: props.decimals,
    minimumFractionDigits: props.decimals,
  });
});

const formattedValue = computed(() => {
  // Extract number part if formatting adds prefixes/suffixes we don't want
  // or just use format directly if we let Intl handle everything.
  // Actually, we provide prefix/suffix props, so we should just format the number.
  if (props.format === 'currency') {
    // If we use currency, we use standard localized format and ignore custom prefix
    return formatter.value.format(
      props.animated ? outputValue.value : props.value,
    );
  }
  return formatter.value.format(
    props.animated ? outputValue.value : props.value,
  );
});

onMounted(() => {
  if (props.animated) {
    // Start animation on mount
    setTimeout(() => {
      targetValue.value = props.value;
    }, 100);
  } else {
    targetValue.value = props.value;
  }
});

watch(
  () => props.value,
  (newVal) => {
    targetValue.value = newVal;
  },
);
</script>
