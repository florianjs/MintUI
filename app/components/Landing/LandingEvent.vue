<script setup lang="ts">
import { ref, onMounted } from 'vue';

const isLoaded = ref(false);

onMounted(() => {
  setTimeout(() => (isLoaded.value = true), 100);
});
</script>

<template>
  <div
    class="min-h-screen bg-background text-foreground font-sans selection:bg-purple-500 selection:text-white pb-32"
  >
    <!-- Navbar -->
    <nav class="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div
        class="max-w-6xl mx-auto bg-background/60 backdrop-blur-xl border border-border/50 rounded-2xl px-6 py-3 flex justify-between items-center shadow-sm"
      >
        <div class="font-bold text-xl tracking-tighter flex items-center gap-2">
          <div
            class="w-3 h-3 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500"
          ></div>
          NEXUS<span class="font-light">2026</span>
        </div>
        <div class="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#speakers" class="hover:text-violet-500 transition-colors"
            >Speakers</a
          >
          <a href="#schedule" class="hover:text-violet-500 transition-colors"
            >Schedule</a
          >
          <a href="#venue" class="hover:text-violet-500 transition-colors"
            >Venue</a
          >
        </div>
        <button
          class="bg-foreground text-background font-medium text-sm px-4 py-2 rounded-xl hover:bg-violet-600 hover:text-white transition-colors"
        >
          Get Tickets
        </button>
      </div>
    </nav>

    <!-- Hero -->
    <main class="relative pt-48 pb-32 px-6 overflow-hidden">
      <!-- Background Effects -->
      <div
        class="absolute inset-0 z-0 pointer-events-none flex items-center justify-center"
      >
        <div
          class="w-[800px] h-[800px] bg-violet-500/20 rounded-full blur-[120px] absolute top-[-20%] left-[-10%]"
        ></div>
        <div
          class="w-[600px] h-[600px] bg-fuchsia-500/20 rounded-full blur-[100px] absolute bottom-[-10%] right-[-10%]"
        ></div>
      </div>

      <div
        class="max-w-5xl mx-auto relative z-10 text-center flex flex-col items-center"
      >
        <div
          class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-600 dark:text-violet-400 text-sm font-medium mb-8"
          :class="{
            'opacity-100 translate-y-0': isLoaded,
            'opacity-0 translate-y-8': !isLoaded,
          }"
          style="transition: all 0.8s ease-out"
        >
          <span class="w-2 h-2 rounded-full bg-violet-500 animate-pulse"></span>
          October 14-16, Paris
        </div>

        <h1
          class="text-6xl md:text-8xl font-black tracking-tight leading-[0.95] mb-8"
          :class="{
            'opacity-100 translate-y-0': isLoaded,
            'opacity-0 translate-y-12': !isLoaded,
          }"
          style="transition: all 1s ease-out 0.1s"
        >
          The Future of<br />
          <span
            class="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500"
          >
            Digital Craft.
          </span>
        </h1>

        <p
          class="text-xl text-muted-foreground max-w-2xl text-center mb-12"
          :class="{
            'opacity-100 translate-y-0': isLoaded,
            'opacity-0 translate-y-12': !isLoaded,
          }"
          style="transition: all 1s ease-out 0.2s"
        >
          Join 2,000+ creators, developers, and designers for three days of
          immersive talks, workshops, and networking at the intersection of tech
          and art.
        </p>

        <div
          class="flex flex-col sm:flex-row gap-4"
          :class="{
            'opacity-100 translate-y-0': isLoaded,
            'opacity-0 translate-y-8': !isLoaded,
          }"
          style="transition: all 1s ease-out 0.3s"
        >
          <button
            class="px-8 py-4 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-bold text-lg hover:shadow-lg hover:shadow-violet-500/25 hover:scale-105 transition-all duration-300"
          >
            Secure Your Pass
          </button>
          <button
            class="px-8 py-4 rounded-xl bg-muted text-foreground font-bold text-lg hover:bg-muted/80 transition-colors border border-border"
          >
            View Schedule
          </button>
        </div>
      </div>
    </main>

    <!-- Speakers Grid -->
    <section class="max-w-6xl mx-auto px-6 py-20 relative z-10">
      <div class="flex justify-between items-end mb-12">
        <div>
          <h2 class="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Featured Speakers
          </h2>
          <p class="text-muted-foreground text-lg">
            Learn from the industry's most visionary minds.
          </p>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <!-- Speaker Card -->
        <div
          v-for="i in 4"
          :key="i"
          class="group relative overflow-hidden rounded-3xl bg-card border border-border/50 hover:border-violet-500/50 transition-colors"
        >
          <div class="aspect-[4/5] bg-muted relative overflow-hidden">
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"
            ></div>
            <!-- Dummy visual -->
            <div
              class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNlNWU1ZTUiLz48L3N2Zz4=')] dark:bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiMzMzMiLz48L3N2Zz4=')] bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
            ></div>

            <div class="absolute bottom-0 left-0 w-full p-6 z-20">
              <h3 class="text-white font-bold text-xl mb-1">
                Jane Doe {{ i }}
              </h3>
              <p class="text-white/70 text-sm">Design Director @ TechCorp</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Ticket Banner -->
    <section class="max-w-6xl mx-auto px-6 py-20 relative z-10">
      <div
        class="rounded-3xl bg-gradient-to-br from-violet-900 to-fuchsia-900 overflow-hidden relative p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12"
      >
        <!-- Abstract Shapes -->
        <div
          class="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-2xl"
        ></div>
        <div
          class="absolute -bottom-24 -left-24 w-64 h-64 bg-fuchsia-500/20 rounded-full blur-2xl"
        ></div>

        <div class="relative z-10 md:w-2/3">
          <h2
            class="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4"
          >
            Don't miss out.
          </h2>
          <p class="text-white/70 text-lg sm:text-xl max-w-lg mb-8">
            Early bird tickets are flying fast. Secure your spot before they run
            out.
          </p>
          <div class="flex items-center gap-6">
            <div class="flex flex-col">
              <span class="text-white font-bold text-3xl">$299</span>
              <span class="text-white/50 text-sm"
                >Early Bird (Ends in 2 days)</span
              >
            </div>
            <div class="h-12 w-px bg-white/20"></div>
            <div class="flex flex-col">
              <span class="text-white font-bold text-3xl">$499</span>
              <span class="text-white/50 text-sm">Regular Ticket</span>
            </div>
          </div>
        </div>

        <div
          class="relative z-10 md:w-1/3 flex justify-center md:justify-end w-full"
        >
          <button
            class="w-full md:w-auto px-8 py-5 rounded-2xl bg-white text-violet-900 font-bold text-lg hover:shadow-xl hover:shadow-white/10 hover:scale-105 transition-all duration-300"
          >
            Buy Ticket Now
          </button>
        </div>
      </div>
    </section>
  </div>
</template>
