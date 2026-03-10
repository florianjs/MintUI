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
    class="relative min-h-screen bg-[#0A0A0A] text-[#EBE8E1] font-sans selection:bg-[#E2DCC8] selection:text-[#0A0A0A]"
  >
    <!-- Navigation -->
    <nav
      class="absolute top-0 w-full z-50 border-b border-[#EBE8E1]/10 bg-[#0A0A0A]/80 backdrop-blur-sm"
    >
      <div class="px-6 md:px-12 py-5 flex items-center justify-between">
        <div class="text-xl font-serif tracking-widest text-[#E2DCC8]">A/G</div>
        <div
          class="hidden md:flex gap-10 text-xs tracking-[0.2em] uppercase text-[#EBE8E1]/70"
        >
          <a href="#" class="hover:text-[#E2DCC8] transition-colors">Cuisine</a>
          <a href="#" class="hover:text-[#E2DCC8] transition-colors"
            >Philosophy</a
          >
          <a href="#" class="hover:text-[#E2DCC8] transition-colors"
            >Inquiries</a
          >
        </div>
        <a
          href="#"
          class="border border-[#E2DCC8] text-[#E2DCC8] px-6 py-2 text-xs tracking-[0.2em] uppercase hover:bg-[#E2DCC8] hover:text-[#0A0A0A] transition-all"
        >
          Reserve
        </a>
      </div>
    </nav>

    <!-- Hero -->
    <main
      class="relative h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden"
    >
      <!-- Background Ambience -->
      <div class="absolute inset-0 z-0">
        <div
          class="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0A0A]/50 to-[#0A0A0A]"
        ></div>
        <div class="w-full h-full bg-[#141414] relative">
          <!-- Vague image simulation for fine dining -->
          <div
            class="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#2C2822] via-[#0A0A0A] to-[#0A0A0A] opacity-70"
          ></div>
          <div
            class="absolute top-1/3 left-1/4 w-96 h-96 bg-[#E2DCC8]/5 rounded-full blur-[100px]"
          ></div>
        </div>
      </div>

      <div class="relative z-10 max-w-4xl flex flex-col items-center">
        <p
          class="text-xs tracking-[0.3em] uppercase text-[#E2DCC8] mb-8 transform transition-all duration-1000 ease-out"
          :class="
            animateIn ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          "
        >
          Private Chef Experience
        </p>

        <h1
          class="text-5xl md:text-7xl lg:text-8xl font-serif tracking-tight leading-[1.1] mb-10 transform transition-all duration-1000 delay-300 ease-out"
          :class="
            animateIn ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          "
        >
          Intimate dining, <br />
          <span class="italic text-[#E2DCC8]">curated</span> for your home.
        </h1>

        <div
          class="h-24 w-[1px] bg-gradient-to-b from-[#E2DCC8] to-transparent transform transition-all duration-1000 delay-700 ease-out mb-10"
          :class="animateIn ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'"
          style="transform-origin: top"
        ></div>

        <p
          class="text-[#EBE8E1]/60 font-light max-w-md transform transition-all duration-1000 delay-1000 ease-out"
          :class="
            animateIn ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          "
        >
          Chef Antoine Gautier brings Michelin-trained expertise to your
          kitchen, crafting bespoke tasting menus focused on seasonality and
          terroir.
        </p>
      </div>
    </main>

    <!-- Concept Section -->
    <section class="py-32 px-6 md:px-12 bg-[#0A0A0A]">
      <div
        class="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-32 items-center"
      >
        <div class="md:w-1/2">
          <div
            class="aspect-[3/4] bg-[#141414] border border-[#EBE8E1]/5 p-2 relative"
          >
            <div
              class="w-full h-full bg-[#1A1A1A] flex flex-col justify-end p-8"
            >
              <p class="font-serif italic text-2xl text-[#E2DCC8]">
                "The finest ingredients, treated with respect, in the comfort of
                your own dining room."
              </p>
            </div>

            <!-- Aesthetic Deco -->
            <div
              class="absolute -right-6 -bottom-6 w-32 h-32 border border-[#E2DCC8]/20 rounded-full flex items-center justify-center animate-[spin_30s_linear_infinite]"
            >
              <svg viewBox="0 0 100 100" class="w-24 h-24 text-[#E2DCC8]/40">
                <path
                  id="textPath"
                  d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  fill="transparent"
                />
                <text class="text-[10px] tracking-widest uppercase">
                  <textPath href="#textPath" startOffset="0">
                    Est. 2020 • Paris & London •
                  </textPath>
                </text>
              </svg>
            </div>
          </div>
        </div>

        <div class="md:w-1/2">
          <h2 class="text-xs tracking-[0.3em] uppercase text-[#E2DCC8] mb-6">
            The Philosophy
          </h2>
          <h3
            class="text-4xl md:text-5xl font-serif tracking-tight leading-tight mb-8"
          >
            Elevating the gathering.
          </h3>

          <div class="space-y-8 text-[#EBE8E1]/70 font-light leading-relaxed">
            <p>
              Dining out is an event, but dining in should be an intimate
              revelation. We handle everything from the sourcing of rare
              seasonal produce to the final gleaming polish of the kitchen.
            </p>

            <div class="border-l border-[#E2DCC8]/30 pl-6 py-2">
              <h4
                class="text-[#EBE8E1] font-medium tracking-wide mb-2 uppercase text-sm"
              >
                01. Curation
              </h4>
              <p class="text-sm">
                A personalized consultation to design a menu that reflects your
                palate, memories, and dietary requisites.
              </p>
            </div>

            <div class="border-l border-[#E2DCC8]/30 pl-6 py-2">
              <h4
                class="text-[#EBE8E1] font-medium tracking-wide mb-2 uppercase text-sm"
              >
                02. Sourcing
              </h4>
              <p class="text-sm">
                We collaborate directly with local farmers, fishmongers, and
                artisans to secure ingredients at their absolute peak.
              </p>
            </div>

            <div class="border-l border-[#E2DCC8]/30 pl-6 py-2">
              <h4
                class="text-[#EBE8E1] font-medium tracking-wide mb-2 uppercase text-sm"
              >
                03. Execution
              </h4>
              <p class="text-sm">
                An unobtrusive yet highly attentive culinary performance in your
                kitchen, flawlessly paced.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Tasting Menu Sample -->
    <section
      class="py-32 px-6 md:px-12 border-t border-[#EBE8E1]/10 bg-[#0A0A0A]"
    >
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-xs tracking-[0.3em] uppercase text-[#E2DCC8] mb-6">
          Sample Menu
        </h2>
        <h3 class="text-4xl font-serif tracking-tight mb-16 italic">
          Autumnal Equinox
        </h3>

        <div class="space-y-12">
          <div class="group cursor-pointer">
            <h4 class="text-[#E2DCC8] text-sm tracking-[0.2em] uppercase mb-2">
              Amuse-Bouche
            </h4>
            <p class="text-xl font-serif">Wild Mushroom Tartlet</p>
            <p class="text-sm text-[#EBE8E1]/50 mt-2 font-light">
              black garlic emulsion, thyme, aged gruyère
            </p>
            <div
              class="h-[1px] w-0 bg-[#E2DCC8]/50 mx-auto mt-6 group-hover:w-full transition-all duration-700"
            ></div>
          </div>

          <div class="group cursor-pointer">
            <h4 class="text-[#E2DCC8] text-sm tracking-[0.2em] uppercase mb-2">
              First
            </h4>
            <p class="text-xl font-serif">Scallop Crudo</p>
            <p class="text-sm text-[#EBE8E1]/50 mt-2 font-light">
              finger lime, white soy, fermented green apple, shiso oil
            </p>
            <div
              class="h-[1px] w-0 bg-[#E2DCC8]/50 mx-auto mt-6 group-hover:w-full transition-all duration-700"
            ></div>
          </div>

          <div class="group cursor-pointer">
            <h4 class="text-[#E2DCC8] text-sm tracking-[0.2em] uppercase mb-2">
              Main
            </h4>
            <p class="text-xl font-serif">Dry-Aged Venison Loin</p>
            <p class="text-sm text-[#EBE8E1]/50 mt-2 font-light">
              celeriac purée, pickled blackberries, juniper jus
            </p>
            <div
              class="h-[1px] w-0 bg-[#E2DCC8]/50 mx-auto mt-6 group-hover:w-full transition-all duration-700"
            ></div>
          </div>

          <div class="group cursor-pointer">
            <h4 class="text-[#E2DCC8] text-sm tracking-[0.2em] uppercase mb-2">
              Dessert
            </h4>
            <p class="text-xl font-serif">Smoked Vanilla Bean Mille-Feuille</p>
            <p class="text-sm text-[#EBE8E1]/50 mt-2 font-light">
              caramelized puff pastry, burnt orange caramel
            </p>
          </div>
        </div>

        <div class="mt-20">
          <button
            class="border border-[#E2DCC8] text-[#E2DCC8] px-8 py-4 text-xs tracking-[0.2em] uppercase hover:bg-[#E2DCC8] hover:text-[#0A0A0A] transition-all"
          >
            Inquire for Availability
          </button>
        </div>
      </div>
    </section>
  </div>
</template>
