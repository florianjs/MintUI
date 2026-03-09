<script setup lang="ts">
import { computed } from 'vue';

defineOptions({ name: 'UiAlert' });

export type AlertVariant = 'default' | 'destructive' | 'success' | 'warning';

interface Props {
  title?: string;
  description?: string;
  variant?: AlertVariant;
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
});

const alertClasses = computed(() => {
  const base =
    'relative w-full rounded-lg border p-4 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7';

  const variants: Record<AlertVariant, string> = {
    default: 'bg-background text-foreground border-border',
    destructive:
      'border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive',
    success:
      'border-green-500/50 text-green-600 dark:text-green-400 dark:border-green-500/50 [&>svg]:text-green-600 dark:[&>svg]:text-green-400',
    warning:
      'border-yellow-500/50 text-yellow-600 dark:text-yellow-500 dark:border-yellow-500/50 [&>svg]:text-yellow-600 dark:[&>svg]:text-yellow-500',
  };

  return `${base} ${variants[props.variant]}`;
});
</script>

<template>
  <div :class="alertClasses" role="alert">
    <!-- Icon slot, should be 16x16 SVG -->
    <slot name="icon">
      <svg
        v-if="variant === 'default'"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="h-4 w-4"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="12" x2="12" y1="8" y2="12" />
        <line x1="12" x2="12.01" y1="16" y2="16" />
      </svg>
      <svg
        v-else-if="variant === 'destructive' || variant === 'warning'"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="h-4 w-4"
      >
        <path
          d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"
        />
        <line x1="12" x2="12" y1="9" y2="13" />
        <line x1="12" x2="12.01" y1="17" y2="17" />
      </svg>
      <svg
        v-else-if="variant === 'success'"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="h-4 w-4"
      >
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    </slot>

    <h5 v-if="title" class="mb-1 font-medium leading-none tracking-tight">
      {{ title }}
    </h5>

    <div class="text-sm [&_p]:leading-relaxed">
      <slot>
        {{ description }}
      </slot>
    </div>
  </div>
</template>
