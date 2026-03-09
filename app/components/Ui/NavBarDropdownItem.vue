<script setup lang="ts">
import { computed } from 'vue';

defineOptions({ name: 'UiNavBarDropdownItem' });

type DropdownItemVariant = 'default' | 'destructive';

interface Props {
  href?: string;
  variant?: DropdownItemVariant;
  disabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  href: '#',
  variant: 'default',
  disabled: false,
});

const emit = defineEmits<{
  click: [event: MouseEvent];
}>();

const itemClasses = computed(() => {
  const base = 'flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors';
  
  const variants: Record<DropdownItemVariant, string> = {
    default: 'text-popover-foreground hover:bg-accent hover:text-accent-foreground',
    destructive: 'text-destructive hover:bg-destructive/10',
  };

  const disabledClass = props.disabled ? 'pointer-events-none opacity-50' : '';
  
  return `${base} ${variants[props.variant]} ${disabledClass}`;
});

const handleClick = (event: MouseEvent) => {
  if (props.disabled) return;
  event.preventDefault();
  emit('click', event);
};
</script>

<template>
  <a
    :href="disabled ? undefined : href"
    :class="itemClasses"
    @click="handleClick"
  >
    <slot />
  </a>
</template>
