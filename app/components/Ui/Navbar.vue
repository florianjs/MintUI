<script setup lang="ts">
import { computed, ref, provide } from 'vue';

defineOptions({ name: 'UiNavBar' });

type NavBarVariant = 'default' | 'glass' | 'solid';

interface Props {
  variant?: NavBarVariant;
  fluid?: boolean;
  sticky?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'glass',
  fluid: false,
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
  const base = 'w-full z-50 transition-all duration-300';
  
  const variants: Record<NavBarVariant, string> = {
    default: 'bg-background/95 backdrop-blur-sm border-b border-border/50',
    glass: 'bg-background/70 backdrop-blur-lg border-b border-border/30',
    solid: 'bg-background border-b border-border',
  };

  const stickyClass = props.sticky ? 'fixed top-0 left-0' : '';
  
  return `${base} ${variants[props.variant]} ${stickyClass}`;
});

const containerClasses = computed(() => {
  return props.fluid
    ? 'w-full px-6 lg:px-8'
    : 'container mx-auto px-6 lg:px-8';
});
</script>

<template>
  <nav :class="navClasses">
    <div :class="containerClasses">
      <div class="flex h-16 items-center justify-between">
        <slot />
      </div>
    </div>
  </nav>
</template>
