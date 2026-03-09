<script setup lang="ts">
import { computed } from 'vue';

defineOptions({ name: 'UiBadge' });

type BadgeVariant = 'default' | 'secondary' | 'destructive' | 'outline';

interface Props {
  variant?: BadgeVariant;
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
});

const badgeClasses = computed(() => {
  const base =
    'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2';

  const variants: Record<BadgeVariant, string> = {
    default:
      'border-transparent bg-primary text-primary-foreground hover:bg-primary/80',
    secondary:
      'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
    destructive:
      'border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80',
    outline: 'text-foreground',
  };

  return `${base} ${variants[props.variant]}`;
});
</script>

<template>
  <div :class="badgeClasses">
    <slot />
  </div>
</template>
