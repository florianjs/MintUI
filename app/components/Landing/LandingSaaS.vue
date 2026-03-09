<script setup lang="ts">
import { ref, onMounted } from 'vue';

// Simulate loading or animated entry
const isLoaded = ref(false);
onMounted(() => {
  setTimeout(() => {
    isLoaded.value = true;
  }, 100);
});
</script>

<template>
  <div
    class="min-h-screen bg-[#020617] text-slate-50 font-sans selection:bg-indigo-500/30 overflow-hidden relative"
  >
    <!-- Background Effects -->
    <div class="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      <!-- Grid -->
      <div
        class="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"
      ></div>

      <!-- Glowing Orbs -->
      <div
        class="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-600/20 blur-[120px]"
      ></div>
      <div
        class="absolute top-[20%] right-[-10%] w-[40%] h-[40%] rounded-full bg-cyan-500/10 blur-[100px]"
      ></div>
    </div>

    <!-- Navigation -->
    <nav
      class="relative z-50 flex items-center justify-between px-6 py-4 max-w-7xl mx-auto"
    >
      <div class="flex items-center gap-2">
        <div
          class="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-400 flex items-center justify-center"
        >
          <svg
            class="w-5 h-5 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        </div>
        <span class="text-xl font-bold tracking-tight">NexusBase</span>
      </div>

      <div
        class="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300"
      >
        <a href="#" class="hover:text-white transition-colors">Features</a>
        <a href="#" class="hover:text-white transition-colors">Integration</a>
        <a href="#" class="hover:text-white transition-colors">Pricing</a>
        <a href="#" class="hover:text-white transition-colors">Changelog</a>
      </div>

      <div class="flex items-center gap-4">
        <button
          class="text-sm font-medium text-slate-300 hover:text-white transition-colors hidden sm:block"
        >
          Log in
        </button>
        <button
          class="px-4 py-2 rounded-full bg-white text-slate-950 text-sm font-semibold hover:bg-slate-200 transition-colors"
        >
          Get Started
        </button>
      </div>
    </nav>

    <main class="relative z-10 flex flex-col items-center pt-24 pb-32 px-6">
      <!-- Hero Section -->
      <div class="max-w-4xl mx-auto text-center flex flex-col items-center">
        <!-- Badge -->
        <div
          class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-medium mb-8 animate-fade-in-up"
          :class="{
            'opacity-100 translate-y-0': isLoaded,
            'opacity-0 translate-y-4': !isLoaded,
          }"
          style="transition: all 0.5s ease 0.1s"
        >
          <span
            class="flex h-2 w-2 rounded-full bg-indigo-500 animate-pulse"
          ></span>
          NexusBase 2.0 is now live
        </div>

        <!-- Headline -->
        <h1
          class="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight animate-fade-in-up"
          :class="{
            'opacity-100 translate-y-0': isLoaded,
            'opacity-0 translate-y-4': !isLoaded,
          }"
          style="transition: all 0.7s ease 0.2s"
        >
          Ship your product <br class="hidden md:block" />
          <span
            class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-emerald-400"
            >faster than ever.</span
          >
        </h1>

        <!-- Subheading -->
        <p
          class="text-lg md:text-xl text-slate-400 max-w-2xl mb-10 animate-fade-in-up"
          :class="{
            'opacity-100 translate-y-0': isLoaded,
            'opacity-0 translate-y-4': !isLoaded,
          }"
          style="transition: all 0.7s ease 0.3s"
        >
          The ultimate platform for modern teams to collaborate, build, and
          deploy software at the speed of thought. No more bottlenecks.
        </p>

        <!-- CTA Buttons -->
        <div
          class="flex flex-col sm:flex-row items-center gap-4 mb-20 animate-fade-in-up"
          :class="{
            'opacity-100 translate-y-0': isLoaded,
            'opacity-0 translate-y-4': !isLoaded,
          }"
          style="transition: all 0.7s ease 0.4s"
        >
          <button
            class="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-semibold shadow-[0_0_40px_-10px_rgba(99,102,241,0.5)] hover:shadow-[0_0_60px_-15px_rgba(99,102,241,0.7)] transition-all"
          >
            Start building for free
          </button>
          <button
            class="w-full sm:w-auto px-8 py-3.5 rounded-full border border-slate-700 bg-slate-900/50 hover:bg-slate-800 text-white font-semibold backdrop-blur-sm transition-all flex items-center justify-center gap-2"
          >
            <svg
              class="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Watch Demo
          </button>
        </div>

        <!-- Dashboard Mockup -->
        <div
          class="w-full max-w-5xl mx-auto rounded-xl sm:rounded-2xl border border-slate-800 bg-slate-950/50 backdrop-blur-2xl shadow-2xl overflow-hidden animate-fade-in-up"
          :class="{
            'opacity-100 translate-y-0 scale-100': isLoaded,
            'opacity-0 translate-y-12 scale-95': !isLoaded,
          }"
          style="transition: all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.5s"
        >
          <!-- Mockup Header -->
          <div
            class="h-12 border-b border-slate-800/80 bg-slate-900/50 flex items-center px-4 gap-2"
          >
            <div class="w-3 h-3 rounded-full bg-rose-500/80"></div>
            <div class="w-3 h-3 rounded-full bg-amber-500/80"></div>
            <div class="w-3 h-3 rounded-full bg-emerald-500/80"></div>
            <div
              class="mx-auto bg-slate-800/50 rounded-md h-6 w-1/3 flex items-center justify-center"
            >
              <span class="text-xs text-slate-500 font-mono"
                >dashboard.nexusbase.com</span
              >
            </div>
          </div>
          <!-- Mockup Body -->
          <div class="p-6 grid grid-cols-12 gap-6 h-[500px]">
            <!-- Sidebar -->
            <div
              class="col-span-3 hidden md:flex flex-col gap-4 border-r border-slate-800/50 pr-6"
            >
              <div class="h-8 bg-slate-800/40 rounded-md w-full mb-4"></div>
              <div
                class="h-6 bg-indigo-500/20 rounded-md w-3/4 border border-indigo-500/30"
              ></div>
              <div class="h-6 bg-slate-800/40 rounded-md w-5/6"></div>
              <div class="h-6 bg-slate-800/40 rounded-md w-4/6"></div>
              <div class="h-6 bg-slate-800/40 rounded-md w-full"></div>
            </div>
            <!-- Main Content -->
            <div class="col-span-12 md:col-span-9 flex flex-col gap-6">
              <!-- Top Row -->
              <div class="flex justify-between items-center">
                <div class="h-8 bg-slate-800/50 rounded-lg w-1/4"></div>
                <div class="h-8 bg-indigo-500/80 rounded-lg w-24"></div>
              </div>
              <!-- Stats Row -->
              <div class="grid grid-cols-3 gap-4">
                <div
                  class="bg-slate-800/30 border border-slate-700/50 rounded-xl p-4 flex flex-col justify-between h-24"
                >
                  <div class="h-4 bg-slate-700/50 rounded w-1/2"></div>
                  <div class="h-8 bg-slate-300 rounded w-3/4"></div>
                </div>
                <div
                  class="bg-slate-800/30 border border-slate-700/50 rounded-xl p-4 flex flex-col justify-between h-24"
                >
                  <div class="h-4 bg-slate-700/50 rounded w-1/2"></div>
                  <div class="flex items-end gap-2">
                    <div class="h-8 bg-indigo-400 rounded w-2/3"></div>
                    <div
                      class="h-4 bg-emerald-500/50 text-emerald-400 rounded w-1/4 text-[10px] flex items-center justify-center"
                    >
                      +12%
                    </div>
                  </div>
                </div>
                <div
                  class="bg-slate-800/30 border border-slate-700/50 rounded-xl p-4 flex flex-col justify-between h-24"
                >
                  <div class="h-4 bg-slate-700/50 rounded w-1/2"></div>
                  <div class="h-8 bg-slate-300 rounded w-1/2"></div>
                </div>
              </div>
              <!-- Chart Area -->
              <div
                class="flex-1 bg-slate-800/20 border border-slate-700/50 rounded-xl p-4 flex flex-col gap-4 relative overflow-hidden"
              >
                <!-- Fake grid lines -->
                <div
                  class="absolute inset-x-0 top-1/4 border-t border-slate-800/50"
                ></div>
                <div
                  class="absolute inset-x-0 top-2/4 border-t border-slate-800/50"
                ></div>
                <div
                  class="absolute inset-x-0 top-3/4 border-t border-slate-800/50"
                ></div>

                <!-- Fake area chart -->
                <svg
                  class="absolute bottom-0 left-0 w-full h-[80%] text-indigo-500/20 opacity-50"
                  preserveAspectRatio="none"
                  viewBox="0 0 100 100"
                >
                  <defs>
                    <linearGradient
                      id="grad1"
                      x1="0%"
                      y1="0%"
                      x2="0%"
                      y2="100%"
                    >
                      <stop
                        offset="0%"
                        style="stop-color: rgb(99, 102, 241); stop-opacity: 0.5"
                      />
                      <stop
                        offset="100%"
                        style="stop-color: rgb(99, 102, 241); stop-opacity: 0"
                      />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0,100 L0,50 Q25,20 50,60 T100,30 L100,100 Z"
                    fill="url(#grad1)"
                    stroke="rgb(99,102,241)"
                    stroke-width="2"
                  />
                </svg>
              </div>
            </div>
          </div>

          <!-- Bottom Glow gradient over mockup -->
          <div
            class="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none"
          ></div>
        </div>
      </div>
    </main>

    <!-- Trusted By -->
    <section
      class="border-y border-slate-800/50 bg-slate-900/20 py-12 relative z-10 w-full"
    >
      <div class="max-w-7xl mx-auto px-6 flex flex-col items-center">
        <p
          class="text-sm font-medium text-slate-500 mb-8 uppercase tracking-widest"
        >
          Trusted by innovative teams worldwide
        </p>
        <div
          class="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500"
        >
          <!-- Placeholder logos using shapes and text -->
          <div class="flex items-center gap-2 font-bold text-xl">
            <div class="w-6 h-6 rounded-sm bg-white"></div>
            Acme Corp
          </div>
          <div
            class="flex items-center gap-2 font-bold text-xl italic text-transparent bg-clip-text bg-white"
          >
            <div class="w-6 h-6 rounded-full border-[4px] border-white"></div>
            Globex
          </div>
          <div class="flex items-center gap-2 font-bold text-xl">
            <svg
              class="w-7 h-7 text-white"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2L2 22h20L12 2z" />
            </svg>
            Apex
          </div>
          <div
            class="flex items-center gap-2 font-black text-xl tracking-tighter"
          >
            <div class="w-6 h-6 bg-white rotate-45"></div>
            SOYUZ
          </div>
        </div>
      </div>
    </section>

    <!-- Features Bento Grid -->
    <section class="py-32 relative z-10 max-w-7xl mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-5xl font-bold mb-4">
          Everything you need to
          <span
            class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400"
            >scale</span
          >
        </h2>
        <p class="text-slate-400 text-lg max-w-2xl mx-auto">
          Stop piecing together multiple tools. We provide a cohesive experience
          that lets your team focus on what matters.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
        <!-- Big Card -->
        <div
          class="md:col-span-2 md:row-span-2 rounded-3xl bg-slate-900/40 border border-slate-800 p-8 flex flex-col justify-between group overflow-hidden relative hover:border-indigo-500/50 transition-colors"
        >
          <div
            class="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-[80px] group-hover:bg-indigo-500/20 transition-all"
          ></div>
          <div>
            <div
              class="w-12 h-12 rounded-xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center mb-6 text-indigo-400"
            >
              <svg
                class="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 class="text-2xl font-bold mb-2">Real-time Syncing</h3>
            <p class="text-slate-400 max-w-sm">
              Changes propagate instantly across the globe. Never refresh to see
              the latest updates again.
            </p>
          </div>
          <!-- Fake visual -->
          <div
            class="w-full h-48 bg-slate-950/50 rounded-2xl border border-slate-800 mt-8 relative overflow-hidden group-hover:-translate-y-2 transition-transform duration-500"
          >
            <div
              class="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:1rem_1rem]"
            ></div>
            <div
              class="absolute top-1/2 left-1/4 w-32 h-32 bg-indigo-500/40 rounded-full blur-[40px] animate-pulse"
            ></div>
            <div
              class="absolute top-1/2 right-1/4 w-32 h-32 bg-cyan-500/40 rounded-full blur-[40px] animate-pulse delay-75"
            ></div>
          </div>
        </div>

        <!-- Small Card 1 -->
        <div
          class="rounded-3xl bg-slate-900/40 border border-slate-800 p-8 flex flex-col group hover:border-cyan-500/50 transition-colors overflow-hidden relative"
        >
          <div
            class="absolute bottom-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[60px] group-hover:bg-cyan-500/20 transition-all"
          ></div>
          <div
            class="w-12 h-12 rounded-xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center mb-6 text-cyan-400"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          </div>
          <h3 class="text-xl font-bold mb-2">Enterprise Security</h3>
          <p class="text-slate-400 text-sm">
            Bank-grade encryption by default. SOC2 Type II compliance built-in.
          </p>
        </div>

        <!-- Small Card 2 -->
        <div
          class="rounded-3xl bg-slate-900/40 border border-slate-800 p-8 flex flex-col group hover:border-emerald-500/50 transition-colors overflow-hidden relative"
        >
          <div
            class="absolute top-0 left-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[60px] group-hover:bg-emerald-500/20 transition-all"
          ></div>
          <div
            class="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center mb-6 text-emerald-400"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
          </div>
          <h3 class="text-xl font-bold mb-2">Advance Analytics</h3>
          <p class="text-slate-400 text-sm">
            Deep insights into your team's velocity and system performance
            metrics.
          </p>
        </div>
      </div>
    </section>

    <!-- Footer / Bottom CTA -->
    <footer
      class="relative z-10 border-t border-slate-800 bg-slate-900/50 pt-24 pb-12 overflow-hidden"
    >
      <!-- Footer Glow -->
      <div
        class="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-indigo-500/20 rounded-t-[100%] blur-[100px]"
      ></div>

      <div class="max-w-4xl mx-auto text-center px-6 mb-20 relative z-20">
        <h2 class="text-4xl md:text-5xl font-bold mb-6">
          Ready to transform your workflow?
        </h2>
        <p class="text-slate-400 mb-10 text-lg">
          Join thoudsands of developers building the future.
        </p>
        <button
          class="px-8 py-4 rounded-full bg-white text-slate-950 font-bold hover:bg-slate-200 transition-colors shadow-xl shadow-white/10 hover:shadow-white/20"
        >
          Get Started for Free
        </button>
      </div>

      <div
        class="max-w-7xl mx-auto px-6 border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 relative z-20"
      >
        <div class="flex items-center gap-2">
          <div
            class="w-6 h-6 rounded bg-gradient-to-br from-indigo-500 to-cyan-400"
          ></div>
          <span class="font-bold">NexusBase</span>
        </div>
        <p class="text-slate-500 text-sm">
          © 2026 NexusBase Inc. All rights reserved.
        </p>
        <div class="flex gap-4 text-slate-500">
          <a href="#" class="hover:text-white transition-colors">Twitter</a>
          <a href="#" class="hover:text-white transition-colors">GitHub</a>
          <a href="#" class="hover:text-white transition-colors">Discord</a>
        </div>
      </div>
    </footer>
  </div>
</template>
