<script setup lang="ts">
import { computed } from 'vue';

defineOptions({ name: 'UiNavbarItem' });

interface Props {
  href?: string;
  active?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  href: '#',
  active: false,
});

const itemClasses = computed(() => {
  const base = 'text-sm font-medium transition-colors hover:text-primary';
  const active = props.active
    ? 'text-foreground'
    : 'text-muted-foreground';
  
  return `${base} ${active}`;
});
</script>

<template>
  <a
    :href="href"
    :class="itemClasses"
  >
    <slot />
  </a>
</template>
