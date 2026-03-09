<script setup lang="ts">
type AvatarSize = 'sm' | 'default' | 'lg';

interface Props {
  src?: string;
  alt?: string;
  fallback?: string;
  size?: AvatarSize;
}

const props = withDefaults(defineProps<Props>(), {
  src: '',
  alt: '',
  fallback: '',
  size: 'default',
});

const imageError = ref(false);

const sizeClasses = computed(() => {
  const sizes: Record<AvatarSize, string> = {
    sm: 'h-8 w-8 text-xs',
    default: 'h-10 w-10 text-sm',
    lg: 'h-12 w-12 text-base',
  };
  return sizes[props.size];
});

const initials = computed(() => {
  if (props.fallback) return props.fallback;
  return (
    props.alt
      ?.split(' ')
      .map((w) => w[0])
      .join('')
      .toUpperCase()
      .slice(0, 2) || '?'
  );
});
</script>

<template>
  <span
    :class="[
      'relative flex shrink-0 overflow-hidden rounded-full',
      sizeClasses,
    ]"
  >
    <img
      v-if="src && !imageError"
      :src="src"
      :alt="alt"
      class="aspect-square h-full w-full object-cover"
      @error="imageError = true"
    />
    <span
      v-else
      class="flex h-full w-full items-center justify-center rounded-full bg-muted font-medium text-muted-foreground"
    >
      {{ initials }}
    </span>
  </span>
</template>
