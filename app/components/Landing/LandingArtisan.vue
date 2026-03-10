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
    class="min-h-screen bg-[#FDFBF7] text-[#2C2A28] font-serif selection:bg-[#2C2A28] selection:text-[#FDFBF7]"
  >
    <!-- Navigation -->
    <nav
      class="flex justify-between items-center py-6 px-8 md:px-16 border-b border-[#2C2A28]/10"
    >
      <div class="text-2xl tracking-widest uppercase font-light">Atelier</div>
      <div
        class="hidden md:flex gap-8 text-sm tracking-widest uppercase font-sans"
      >
        <a href="#" class="hover:opacity-60 transition-opacity">Collections</a>
        <a href="#" class="hover:opacity-60 transition-opacity">Our Story</a>
        <a href="#" class="hover:opacity-60 transition-opacity">Journal</a>
      </div>
      <button
        class="text-sm tracking-widest uppercase font-sans border border-[#2C2A28] px-6 py-2 hover:bg-[#2C2A28] hover:text-[#FDFBF7] transition-all"
      >
        Shop
      </button>
    </nav>

    <!-- Hero Section -->
    <header class="px-8 md:px-16 pt-20 md:pt-32 pb-24 max-w-7xl mx-auto">
      <div class="flex flex-col md:flex-row gap-16 items-center">
        <div class="md:w-1/2">
          <h1
            class="text-5xl md:text-7xl leading-tight tracking-tight mb-8 transform transition-all duration-1000 ease-out"
            :class="{
              'translate-y-0 opacity-100': animateIn,
              'translate-y-12 opacity-0': !animateIn,
            }"
          >
            Crafted with<br />
            <span class="italic text-[#8B7355]">intention</span>,<br />
            made for life.
          </h1>
          <p
            class="text-lg md:text-xl text-[#2C2A28]/70 leading-relaxed font-sans font-light max-w-md transform transition-all duration-1000 delay-300 ease-out"
            :class="{
              'translate-y-0 opacity-100': animateIn,
              'translate-y-8 opacity-0': !animateIn,
            }"
          >
            We create timeless ceramics that bring warmth and beauty into your
            everyday rituals. Each piece is thrown by hand in our studio.
          </p>
        </div>
        <div
          class="md:w-1/2 w-full aspect-[4/5] md:aspect-[3/4] overflow-hidden transform transition-all duration-1000 delay-500 ease-out"
          :class="{
            'translate-y-0 opacity-100 scale-100': animateIn,
            'translate-y-8 opacity-0 scale-95': !animateIn,
          }"
        >
          <div class="w-full h-full bg-[#E8E3DB] relative group cursor-pointer">
            <!-- Simulated Image Placeholder -->
            <div
              class="absolute inset-0 bg-[#D7D0C4] mix-blend-multiply opacity-50 group-hover:opacity-20 transition-opacity duration-700"
            ></div>
            <div class="absolute inset-0 flex items-center justify-center">
              <span
                class="text-[#2C2A28]/40 tracking-widest uppercase font-sans text-sm"
                >Ceramics Studio</span
              >
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Marquee divider -->
    <div class="py-4 border-y border-[#2C2A28]/10 bg-[#F5F2EB] overflow-hidden">
      <div
        class="flex whitespace-nowrap animate-[marquee_25s_linear_infinite] font-sans text-xs tracking-[0.2em] uppercase text-[#8B7355]"
      >
        <span class="mx-4">Handcrafted in Paris</span>
        <span class="mx-4">✦</span>
        <span class="mx-4">Slow living essentials</span>
        <span class="mx-4">✦</span>
        <span class="mx-4">Ethically sourced materials</span>
        <span class="mx-4">✦</span>
        <span class="mx-4">Handcrafted in Paris</span>
        <span class="mx-4">✦</span>
        <span class="mx-4">Slow living essentials</span>
        <span class="mx-4">✦</span>
        <span class="mx-4">Ethically sourced materials</span>
        <span class="mx-4">✦</span>
      </div>
    </div>

    <!-- Featured Collection -->
    <section class="py-24 px-8 md:px-16 max-w-7xl mx-auto">
      <div class="flex justify-between items-end mb-16">
        <h2 class="text-4xl md:text-5xl tracking-tight">The Core Collection</h2>
        <a
          href="#"
          class="hidden md:block font-sans text-sm tracking-widest uppercase border-b border-[#2C2A28] pb-1 hover:text-[#8B7355] hover:border-[#8B7355] transition-colors"
          >View All</a
        >
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        <!-- Item 1 -->
        <div class="group cursor-pointer">
          <div class="aspect-square bg-[#E8E3DB] mb-6 overflow-hidden relative">
            <div
              class="absolute inset-0 bg-[#2C2A28]/5 group-hover:bg-[#2C2A28]/0 transition-colors duration-500"
            ></div>
            <div
              class="absolute bottom-4 right-4 bg-white/80 backdrop-blur text-[#2C2A28] text-xs font-sans tracking-widest uppercase px-4 py-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300"
            >
              Quick Add
            </div>
          </div>
          <div class="flex justify-between font-sans text-sm tracking-wide">
            <h3 class="text-[#2C2A28]">Morning Mug</h3>
            <span class="text-[#8B7355]">$45</span>
          </div>
        </div>
        <!-- Item 2 -->
        <div class="group cursor-pointer md:mt-12">
          <div class="aspect-square bg-[#D7D0C4] mb-6 overflow-hidden relative">
            <div
              class="absolute inset-0 bg-[#2C2A28]/5 group-hover:bg-[#2C2A28]/0 transition-colors duration-500"
            ></div>
            <div
              class="absolute bottom-4 right-4 bg-white/80 backdrop-blur text-[#2C2A28] text-xs font-sans tracking-widest uppercase px-4 py-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300"
            >
              Quick Add
            </div>
          </div>
          <div class="flex justify-between font-sans text-sm tracking-wide">
            <h3 class="text-[#2C2A28]">Serving Bowl</h3>
            <span class="text-[#8B7355]">$120</span>
          </div>
        </div>
        <!-- Item 3 -->
        <div class="group cursor-pointer">
          <div class="aspect-square bg-[#E0D9CD] mb-6 overflow-hidden relative">
            <div
              class="absolute inset-0 bg-[#2C2A28]/5 group-hover:bg-[#2C2A28]/0 transition-colors duration-500"
            ></div>
            <div
              class="absolute bottom-4 right-4 bg-white/80 backdrop-blur text-[#2C2A28] text-xs font-sans tracking-widest uppercase px-4 py-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300"
            >
              Quick Add
            </div>
          </div>
          <div class="flex justify-between font-sans text-sm tracking-wide">
            <h3 class="text-[#2C2A28]">Matcha Bowl</h3>
            <span class="text-[#8B7355]">$65</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer Process -->
    <section class="bg-[#2C2A28] text-[#FDFBF7] py-32 px-8 md:px-16">
      <div
        class="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center"
      >
        <div class="md:w-1/2">
          <div
            class="aspect-[3/2] bg-[#3A3836] w-full relative flex items-center justify-center"
          >
            <span
              class="font-sans text-xs tracking-[0.2em] uppercase text-white/30"
              >Studio Photography</span
            >
          </div>
        </div>
        <div class="md:w-1/2 md:pl-12">
          <h2 class="text-3xl md:text-5xl tracking-tight mb-8 italic">
            The Process
          </h2>
          <p
            class="font-sans font-light leading-relaxed text-[#FDFBF7]/80 mb-12 max-w-md"
          >
            There are no shortcuts in our studio. Every shape is conceived on
            the wheel, every glaze is mixed by hand, and every firing is
            carefully monitored. We believe that the energy put into the making
            becomes part of the object itself.
          </p>
          <a
            href="#"
            class="font-sans text-sm tracking-widest uppercase border border-[#FDFBF7] px-8 py-4 hover:bg-[#FDFBF7] hover:text-[#2C2A28] transition-colors inline-block"
          >
            Read Our Story
          </a>
        </div>
      </div>
    </section>
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
