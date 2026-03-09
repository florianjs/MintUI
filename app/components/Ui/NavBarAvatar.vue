<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';

defineOptions({ name: 'UiNavBarAvatar' });

interface Props {
  src?: string;
  alt?: string;
  fallback?: string;
}

const props = withDefaults(defineProps<Props>(), {
  src: '',
  alt: '',
  fallback: '',
});

const isOpen = ref(false);
const dropdownRef = ref<HTMLElement | null>(null);

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const closeDropdown = () => {
  isOpen.value = false;
};

const handleClickOutside = (event: MouseEvent) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target as Node)) {
    closeDropdown();
  }
};

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside);
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
  <div ref="dropdownRef" class="relative">
    <button
      class="flex items-center gap-2 rounded-full p-1 transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      @click="toggleDropdown"
    >
      <div class="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-muted">
        <img
          v-if="src"
          :src="src"
          :alt="alt"
          class="h-full w-full object-cover"
        />
        <span
          v-else
          class="flex h-full w-full items-center justify-center text-sm font-medium text-muted-foreground"
        >
          {{ initials }}
        </span>
      </div>
      <svg
        class="h-4 w-4 text-muted-foreground transition-transform"
        :class="{ 'rotate-180': isOpen }"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </button>

    <Transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <div
        v-if="isOpen"
        class="absolute right-0 mt-2 w-56 origin-top-right rounded-lg bg-popover/95 backdrop-blur-lg border border-border/50 shadow-lg"
      >
        <div class="p-1">
          <slot />
        </div>
      </div>
    </Transition>
  </div>
</template>
