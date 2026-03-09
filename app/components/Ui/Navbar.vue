<script setup lang="ts">
import { computed, ref, provide } from 'vue';

defineOptions({ name: 'UiNavbar' });

interface Props {
  fluid?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  fluid: false,
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
  return props.fluid
    ? 'w-full px-4'
    : 'container mx-auto px-4';
});
</script>

<template>
  <nav class="border-b border-border bg-background">
    <div :class="containerClasses">
      <slot />
    </div>
  </nav>
</template>
