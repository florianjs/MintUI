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
    class="min-h-screen bg-[#FAFAF8] text-[#2F4230] font-sans selection:bg-[#4A6741] selection:text-white"
  >
    <!-- Announcement Bar -->
    <div
      class="bg-[#2F4230] text-[#E8EDDF] text-center py-2 text-xs md:text-sm font-medium tracking-wide"
    >
      Free local delivery on orders over $50. Farm fresh every Tuesday.
    </div>

    <!-- Navigation -->
    <header
      class="sticky top-0 z-50 bg-[#FAFAF8]/90 backdrop-blur-md border-b border-[#2F4230]/5"
    >
      <div
        class="max-w-7xl mx-auto px-6 md:px-12 py-5 flex justify-between items-center"
      >
        <nav class="hidden md:flex gap-8 text-sm font-medium">
          <a href="#" class="hover:text-[#4A6741] transition-colors"
            >Shop Groceries</a
          >
          <a href="#" class="hover:text-[#4A6741] transition-colors"
            >Boxes & Bundles</a
          >
          <a href="#" class="hover:text-[#4A6741] transition-colors"
            >Our Farms</a
          >
        </nav>

        <div
          class="text-2xl font-bold tracking-tighter flex items-center gap-2"
        >
          <svg
            class="w-6 h-6 text-[#4A6741]"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 2C7.03 2 3 6.03 3 11v6c0 1.66 1.34 3 3 3h12c1.66 0 3-1.34 3-3v-6c0-4.97-4.03-9-9-9zM7 11c0-2.76 2.24-5 5-5s5 2.24 5 5-5 5-5 5-5-2.24-5-5z"
            />
          </svg>
          Sprout.
        </div>

        <div class="flex items-center gap-6">
          <a
            href="#"
            class="hidden md:block text-sm font-medium hover:text-[#4A6741] transition-colors"
            >Sign In</a
          >
          <button
            class="bg-[#4A6741] text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#2F4230] transition-colors flex items-center gap-2 shadow-sm shadow-[#4A6741]/20"
          >
            Cart (0)
          </button>
        </div>
      </div>
    </header>

    <!-- Hero -->
    <main
      class="px-6 md:px-12 pt-12 md:pt-24 pb-24 max-w-7xl mx-auto flex flex-col items-center text-center"
    >
      <div
        class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E8EDDF] text-[#4A6741] text-sm font-semibold mb-8 transform transition-all duration-700 ease-out"
        :class="
          animateIn ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        "
      >
        <span class="relative flex h-2 w-2">
          <span
            class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4A6741] opacity-75"
          ></span>
          <span
            class="relative inline-flex rounded-full h-2 w-2 bg-[#4A6741]"
          ></span>
        </span>
        Harvesting Season: Summer
      </div>

      <h1
        class="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.05] mb-8 max-w-5xl transform transition-all duration-700 delay-100 ease-out"
        :class="
          animateIn ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        "
      >
        Rooted in <span class="text-[#4A6741]">Earth</span>,<br />
        Raised with Care.
      </h1>

      <p
        class="text-lg md:text-xl text-[#2F4230]/70 max-w-2xl mb-12 transform transition-all duration-700 delay-200 ease-out"
        :class="
          animateIn ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        "
      >
        Get access to the freshest organic produce, locally sourced from
        independent regenerative farms and delivered straight to your door.
      </p>

      <div
        class="flex flex-col sm:flex-row gap-4 transform transition-all duration-700 delay-300 ease-out"
        :class="
          animateIn ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        "
      >
        <button
          class="bg-[#2F4230] text-white px-8 py-4 rounded-full font-bold hover:bg-[#4A6741] transition-colors text-lg shadow-lg shadow-[#2F4230]/20"
        >
          Shop the Harvest
        </button>
        <button
          class="bg-white text-[#2F4230] border border-[#2F4230]/10 px-8 py-4 rounded-full font-bold hover:bg-[#F0F2EB] transition-colors text-lg"
        >
          Meet our Farmers
        </button>
      </div>

      <!-- Image Grid -->
      <div
        class="w-full mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 transform transition-all duration-1000 delay-500 ease-out"
        :class="
          animateIn ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        "
      >
        <div
          class="h-64 md:h-96 rounded-[2rem] bg-[#E8EDDF] overflow-hidden relative"
        >
          <div
            class="absolute inset-0 bg-[#A0C08B]/20 mix-blend-multiply"
          ></div>
        </div>
        <div
          class="h-64 md:h-96 rounded-[2rem] bg-[#D7E4CE] overflow-hidden relative md:-translate-y-8"
        >
          <div
            class="absolute inset-0 bg-[#83A36C]/20 mix-blend-multiply"
          ></div>
          <div
            class="absolute inset-0 flex items-center justify-center text-[#4A6741]/50 font-bold tracking-widest uppercase"
          >
            Fresh Produce
          </div>
        </div>
        <div
          class="h-64 md:h-96 rounded-[2rem] bg-[#C1D6B4] overflow-hidden relative"
        >
          <div
            class="absolute inset-0 bg-[#6E8F56]/20 mix-blend-multiply"
          ></div>
        </div>
      </div>
    </main>

    <!-- Values -->
    <section class="bg-[#E8EDDF] py-24 px-6 md:px-12">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div class="md:col-span-1">
            <h2 class="text-3xl font-black mb-4">Our Promise</h2>
            <p class="text-[#2F4230]/70 font-medium">
              We believe food should do good, taste good, and feel good.
            </p>
          </div>
          <div class="md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div class="bg-white p-8 rounded-[1.5rem] shadow-sm">
              <div
                class="bg-[#F4F7F4] w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-[#4A6741]"
              >
                <svg
                  class="w-8 h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 class="text-xl font-bold mb-2">100% Local</h3>
              <p class="text-[#2F4230]/60 text-sm font-medium leading-relaxed">
                Sourced within 50 miles of our distribution center to guarantee
                freshness and support the community.
              </p>
            </div>
            <div class="bg-white p-8 rounded-[1.5rem] shadow-sm">
              <div
                class="bg-[#F4F7F4] w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-[#4A6741]"
              >
                <svg
                  class="w-8 h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
              </div>
              <h3 class="text-xl font-bold mb-2">Organic Certified</h3>
              <p class="text-[#2F4230]/60 text-sm font-medium leading-relaxed">
                No synthetic pesticides or fertilizers, protecting the ecosystem
                and your health.
              </p>
            </div>
            <div class="bg-white p-8 rounded-[1.5rem] shadow-sm">
              <div
                class="bg-[#F4F7F4] w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-[#4A6741]"
              >
                <svg
                  class="w-8 h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
              </div>
              <h3 class="text-xl font-bold mb-2">Zero Waste</h3>
              <p class="text-[#2F4230]/60 text-sm font-medium leading-relaxed">
                All deliveries use compostable or returnable packaging to
                minimize our footprint.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Popular -->
    <section class="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div class="flex justify-between items-center mb-12">
        <h2 class="text-4xl font-black">Fresh Arrivals</h2>
        <button
          class="text-[#4A6741] font-bold hover:text-[#2F4230] transition-colors"
        >
          See all →
        </button>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
        <!-- Product 1 -->
        <div class="group cursor-pointer">
          <div
            class="aspect-[4/5] rounded-[1.5rem] bg-[#F4F7F4] mb-4 relative overflow-hidden flex items-center justify-center"
          >
            <span class="text-[#4A6741]/30 font-bold text-lg">Tomatoes</span>
            <button
              class="absolute bottom-4 right-4 bg-white text-[#2F4230] w-10 h-10 rounded-full shadow-lg flex items-center justify-center transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[#4A6741] hover:text-white"
            >
              <svg
                class="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </button>
          </div>
          <h3 class="font-bold text-lg">Heirloom Tomatoes</h3>
          <p class="text-sm text-[#2F4230]/60 mb-2">Sunrise Farm • 1 lb</p>
          <div class="font-bold text-[#4A6741]">$6.50</div>
        </div>
        <!-- Product 2 -->
        <div class="group cursor-pointer">
          <div
            class="aspect-[4/5] rounded-[1.5rem] bg-[#F0E6D8] mb-4 relative overflow-hidden flex items-center justify-center"
          >
            <span class="text-[#B99A6E]/40 font-bold text-lg">Sourdough</span>
            <button
              class="absolute bottom-4 right-4 bg-white text-[#2F4230] w-10 h-10 rounded-full shadow-lg flex items-center justify-center transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[#4A6741] hover:text-white"
            >
              <svg
                class="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </button>
          </div>
          <h3 class="font-bold text-lg">Rustic Sourdough</h3>
          <p class="text-sm text-[#2F4230]/60 mb-2">Mill Bakery • 1 loaf</p>
          <div class="font-bold text-[#4A6741]">$8.00</div>
        </div>
        <!-- Product 3 -->
        <div class="group cursor-pointer">
          <div
            class="aspect-[4/5] rounded-[1.5rem] bg-[#EAE8F1] mb-4 relative overflow-hidden flex items-center justify-center"
          >
            <span class="text-[#847AA3]/40 font-bold text-lg">Berries</span>
            <button
              class="absolute bottom-4 right-4 bg-white text-[#2F4230] w-10 h-10 rounded-full shadow-lg flex items-center justify-center transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[#4A6741] hover:text-white"
            >
              <svg
                class="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </button>
          </div>
          <h3 class="font-bold text-lg">Wild Blueberries</h3>
          <p class="text-sm text-[#2F4230]/60 mb-2">Valley Orchards • 1 pint</p>
          <div class="font-bold text-[#4A6741]">$7.50</div>
        </div>
        <!-- Product 4 -->
        <div class="group cursor-pointer">
          <div
            class="aspect-[4/5] rounded-[1.5rem] bg-[#E3EFE5] mb-4 relative overflow-hidden flex items-center justify-center"
          >
            <span class="text-[#6C9E74]/40 font-bold text-lg">Kale</span>
            <button
              class="absolute bottom-4 right-4 bg-white text-[#2F4230] w-10 h-10 rounded-full shadow-lg flex items-center justify-center transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[#4A6741] hover:text-white"
            >
              <svg
                class="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </button>
          </div>
          <h3 class="font-bold text-lg">Dinosaur Kale</h3>
          <p class="text-sm text-[#2F4230]/60 mb-2">Green Acres • 1 bunch</p>
          <div class="font-bold text-[#4A6741]">$3.50</div>
        </div>
      </div>
    </section>
  </div>
</template>
