<script setup lang="ts">
import { computed, inject } from 'vue';

defineOptions({ name: 'UiNavbarToggle' });

interface Props {
  icon?: 'hamburger' | 'close';
}

const props = withDefaults(defineProps<Props>(), {
  icon: 'hamburger',
});

const navbar = inject<{
  isMobileMenuOpen: { value: boolean };
  toggleMobileMenu: () => void;
} | null>('navbar', null);

const isOpen = computed(() => navbar?.isMobileMenuOpen?.value ?? false);

const toggle = () => {
  navbar?.toggleMobileMenu();
};

const iconClasses = computed(() => {
  const base = 'h-5 w-5';
  return base;
});
</script>

<template>
  <button
    class="inline-flex items-center justify-center rounded-md p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 md:hidden"
    @click="toggle"
    aria-label="Toggle menu"
  >
    <svg
      v-if="icon === 'hamburger' && !isOpen"
      :class="iconClasses"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
    <svg
      v-else-if="icon === 'close' || isOpen"
      :class="iconClasses"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  </button>
</template>
