<script setup lang="ts">
import UiAccordion from './Accordion.vue';

defineOptions({ name: 'UiFaq' });

export interface FaqItem {
  question: string;
  answer: string;
  defaultOpen?: boolean;
}

interface Props {
  title?: string;
  description?: string;
  items: FaqItem[];
}

const props = withDefaults(defineProps<Props>(), {
  title: 'Frequently Asked Questions',
  description: '',
  items: () => [],
});
</script>

<template>
  <section class="mx-auto w-full max-w-3xl py-12 md:py-16 lg:py-20">
    <div v-if="title || description" class="mb-8 space-y-4 text-center">
      <h2
        v-if="title"
        class="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl"
      >
        {{ title }}
      </h2>
      <p
        v-if="description"
        class="mx-auto max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8"
      >
        {{ description }}
      </p>
    </div>
    <div class="w-full">
      <UiAccordion
        v-for="(item, index) in items"
        :key="index"
        :title="item.question"
        :default-open="item.defaultOpen"
      >
        {{ item.answer }}
      </UiAccordion>
      <div
        v-if="items.length === 0"
        class="text-center text-muted-foreground py-8"
      >
        No questions available.
      </div>
    </div>
  </section>
</template>
