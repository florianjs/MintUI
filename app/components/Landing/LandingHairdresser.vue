<script setup lang="ts">
import { ref, onMounted } from 'vue';

const animateIn = ref(false);

onMounted(() => {
  setTimeout(() => {
    animateIn.value = true;
  }, 100);
});
</script>

<template>
  <div
    class="relative min-h-screen bg-[#FCFBF9] text-[#1A1A1A] font-sans selection:bg-[#1A1A1A] selection:text-[#FCFBF9]"
  >
    <!-- Navigation -->
    <header class="absolute top-0 left-0 right-0 z-50">
      <div class="px-6 md:px-12 py-8 flex justify-between items-center">
        <div class="text-xl tracking-[0.3em] font-medium uppercase">Blanc.</div>
        <nav
          class="hidden md:flex gap-12 text-xs font-semibold tracking-widest uppercase"
        >
          <a href="#" class="hover:opacity-50 transition-opacity">Services</a>
          <a href="#" class="hover:opacity-50 transition-opacity">Stylists</a>
          <a href="#" class="hover:opacity-50 transition-opacity">Salon</a>
        </nav>
        <button
          class="bg-[#1A1A1A] text-white px-6 py-3 text-xs font-semibold tracking-widest uppercase hover:bg-black transition-colors"
        >
          Book Appt
        </button>
      </div>
    </header>

    <!-- Hero -->
    <main
      class="min-h-screen flex items-center pt-24 pb-12 px-6 md:px-12 relative overflow-hidden"
    >
      <div class="absolute inset-0 z-0 flex">
        <div class="w-1/3 bg-[#FCFBF9]"></div>
        <div class="w-2/3 bg-[#EFECE8] relative overflow-hidden group">
          <div
            class="absolute inset-0 bg-[#D8CEBE] mix-blend-multiply opacity-20"
          ></div>
          <!-- Image Placeholder Outline -->
          <div
            class="absolute right-12 bottom-12 text-sm text-[#1A1A1A]/30 font-serif tracking-wide italic group-hover:text-[#1A1A1A]/80 transition-colors"
          >
            Interior Salon View
          </div>
        </div>
      </div>

      <div
        class="relative z-10 max-w-7xl mx-auto w-full flex flex-col items-start pt-24"
      >
        <h1
          class="text-6xl md:text-8xl lg:text-9xl font-serif tracking-tight leading-[0.9] mb-8 max-w-4xl transform transition-all duration-1000 ease-out"
          :class="
            animateIn ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          "
        >
          Elevated<br />
          <span class="italic text-[#8E867D]">haircare</span><br />
          for the modern.
        </h1>

        <p
          class="text-lg text-[#1A1A1A]/60 max-w-md mb-12 transform transition-all duration-1000 delay-300 ease-out"
          :class="
            animateIn ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          "
        >
          An independent salon dedicated to precision cutting, bespoke color,
          and healthy hair. Located in the heart of the district.
        </p>

        <div
          class="flex items-center gap-6 transform transition-all duration-1000 delay-500 ease-out"
          :class="
            animateIn ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          "
        >
          <a
            href="#"
            class="border-b border-[#1A1A1A] pb-1 text-sm font-semibold tracking-widest uppercase hover:text-[#8E867D] hover:border-[#8E867D] transition-colors"
          >
            View Services
          </a>
          <a
            href="#"
            class="border-b border-[#1A1A1A] pb-1 text-sm font-semibold tracking-widest uppercase hover:text-[#8E867D] hover:border-[#8E867D] transition-colors"
          >
            Meet the Team
          </a>
        </div>
      </div>
    </main>

    <!-- Services Section -->
    <section class="py-32 px-6 md:px-12 bg-[#FCFBF9]">
      <div class="max-w-7xl mx-auto flex flex-col md:flex-row gap-20">
        <div class="md:w-1/3">
          <div class="sticky top-32">
            <h2
              class="text-xs font-semibold tracking-[0.2em] uppercase text-[#8E867D] mb-4"
            >
              Investment
            </h2>
            <h3 class="text-4xl md:text-5xl font-serif tracking-tight mb-8">
              Service Menu
            </h3>
            <p class="text-[#1A1A1A]/60 font-light leading-relaxed mb-8">
              All services include a thorough consultation, holistic scalp
              cleanse, and signature blowout. Prices vary based on stylist tier
              and hair length/density.
            </p>
            <button
              class="bg-[#1A1A1A] text-white px-8 py-4 text-xs font-semibold tracking-[0.2em] uppercase hover:bg-black transition-colors w-full md:w-auto"
            >
              Book Online
            </button>
          </div>
        </div>

        <div class="md:w-2/3">
          <!-- Category 1 -->
          <div class="mb-16">
            <h4
              class="text-2xl font-serif italic mb-8 border-b border-[#1A1A1A]/10 pb-4"
            >
              Cut & Style
            </h4>

            <div
              class="flex justify-between items-center py-4 border-b border-[#1A1A1A]/10 hover:px-4 hover:bg-[#EFECE8] transition-all cursor-pointer -mx-4 px-4"
            >
              <div>
                <p class="text-lg font-medium">Signature Cut</p>
                <p class="text-sm text-[#1A1A1A]/50 mt-1">
                  Includes wash, cut, and blowout
                </p>
              </div>
              <div class="text-lg font-serif">from $85</div>
            </div>

            <div
              class="flex justify-between items-center py-4 border-b border-[#1A1A1A]/10 hover:px-4 hover:bg-[#EFECE8] transition-all cursor-pointer -mx-4 px-4"
            >
              <div>
                <p class="text-lg font-medium">Transformation Cut</p>
                <p class="text-sm text-[#1A1A1A]/50 mt-1">
                  For significant changes or extra length
                </p>
              </div>
              <div class="text-lg font-serif">from $110</div>
            </div>

            <div
              class="flex justify-between items-center py-4 border-b border-[#1A1A1A]/10 hover:px-4 hover:bg-[#EFECE8] transition-all cursor-pointer -mx-4 px-4"
            >
              <div>
                <p class="text-lg font-medium">Blowout</p>
                <p class="text-sm text-[#1A1A1A]/50 mt-1">
                  Wash and signature styling
                </p>
              </div>
              <div class="text-lg font-serif">from $65</div>
            </div>
          </div>

          <!-- Category 2 -->
          <div>
            <h4
              class="text-2xl font-serif italic mb-8 border-b border-[#1A1A1A]/10 pb-4"
            >
              Color
            </h4>

            <div
              class="flex justify-between items-center py-4 border-b border-[#1A1A1A]/10 hover:px-4 hover:bg-[#EFECE8] transition-all cursor-pointer -mx-4 px-4"
            >
              <div>
                <p class="text-lg font-medium">Custom Balayage</p>
                <p class="text-sm text-[#1A1A1A]/50 mt-1">
                  Hand-painted multidimensional color
                </p>
              </div>
              <div class="text-lg font-serif">from $250</div>
            </div>

            <div
              class="flex justify-between items-center py-4 border-b border-[#1A1A1A]/10 hover:px-4 hover:bg-[#EFECE8] transition-all cursor-pointer -mx-4 px-4"
            >
              <div>
                <p class="text-lg font-medium">Full Foil Highlight</p>
                <p class="text-sm text-[#1A1A1A]/50 mt-1">
                  Traditional highlighting application
                </p>
              </div>
              <div class="text-lg font-serif">from $220</div>
            </div>

            <div
              class="flex justify-between items-center py-4 border-b border-[#1A1A1A]/10 hover:px-4 hover:bg-[#EFECE8] transition-all cursor-pointer -mx-4 px-4"
            >
              <div>
                <p class="text-lg font-medium">Global Color</p>
                <p class="text-sm text-[#1A1A1A]/50 mt-1">
                  Single process all over tint
                </p>
              </div>
              <div class="text-lg font-serif">from $140</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Marquee Banner -->
    <div class="py-12 bg-[#1A1A1A] text-[#FCFBF9] overflow-hidden">
      <div
        class="flex whitespace-nowrap animate-[marquee_20s_linear_infinite] font-serif text-5xl md:text-7xl tracking-tighter italic opacity-80"
      >
        <span class="mx-8">Effortless style.</span>
        <span class="mx-8">Precision technique.</span>
        <span class="mx-8">Healthy hair always.</span>
        <span class="mx-8">Effortless style.</span>
        <span class="mx-8">Precision technique.</span>
        <span class="mx-8">Healthy hair always.</span>
      </div>
    </div>
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
