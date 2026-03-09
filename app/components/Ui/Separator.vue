<script setup lang="ts">
interface Props {
  orientation?: 'horizontal' | 'vertical';
}

withDefaults(defineProps<Props>(), {
  orientation: 'horizontal',
});
</script>

<template>
  <div
    role="separator"
    :class="[
      'shrink-0 bg-border',
      orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]',
    ]"
  />
</template>
