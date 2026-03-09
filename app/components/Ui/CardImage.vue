<script setup lang="ts">
defineOptions({ name: 'UiCardImage' });

interface Props {
  src: string;
  alt?: string;
}

withDefaults(defineProps<Props>(), {
  alt: '',
});
</script>

<template>
  <div class="overflow-hidden rounded-t-xl">
    <img :src="src" :alt="alt" class="w-full h-48 object-cover" />
  </div>
</template>
