<script setup lang="ts">
import { computed, ref, provide } from 'vue';

defineOptions({ name: 'UiNavbarCentered' });

interface Props {
  fluid?: boolean;
  variant?: 'default' | 'elevated' | 'floating';
}

const props = withDefaults(defineProps<Props>(), {
  fluid: false,
  variant: 'default',
});

const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

provide('navbar', {
  isMobileMenuOpen,
  toggleMobileMenu,
});

const containerClasses = computed(() => {
  const base = 'mx-auto flex h-16 max-w-7xl items-center justify-between gap-8 px-4';

  if (props.fluid) {
    return 'flex h-16 items-center justify-between gap-8 px-4';
  }

  return base;
});

const navbarClasses = computed(() => {
  const base = 'relative w-full border-b border-border bg-background transition-all';

  const variants = {
    default: '',
    elevated: 'shadow-md',
    floating: 'border-none bg-transparent',
  };

  return `${base} ${variants[props.variant]}`;
});
</script>

<template>
  <nav :class="navbarClasses">
    <div :class="containerClasses">
      <slot name="left" />
      <slot name="center" />
      <slot name="right" />
    </div>
    <slot name="mobile" />
  </nav>
</template>
