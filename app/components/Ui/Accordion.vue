<script setup lang="ts">
import { ref } from 'vue';

defineOptions({ name: 'UiAccordion' });

interface Props {
  title: string;
  defaultOpen?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  defaultOpen: false,
});

const isOpen = ref(props.defaultOpen);

const toggle = () => {
  isOpen.value = !isOpen.value;
};
</script>

<template>
  <div class="border-b border-border">
    <button
      type="button"
      class="flex w-full flex-1 items-center justify-between py-4 font-medium transition-all hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      @click="toggle"
      :aria-expanded="isOpen"
    >
      <span>{{ title }}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="h-4 w-4 shrink-0 transition-transform duration-200"
        :class="{ 'rotate-180': isOpen }"
      >
        <path d="m6 9 6 6 6-6" />
      </svg>
    </button>
    <div
      class="grid transition-[grid-template-rows] duration-200 ease-in-out"
      :class="isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'"
      aria-hidden="true"
    >
      <div class="overflow-hidden">
        <div class="pb-4 pt-0 text-sm text-muted-foreground">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>
