<script setup lang="ts">
import { computed, inject } from 'vue';

defineOptions({ name: 'UiNavbarBrand' });

interface Props {
  href?: string;
}

const props = withDefaults(defineProps<Props>(), {
  href: '/',
});

const navbar = inject('navbar', null);
const isMobileMenuOpen = navbar?.isMobileMenuOpen || { value: false };
</script>

<template>
  <div class="flex items-center gap-2">
    <a
      :href="href"
      class="text-lg font-semibold text-foreground transition-colors hover:text-primary"
    >
      <slot />
    </a>
  </div>
</template>
