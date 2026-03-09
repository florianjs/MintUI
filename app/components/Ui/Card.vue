<script setup lang="ts">
import { computed } from 'vue';

defineOptions({ name: 'UiCard' });

type CardVariant = 'default' | 'elevated' | 'outline' | 'glass' | 'gradient';

interface Props {
  variant?: CardVariant;
  interactive?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  interactive: false,
});

const cardClasses = computed(() => {
  const base = 'rounded-xl text-card-foreground transition-all duration-200';

  const variants: Record<CardVariant, string> = {
    default: 'border border-border bg-card shadow-sm',
    elevated: 'bg-card shadow-lg shadow-black/5',
    outline: 'border-2 border-border bg-card/50',
    glass: 'border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl shadow-black/5',
    gradient: 'bg-card relative overflow-hidden before:absolute before:inset-0 before:p-[1px] before:rounded-xl before:bg-gradient-to-br before:from-primary/50 before:via-transparent before:to-primary/30 before:-z-10',
  };

  const hoverVariants: Record<CardVariant, string> = {
    default: 'hover:shadow-md hover:border-border/80',
    elevated: 'hover:shadow-xl hover:shadow-black/10',
    outline: 'hover:border-primary/50 hover:bg-card',
    glass: 'hover:bg-white/10 hover:border-white/20',
    gradient: 'hover:before:from-primary/60 hover:before:to-primary/40',
  };

  if (props.interactive) {
    return `${base} ${variants[props.variant]} cursor-pointer hover:scale-[1.02] hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background`;
  }

  return `${base} ${variants[props.variant]} ${hoverVariants[props.variant]}`;
});
</script>

<template>
  <div :class="cardClasses" :role="interactive ? 'button' : undefined" :tabindex="interactive ? 0 : undefined">
    <slot />
  </div>
</template>
