<script setup lang="ts">
import { computed, ref, provide } from 'vue';

defineOptions({ name: 'UiNavbarFloating' });

type NavbarFloatingVariant = 'default' | 'bordered';

interface Props {
  variant?: NavbarFloatingVariant;
  sticky?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  sticky: true,
});

const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

provide('navbar', {
  isMobileMenuOpen,
  toggleMobileMenu,
});

const navClasses = computed(() => {
  const base = 'mx-auto max-w-5xl transition-all duration-300 ease-out';
  
  const variants: Record<NavbarFloatingVariant, string> = {
    default: 'bg-background border border-border',
    bordered: 'bg-card border-2 border-border',
  };

  const positionClass = props.sticky 
    ? 'fixed top-8 left-1/2 -translate-x-1/2 z-50 shadow-lg' 
    : 'relative';

  return `${base} ${variants[props.variant]} ${positionClass} rounded-2xl`;
});
</script>

<template>
  <nav :class="navClasses">
    <div class="flex items-center justify-between px-8 py-5">
      <slot />
    </div>
    <slot name="mobile" />
  </nav>
</template>
