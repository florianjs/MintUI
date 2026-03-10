<script setup lang="ts">
import { ref, onMounted } from 'vue';

const isLoaded = ref(false);

onMounted(() => {
  setTimeout(() => (isLoaded.value = true), 100);
});
</script>

<template>
  <div
    class="min-h-screen bg-background text-foreground font-sans overflow-hidden relative selection:bg-primary selection:text-primary-foreground"
  >
    <!-- Abstract gradient blob background -->
    <div class="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div
        class="absolute -top-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-primary/20 blur-[120px] mix-blend-multiply dark:mix-blend-screen opacity-70 animate-[pulse_8s_ease-in-out_infinite]"
      ></div>
      <div
        class="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-secondary/30 blur-[100px] mix-blend-multiply dark:mix-blend-screen opacity-60 animate-[pulse_10s_ease-in-out_infinite_reverse]"
      ></div>
    </div>

    <!-- Header -->
    <header
      class="relative z-10 flex justify-between items-center px-6 py-6 md:px-12"
    >
      <div class="font-bold text-xl tracking-tight">KIOKU.</div>
      <nav class="hidden md:flex gap-8 text-sm font-medium tracking-wide">
        <a href="#" class="hover:text-primary transition-colors">Work</a>
        <a href="#" class="hover:text-primary transition-colors">About</a>
        <a href="#" class="hover:text-primary transition-colors">Contact</a>
      </nav>
      <button
        class="text-sm font-medium bg-foreground text-background px-5 py-2 rounded-full hover:scale-105 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
      >
        Let's Talk
      </button>
    </header>

    <!-- Hero -->
    <main class="relative z-10 px-6 md:px-12 pt-24 pb-20 md:pt-40 md:pb-32">
      <div
        class="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12"
      >
        <div
          class="md:w-3/5"
          :class="{
            'opacity-100 translate-y-0': isLoaded,
            'opacity-0 translate-y-12': !isLoaded,
          }"
          style="transition: all 1s cubic-bezier(0.16, 1, 0.3, 1)"
        >
          <div
            class="inline-block px-3 py-1 mb-6 rounded-full border border-border bg-muted/30 backdrop-blur-md text-xs font-medium tracking-widest uppercase"
          >
            Creative Developer
          </div>
          <h1
            class="text-[12vw] md:text-[8vw] leading-[0.9] font-black tracking-tighter mb-8"
          >
            DIGITAL<br />
            <span
              class="text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/40"
              >ARTISAN.</span
            >
          </h1>
          <p
            class="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed font-light"
          >
            I craft immersive digital experiences bridging the gap between
            design and fluid engineering. Based in Tokyo, working globally.
          </p>
        </div>

        <div
          class="md:w-2/5 aspect-[4/5] relative w-full rounded-2xl overflow-hidden group"
          :class="{
            'opacity-100 scale-100': isLoaded,
            'opacity-0 scale-95': !isLoaded,
          }"
          style="transition: all 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.2s"
        >
          <div
            class="absolute inset-0 bg-gradient-to-tr from-muted to-background"
          ></div>
          <!-- Abstract artistic visual -->
          <div class="absolute inset-0 flex items-center justify-center">
            <div
              class="w-64 h-64 rounded-full border border-primary/20 absolute group-hover:scale-110 transition-transform duration-1000 ease-out"
            ></div>
            <div
              class="w-48 h-48 rounded-full border border-primary/40 absolute group-hover:scale-90 transition-transform duration-1000 ease-out"
            ></div>
            <div
              class="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-accent relative z-10 group-hover:rotate-180 transition-transform duration-1000 ease-out"
            ></div>
          </div>
          <div
            class="absolute bottom-6 left-6 right-6 backdrop-blur-md bg-background/30 border border-white/10 p-4 rounded-xl translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 text-foreground"
          >
            <p class="text-sm font-medium">
              Currently available for freelance projects.
            </p>
          </div>
        </div>
      </div>
    </main>

    <!-- Selected Works -->
    <section
      class="relative z-10 px-6 md:px-12 py-32 bg-muted/30 border-y border-border"
    >
      <div class="max-w-7xl mx-auto">
        <div class="flex items-end justify-between mb-16">
          <h2 class="text-4xl md:text-6xl font-black tracking-tighter">
            Selected<br />Works (25-26)
          </h2>
          <button
            class="hidden md:flex items-center gap-2 text-sm font-medium border-b border-foreground pb-1 hover:text-primary hover:border-primary transition-colors"
          >
            View Archive
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>

        <div class="flex flex-col gap-8 md:gap-16">
          <!-- Work 1 -->
          <div
            class="group relative flex flex-col md:flex-row items-center gap-8 md:gap-16 cursor-pointer"
          >
            <div
              class="w-full md:w-3/5 aspect-video md:aspect-[3/2] overflow-hidden rounded-xl bg-card relative"
            >
              <div
                class="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 group-hover:scale-105 transition-transform duration-700 ease-out"
              ></div>
            </div>
            <div class="w-full md:w-2/5 flex flex-col justify-center">
              <div class="text-sm font-mono text-muted-foreground mb-4">
                01 // E-Commerce
              </div>
              <h3
                class="text-3xl md:text-5xl font-bold tracking-tight mb-4 group-hover:text-primary transition-colors text-foreground"
              >
                Lumina
              </h3>
              <p class="text-muted-foreground mb-8">
                A headless e-commerce experience tailored for a premium lighting
                brand. Built with Nuxt and Shopify.
              </p>
              <div class="flex gap-3">
                <span
                  class="px-3 py-1 rounded-full text-xs border border-border text-foreground"
                  >Nuxt 4</span
                >
                <span
                  class="px-3 py-1 rounded-full text-xs border border-border text-foreground"
                  >WebGL</span
                >
              </div>
            </div>
          </div>

          <!-- Work 2 -->
          <div
            class="group relative flex flex-col md:flex-row-reverse items-center gap-8 md:gap-16 cursor-pointer"
          >
            <div
              class="w-full md:w-3/5 aspect-video md:aspect-[3/2] overflow-hidden rounded-xl bg-card relative"
            >
              <div
                class="absolute inset-0 bg-gradient-to-bl from-emerald-500/20 to-teal-500/20 group-hover:scale-105 transition-transform duration-700 ease-out"
              ></div>
            </div>
            <div
              class="w-full md:w-2/5 flex flex-col justify-center md:items-end md:text-right"
            >
              <div class="text-sm font-mono text-muted-foreground mb-4">
                02 // FinTech
              </div>
              <h3
                class="text-3xl md:text-5xl font-bold tracking-tight mb-4 group-hover:text-primary transition-colors text-foreground"
              >
                Vault Platform
              </h3>
              <p class="text-muted-foreground mb-8">
                Redefining banking dashboards with a serene, ultra-minimalist
                interface that calms the user.
              </p>
              <div class="flex gap-3">
                <span
                  class="px-3 py-1 rounded-full text-xs border border-border text-foreground"
                  >Vue</span
                >
                <span
                  class="px-3 py-1 rounded-full text-xs border border-border text-foreground"
                  >Tailwind</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="relative z-10 px-6 md:px-12 pt-32 pb-12">
      <div class="max-w-7xl mx-auto flex flex-col items-center text-center">
        <h2
          class="text-[10vw] leading-none font-black tracking-tighter mb-8 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-primary hover:to-secondary transition-all duration-500 cursor-pointer"
        >
          Let's talk.
        </h2>
        <a
          href="mailto:hello@example.com"
          class="text-xl md:text-2xl font-light text-muted-foreground hover:text-foreground transition-colors mb-24"
        >
          hello@kioku.design
        </a>

        <div
          class="w-full flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-border text-sm font-medium"
        >
          <p class="text-muted-foreground">
            © 2026 Kioku. All rights reserved.
          </p>
          <div class="flex gap-6">
            <a
              href="#"
              class="hover:text-primary transition-colors text-foreground"
              >X (Twitter)</a
            >
            <a
              href="#"
              class="hover:text-primary transition-colors text-foreground"
              >GitHub</a
            >
            <a
              href="#"
              class="hover:text-primary transition-colors text-foreground"
              >Dribbble</a
            >
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
