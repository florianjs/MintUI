<script setup lang="ts">
defineOptions({ name: 'UiHeroGlow' });

interface Props {
  title: string;
  subtitle?: string;
}

const props = defineProps<Props>();
</script>

<template>
  <section
    class="relative overflow-hidden bg-zinc-950 text-zinc-50 py-24 sm:py-32 flex flex-col items-center text-center dark"
  >
    <!-- Glowing background effects -->
    <div
      class="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] sm:w-[1000px] opacity-30 pointer-events-none"
    >
      <div
        class="absolute inset-0 bg-primary/40 blur-[80px] sm:blur-[100px] rounded-full mix-blend-screen"
      ></div>
    </div>
    <div
      class="absolute bottom-0 left-0 w-[400px] h-[300px] sm:w-[500px] opacity-20 pointer-events-none"
    >
      <div
        class="absolute inset-0 bg-secondary/50 blur-[80px] sm:blur-[100px] rounded-full mix-blend-screen"
      ></div>
    </div>
    <div
      class="absolute bottom-0 right-0 w-[400px] h-[300px] sm:w-[500px] opacity-20 pointer-events-none"
    >
      <div
        class="absolute inset-0 bg-transparent blur-[80px] sm:blur-[100px] rounded-full mix-blend-screen overflow-hidden"
      >
        <!-- Fallback color if destructive is not very visible in dark -->
        <div class="w-full h-full bg-blue-500/50"></div>
      </div>
    </div>

    <!-- Grid overlay -->
    <div
      class="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_10%,#000_70%,transparent_100%)] pointer-events-none"
    ></div>

    <div
      class="container relative z-10 mx-auto px-4 md:px-6 max-w-5xl flex flex-col items-center"
    >
      <div v-if="$slots.badge" class="mb-8 flex justify-center">
        <slot name="badge" />
      </div>

      <h1
        class="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60 drop-shadow-sm pb-2"
      >
        <slot name="title">{{ props.title }}</slot>
      </h1>

      <p
        v-if="props.subtitle || $slots.subtitle"
        class="mt-4 max-w-2xl text-lg text-zinc-400 sm:text-xl md:text-2xl mb-10 leading-relaxed font-medium"
      >
        <slot name="subtitle">{{ props.subtitle }}</slot>
      </p>

      <div
        v-if="$slots.actions"
        class="flex flex-wrap justify-center items-center gap-4 w-full mt-4"
      >
        <slot name="actions" />
      </div>
    </div>
  </section>
</template>
