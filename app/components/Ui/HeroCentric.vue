<script setup lang="ts">
import { computed } from 'vue';

defineOptions({ name: 'UiHeroCentric' });

interface Props {
  title: string;
  subtitle?: string;
}

const props = defineProps<Props>();
</script>

<template>
  <section
    class="relative overflow-hidden bg-background py-24 sm:py-32 flex flex-col items-center text-center"
  >
    <!-- Subtle radial gradient background pattern -->
    <div
      class="absolute inset-0 -z-10 h-full w-full bg-background [background:radial-gradient(125%_125%_at_50%_10%,transparent_50%,hsl(var(--primary))_100%)] opacity-20 dark:opacity-30"
    ></div>

    <div
      class="container mx-auto px-4 md:px-6 max-w-4xl flex flex-col items-center"
    >
      <div v-if="$slots.badge" class="mb-6 flex justify-center">
        <slot name="badge" />
      </div>

      <h1
        class="text-4xl tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl mb-6 flex flex-col font-extrabold gap-2"
      >
        <slot name="title">{{ props.title }}</slot>
      </h1>

      <p
        v-if="props.subtitle || $slots.subtitle"
        class="mt-4 max-w-[42rem] text-lg text-muted-foreground sm:text-xl mb-10 leading-relaxed font-medium"
      >
        <slot name="subtitle">{{ props.subtitle }}</slot>
      </p>

      <div
        v-if="$slots.actions"
        class="flex flex-wrap justify-center items-center gap-4 w-full mt-2"
      >
        <slot name="actions" />
      </div>

      <div
        v-if="$slots.image"
        class="mt-16 sm:mt-24 w-full flex justify-center relative"
      >
        <div
          class="relative w-full max-w-5xl rounded-xl border border-border bg-card shadow-2xl overflow-hidden ring-1 ring-ring/10"
        >
          <slot name="image" />
        </div>
      </div>
    </div>
  </section>
</template>
