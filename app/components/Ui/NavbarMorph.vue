<script setup lang="ts">
import { computed, ref, provide, onMounted, onUnmounted } from 'vue';

defineOptions({ name: 'UiNavbarMorph' });

interface Props {
  scrollThreshold?: number;
}

const props = withDefaults(defineProps<Props>(), {
  scrollThreshold: 50,
});

const isScrolled = ref(false);
const isMobileMenuOpen = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > props.scrollThreshold;
};

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

provide('navbar', {
  isMobileMenuOpen,
  toggleMobileMenu,
});

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  handleScroll();
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

const navClasses = computed(() => {
  const base = 'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out bg-background border-b border-border';
  
  const scrolledClasses = isScrolled.value
    ? 'mx-6 mt-6 rounded-2xl shadow-lg border'
    : '';

  const paddingClasses = isScrolled.value ? 'px-8 py-5' : 'px-8 lg:px-12 py-6';

  return `${base} ${scrolledClasses} ${paddingClasses}`;
});
</script>

<template>
  <nav :class="navClasses">
    <div class="flex items-center justify-between max-w-6xl mx-auto">
      <slot />
    </div>
    <slot name="mobile" />
  </nav>
</template>
