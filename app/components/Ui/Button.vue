<script setup lang="ts">
import { computed, ref, watch } from 'vue';

defineOptions({ name: 'UiButton' });

type ButtonVariant =
  | 'default'
  | 'secondary'
  | 'destructive'
  | 'outline'
  | 'ghost'
  | 'link'
  | 'gradient'
  | 'elevated'
  | 'soft'
  | 'positive';
type ButtonSize = 'sm' | 'default' | 'lg' | 'icon';
type ButtonState = 'idle' | 'loading' | 'success' | 'error';

interface Props {
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
  state?: ButtonState;
  resetAfter?: number;
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  size: 'default',
  disabled: false,
  loading: false,
  state: 'idle',
  resetAfter: 2000,
});

const emit = defineEmits<{
  click: [event: MouseEvent];
}>();

const internalState = ref<ButtonState>(props.state);

watch(
  () => props.state,
  (newState) => {
    internalState.value = newState;
    if ((newState === 'success' || newState === 'error') && props.resetAfter > 0) {
      setTimeout(() => {
        internalState.value = 'idle';
      }, props.resetAfter);
    }
  }
);

const isDisabled = computed(() => {
  return props.disabled || props.loading || internalState.value === 'loading';
});

const isLoading = computed(() => {
  return props.loading || internalState.value === 'loading';
});

const buttonClasses = computed(() => {
  const base =
    'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 overflow-hidden';

  const clickFeedback = 'active:scale-[0.97] active:shadow-inner';

  const variants: Record<ButtonVariant, string> = {
    default: 'bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 hover:shadow-md',
    secondary: 'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 hover:shadow-md',
    destructive: 'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90 hover:shadow-md',
    outline: 'border-2 border-input bg-background hover:border-primary hover:text-primary',
    ghost: 'hover:bg-accent hover:text-accent-foreground',
    link: 'text-primary underline-offset-4 hover:underline',
    gradient: 'bg-gradient-to-r from-primary to-primary/80 text-primary-foreground shadow-md hover:from-primary/90 hover:to-primary/70 hover:shadow-lg',
    elevated: 'bg-card text-foreground shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-black/10 hover:bg-accent/50',
    soft: 'bg-primary/10 text-primary hover:bg-primary/20',
    positive: 'bg-emerald-500 text-white shadow-sm hover:bg-emerald-600 hover:shadow-md',
  };

  const sizes: Record<ButtonSize, string> = {
    sm: 'h-8 px-3 text-xs',
    default: 'h-10 px-4 py-2',
    lg: 'h-12 px-6 text-base',
    icon: 'h-10 w-10',
  };

  const stateClasses: Record<ButtonState, string> = {
    idle: '',
    loading: 'cursor-wait',
    success: 'bg-emerald-500 text-white hover:bg-emerald-500',
    error: 'bg-destructive text-destructive-foreground hover:bg-destructive',
  };

  return `${base} ${clickFeedback} ${variants[props.variant]} ${sizes[props.size]} ${stateClasses[internalState.value]}`;
});

function handleClick(event: MouseEvent) {
  if (!isDisabled.value) {
    emit('click', event);
  }
}
</script>

<template>
  <button :class="buttonClasses" :disabled="isDisabled" @click="handleClick">
    <svg
      v-if="isLoading"
      class="h-4 w-4 animate-spin"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
      <path
        class="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>

    <svg
      v-else-if="internalState === 'success'"
      class="h-4 w-4 animate-in zoom-in duration-200"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>

    <svg
      v-else-if="internalState === 'error'"
      class="h-4 w-4 animate-in zoom-in duration-200"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>

    <span v-if="internalState === 'success'" class="animate-in slide-in-from-left duration-200">Success</span>
    <span v-else-if="internalState === 'error'" class="animate-in slide-in-from-left duration-200">Error</span>
    <slot v-else />
  </button>
</template>
