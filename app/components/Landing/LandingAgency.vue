<script setup lang="ts">
import { ref, onMounted } from 'vue';

const animateIn = ref(false);

onMounted(() => {
  setTimeout(() => {
    animateIn.value = true;
  }, 50);
});
</script>

<template>
  <div
    class="min-h-screen bg-[#F4F4F0] text-black font-sans selection:bg-black selection:text-[#F4F4F0] overflow-hidden"
  >
    <!-- Top Bar -->
    <header
      class="flex justify-between items-center p-6 border-b border-black md:px-12"
    >
      <div class="font-black text-2xl tracking-tighter uppercase">Studio™</div>
      <nav
        class="hidden md:flex gap-12 font-medium text-sm tracking-wide uppercase"
      >
        <a href="#" class="hover:underline underline-offset-4 decoration-2"
          >Work</a
        >
        <a href="#" class="hover:underline underline-offset-4 decoration-2"
          >Expertise</a
        >
        <a href="#" class="hover:underline underline-offset-4 decoration-2"
          >Studio</a
        >
        <a href="#" class="hover:underline underline-offset-4 decoration-2"
          >Journal</a
        >
      </nav>
      <button
        class="font-medium text-sm tracking-wide uppercase border border-black px-6 py-2 hover:bg-black hover:text-[#F4F4F0] transition-colors"
      >
        Let's Talk
      </button>
    </header>

    <!-- Marquee -->
    <div
      class="border-b border-black overflow-hidden flex bg-black text-[#F4F4F0] py-3"
    >
      <div
        class="whitespace-nowrap flex gap-8 font-mono text-sm uppercase tracking-widest animate-[marquee_20s_linear_infinite]"
      >
        <span>Digital Design</span>
        <span>•</span>
        <span>Brand Identity</span>
        <span>•</span>
        <span>Web Development</span>
        <span>•</span>
        <span>Motion Graphics</span>
        <span>•</span>
        <span>Strategic Thinking</span>
        <span>•</span>
        <span>Digital Design</span>
        <span>•</span>
        <span>Brand Identity</span>
        <span>•</span>
        <span>Web Development</span>
        <span>•</span>
        <span>Motion Graphics</span>
        <span>•</span>
        <span>Strategic Thinking</span>
      </div>
    </div>

    <!-- Hero Section -->
    <main class="px-6 md:px-12 pt-20 pb-32 border-b border-black">
      <div class="max-w-7xl mx-auto">
        <h1
          class="text-[12vw] leading-[0.85] font-black tracking-tighter uppercase mb-12 origin-left transition-transform duration-1000 ease-out"
          :class="{
            'translate-y-0 opacity-100': animateIn,
            'translate-y-24 opacity-0': !animateIn,
          }"
        >
          We shape <br />
          <span
            class="text-transparent bg-clip-text"
            style="-webkit-text-stroke: 2px black"
            >culture</span
          >
          through<br />
          design.
        </h1>

        <div
          class="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-black pt-12 transition-all duration-1000 delay-300"
          :class="{
            'translate-y-0 opacity-100': animateIn,
            'translate-y-12 opacity-0': !animateIn,
          }"
        >
          <div class="md:col-start-2">
            <p class="text-xl font-medium leading-relaxed">
              An independent creative studio working at the intersection of
              brand identity, digital experiences, and cultural resonance. We
              partner with visionaries to build tomorrow's icons.
            </p>
          </div>
          <div class="flex flex-col gap-6">
            <div>
              <div
                class="text-sm font-bold uppercase tracking-widest mb-2 border-b border-black/20 pb-2"
              >
                Located
              </div>
              <p>Paris — France<br />Available Worldwide</p>
            </div>
            <div>
              <div
                class="text-sm font-bold uppercase tracking-widest mb-2 border-b border-black/20 pb-2"
              >
                Connect
              </div>
              <p>hello@studio.com<br />+33 1 23 45 67 89</p>
            </div>
          </div>
        </div>
      </div>
    </main>

    <!-- Selected Works -->
    <section class="py-24 px-6 md:px-12 bg-black text-[#F4F4F0]">
      <div class="max-w-7xl mx-auto">
        <div
          class="flex justify-between items-end mb-16 border-b border-[#F4F4F0]/30 pb-8"
        >
          <h2
            class="text-5xl md:text-7xl font-black tracking-tighter uppercase"
          >
            Selected Work
          </h2>
          <a
            href="#"
            class="text-lg hover:underline underline-offset-4 decoration-2 hidden md:block"
            >View all projects (12) →</a
          >
        </div>

        <!-- Portfolio Gallery -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-y-24">
          <!-- Project 1 -->
          <div class="group cursor-pointer">
            <div
              class="aspect-[4/5] bg-[#1A1A1A] mb-6 overflow-hidden relative"
            >
              <!-- Placeholder Image Content -->
              <div
                class="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-950 flex items-center justify-center group-hover:scale-105 transition-transform duration-700"
              >
                <div
                  class="w-32 h-32 rounded-full border border-white/20 flex items-center justify-center bg-white/5 backdrop-blur-sm group-hover:bg-white group-hover:text-black transition-colors duration-500 font-medium uppercase tracking-widest text-sm"
                >
                  View
                </div>
              </div>
            </div>
            <div class="flex justify-between items-start">
              <div>
                <h3 class="text-3xl font-bold tracking-tight mb-2 uppercase">
                  Aura Cosmetics
                </h3>
                <p class="text-[#F4F4F0]/60">Brand Identity, E-Commerce</p>
              </div>
              <div
                class="text-sm font-mono border border-[#F4F4F0]/20 px-3 py-1 rounded-full"
              >
                2026
              </div>
            </div>
          </div>

          <!-- Project 2 (offset) -->
          <div class="group cursor-pointer md:mt-32">
            <div
              class="aspect-square bg-[#1A1A1A] mb-6 overflow-hidden relative"
            >
              <div
                class="absolute inset-0 bg-gradient-to-bl from-stone-800 to-stone-950 flex items-center justify-center group-hover:scale-105 transition-transform duration-700"
              >
                <!-- Abstract visual -->
                <svg
                  viewBox="0 0 100 100"
                  class="w-full h-full opacity-50 px-12"
                >
                  <path
                    d="M10,50 Q50,10 90,50 T10,50"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  />
                  <path
                    d="M10,60 Q50,20 90,60 T10,60"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  />
                  <path
                    d="M10,70 Q50,30 90,70 T10,70"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  />
                </svg>
              </div>
            </div>
            <div class="flex justify-between items-start">
              <div>
                <h3 class="text-3xl font-bold tracking-tight mb-2 uppercase">
                  Nexus Tech
                </h3>
                <p class="text-[#F4F4F0]/60">Digital Platform, Motion</p>
              </div>
              <div
                class="text-sm font-mono border border-[#F4F4F0]/20 px-3 py-1 rounded-full"
              >
                2025
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services / Type-focused Section -->
    <section class="py-32 px-6 md:px-12 border-b border-black bg-[#F4F4F0]">
      <div class="max-w-7xl mx-auto flex flex-col md:flex-row gap-20">
        <h2
          class="text-4xl md:text-5xl font-black tracking-tighter uppercase md:w-1/3"
        >
          Our <br />Expertise
        </h2>
        <div class="md:w-2/3 flex flex-col gap-0 border-t border-black">
          <div
            class="group border-b border-black py-8 hover:bg-black hover:text-[#F4F4F0] px-4 -mx-4 transition-colors cursor-pointer flex justify-between items-center"
          >
            <h3 class="text-4xl md:text-6xl font-bold tracking-tight uppercase">
              Strategy
            </h3>
            <span
              class="text-4xl opacity-0 group-hover:opacity-100 transition-opacity transform -translate-x-8 group-hover:translate-x-0 duration-300"
              >→</span
            >
          </div>
          <div
            class="group border-b border-black py-8 hover:bg-black hover:text-[#F4F4F0] px-4 -mx-4 transition-colors cursor-pointer flex justify-between items-center"
          >
            <h3 class="text-4xl md:text-6xl font-bold tracking-tight uppercase">
              Identity
            </h3>
            <span
              class="text-4xl opacity-0 group-hover:opacity-100 transition-opacity transform -translate-x-8 group-hover:translate-x-0 duration-300"
              >→</span
            >
          </div>
          <div
            class="group border-b border-black py-8 hover:bg-black hover:text-[#F4F4F0] px-4 -mx-4 transition-colors cursor-pointer flex justify-between items-center"
          >
            <h3 class="text-4xl md:text-6xl font-bold tracking-tight uppercase">
              Digital
            </h3>
            <span
              class="text-4xl opacity-0 group-hover:opacity-100 transition-opacity transform -translate-x-8 group-hover:translate-x-0 duration-300"
              >→</span
            >
          </div>
          <div
            class="group border-b border-black py-8 hover:bg-black hover:text-[#F4F4F0] px-4 -mx-4 transition-colors cursor-pointer flex justify-between items-center"
          >
            <h3 class="text-4xl md:text-6xl font-bold tracking-tight uppercase">
              Content
            </h3>
            <span
              class="text-4xl opacity-0 group-hover:opacity-100 transition-opacity transform -translate-x-8 group-hover:translate-x-0 duration-300"
              >→</span
            >
          </div>
        </div>
      </div>
    </section>

    <!-- Big Footer Display -->
    <footer
      class="bg-black text-[#F4F4F0] pt-32 pb-12 px-6 md:px-12 flex flex-col items-center"
    >
      <h2
        class="text-[15vw] leading-none font-black tracking-tighter uppercase mb-20 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-zinc-500 hover:to-zinc-100 transition-all duration-500 cursor-pointer text-center"
      >
        Hello
      </h2>
      <div
        class="w-full max-w-7xl flex flex-col md:flex-row justify-between items-center border-t border-[#F4F4F0]/20 pt-8 gap-6 text-sm font-medium uppercase tracking-widest"
      >
        <p>© 2026 Studio</p>
        <div class="flex gap-8">
          <a href="#" class="hover:underline">Instagram</a>
          <a href="#" class="hover:underline">LinkedIn</a>
          <a href="#" class="hover:underline">Twitter</a>
        </div>
        <p>Back to top ↑</p>
      </div>
    </footer>
  </div>
</template>

<style>
@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>
