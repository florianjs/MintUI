<script setup lang="ts">
import { computed, inject } from 'vue';

defineOptions({ name: 'UiNavbarMenu' });

interface Props {
  mobile?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  mobile: false,
});

const navbar = inject<{
  isMobileMenuOpen: { value: boolean };
  toggleMobileMenu: () => void;
} | null>('navbar', null);

const isMobileMenuOpen = computed(() => navbar?.isMobileMenuOpen?.value ?? false);

const menuClasses = computed(() => {
  const base = 'flex items-center gap-6';
  
  if (props.mobile) {
    return `${base} flex-col items-start gap-4 pt-4 pb-2`;
  }
  
  return base;
});
</script>

<template>
  <div
    v-if="!mobile || isMobileMenuOpen"
    :class="menuClasses"
  >
    <slot />
  </div>
</template>
