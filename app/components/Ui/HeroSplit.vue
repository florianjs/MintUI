<script setup lang="ts">
defineOptions({ name: 'UiHeroSplit' });

interface Props {
  title: string;
  subtitle?: string;
  reversed?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  reversed: false,
});
</script>

<template>
  <section
    class="relative overflow-hidden bg-background py-16 sm:py-24 lg:py-32"
  >
    <div class="container mx-auto px-4 md:px-6">
      <div
        class="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center"
        :class="{ 'lg:grid-flow-col-dense': reversed }"
      >
        <div
          :class="{ 'lg:col-start-2': reversed }"
          class="flex flex-col justify-center space-y-8"
        >
          <div v-if="$slots.badge">
            <slot name="badge" />
          </div>

          <div class="space-y-4">
            <h1
              class="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl"
            >
              <slot name="title">{{ props.title }}</slot>
            </h1>
            <p
              v-if="props.subtitle || $slots.subtitle"
              class="max-w-[42rem] text-lg text-muted-foreground sm:text-xl leading-relaxed font-medium"
            >
              <slot name="subtitle">{{ props.subtitle }}</slot>
            </p>
          </div>

          <div v-if="$slots.actions" class="flex flex-col sm:flex-row gap-4">
            <slot name="actions" />
          </div>

          <div v-if="$slots.features" class="pt-6 mt-8 border-t border-border">
            <slot name="features" />
          </div>
        </div>

        <div
          :class="{ 'lg:col-start-1': reversed }"
          class="relative mx-auto w-full max-w-[500px] lg:max-w-none flex items-center justify-center pt-8 lg:pt-0"
        >
          <div
            class="absolute inset-x-0 -top-4 -bottom-4 bg-gradient-to-tr from-primary/10 to-primary/5 rounded-[3rem] transform -rotate-2 -z-10 dark:from-primary/20 dark:to-primary/5"
          ></div>
          <slot name="image" />
        </div>
      </div>
    </div>
  </section>
</template>
