<script setup lang="ts">
import { ref, onMounted } from 'vue';

const isLoaded = ref(false);

onMounted(() => {
  setTimeout(() => (isLoaded.value = true), 100);
});
</script>

<template>
  <div
    class="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-blue-500/30 selection:text-blue-200 overflow-hidden relative"
  >
    <!-- Deep background glows -->
    <div class="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      <!-- Top right cyan glow -->
      <div
        class="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] bg-cyan-500/10 rounded-full blur-[120px]"
      ></div>
      <!-- Bottom left blue glow -->
      <div
        class="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[100px]"
      ></div>
    </div>

    <div class="relative z-10 flex h-screen overflow-hidden">
      <!-- Sidebar Navigation -->
      <aside
        class="w-64 border-r border-slate-800/60 bg-slate-950/50 backdrop-blur-xl flex flex-col justify-between hidden md:flex shrink-0"
      >
        <div>
          <!-- Logo -->
          <div
            class="h-16 flex items-center px-6 border-b border-slate-800/60 font-mono font-bold tracking-widest text-lg"
          >
            <span class="text-blue-400 mr-2">▲</span> METRICS
          </div>
          <!-- Links -->
          <nav class="p-4 space-y-1">
            <a
              href="#"
              class="flex items-center gap-3 px-3 py-2 rounded-lg bg-blue-500/10 text-blue-400 font-medium text-sm transition-colors border border-blue-500/20"
            >
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
                <rect width="7" height="9" x="3" y="3" rx="1" />
                <rect width="7" height="5" x="14" y="3" rx="1" />
                <rect width="7" height="9" x="14" y="12" rx="1" />
                <rect width="7" height="5" x="3" y="16" rx="1" />
              </svg>
              Overview
            </a>
            <a
              href="#"
              class="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-400 hover:bg-slate-800/50 hover:text-slate-200 font-medium text-sm transition-colors"
            >
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
                <path d="M3 3v18h18" />
                <path d="m19 9-5 5-4-4-3 3" />
              </svg>
              Analytics
            </a>
            <a
              href="#"
              class="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-400 hover:bg-slate-800/50 hover:text-slate-200 font-medium text-sm transition-colors"
            >
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
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                <path d="M2 12h20" />
              </svg>
              Realtime
            </a>
          </nav>
        </div>
        <!-- User Profile Bottom -->
        <div class="p-4 border-t border-slate-800/60">
          <div class="flex items-center gap-3">
            <div
              class="w-8 h-8 rounded-full bg-gradient-to-tr from-slate-700 to-slate-600 flex items-center justify-center text-xs font-bold ring-2 ring-slate-800"
            >
              OP
            </div>
            <div class="flex flex-col">
              <span class="text-sm font-medium">Ops Team</span>
              <span class="text-xs text-slate-500">Pro Plan</span>
            </div>
          </div>
        </div>
      </aside>

      <!-- Main Content Area -->
      <main class="flex-1 flex flex-col h-screen overflow-hidden">
        <!-- Top Navigation -->
        <header
          class="h-16 border-b border-slate-800/60 bg-slate-950/50 backdrop-blur-xl flex items-center justify-between px-6 shrink-0 z-20 relative"
        >
          <!-- Mobile logo -->
          <div
            class="md:hidden font-mono font-bold tracking-widest text-lg flex items-center"
          >
            <span class="text-blue-400 mr-2">▲</span> METRICS
          </div>

          <!-- Search Bar -->
          <div
            class="hidden md:flex items-center gap-2 bg-slate-900 border border-slate-800 rounded-md px-3 py-1.5 w-64 focus-within:ring-1 focus-within:ring-blue-500/50 focus-within:border-blue-500/50 transition-all shadow-inner"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="text-slate-500"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            <input
              type="text"
              placeholder="Search events..."
              class="bg-transparent border-none outline-none text-sm w-full text-slate-300 placeholder:text-slate-600"
            />
            <div class="flex gap-1">
              <kbd
                class="font-sans text-[10px] bg-slate-800 border border-slate-700 rounded px-1 text-slate-400"
                >⌘</kbd
              >
              <kbd
                class="font-sans text-[10px] bg-slate-800 border border-slate-700 rounded px-1 text-slate-400"
                >K</kbd
              >
            </div>
          </div>

          <!-- Quick Actions -->
          <div class="flex items-center gap-4">
            <div
              class="flex items-center gap-2 text-xs text-slate-400 border border-slate-800 bg-slate-900/50 rounded-full px-3 py-1"
            >
              <span
                class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"
              ></span>
              System Operational
            </div>
            <button
              class="bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium px-4 py-1.5 rounded-md shadow-[0_0_15px_rgba(37,99,235,0.2)] transition-colors"
            >
              Export Report
            </button>
          </div>
        </header>

        <!-- Dashboard Content -->
        <div class="flex-1 overflow-y-auto p-6 md:p-8 scroll-smooth z-10">
          <div class="max-w-6xl mx-auto space-y-8">
            <!-- Header section -->
            <div
              class="flex flex-col md:flex-row md:items-end justify-between gap-4"
              :class="{
                'opacity-100 translate-y-0': isLoaded,
                'opacity-0 translate-y-4': !isLoaded,
              }"
              style="transition: all 0.6s ease-out"
            >
              <div>
                <h1 class="text-2xl font-bold tracking-tight text-slate-100">
                  Overview
                </h1>
                <p class="text-sm text-slate-400 mt-1">
                  Metrics across all environments for the last 24 hours.
                </p>
              </div>
              <div class="flex gap-2">
                <button
                  class="px-3 py-1.5 text-sm font-medium border border-slate-800 rounded-md bg-slate-900 text-slate-300 hover:bg-slate-800 transition-colors"
                >
                  24h
                </button>
                <button
                  class="px-3 py-1.5 text-sm font-medium border border-slate-800 rounded-md bg-slate-950 text-slate-500 hover:bg-slate-800 transition-colors hidden sm:block"
                >
                  7d
                </button>
                <button
                  class="px-3 py-1.5 text-sm font-medium border border-slate-800 rounded-md bg-slate-950 text-slate-500 hover:bg-slate-800 transition-colors hidden sm:block"
                >
                  30d
                </button>
              </div>
            </div>

            <!-- Key Metrics Grid -->
            <div
              class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
              :class="{
                'opacity-100 translate-y-0': isLoaded,
                'opacity-0 translate-y-8': !isLoaded,
              }"
              style="transition: all 0.7s ease-out 0.1s"
            >
              <!-- Card 1 -->
              <div
                class="bg-slate-900/50 backdrop-blur-sm border border-slate-800/80 rounded-xl p-5 hover:border-slate-700 transition-colors group"
              >
                <div class="flex justify-between items-start mb-4">
                  <span class="text-sm font-medium text-slate-400"
                    >Total Requests</span
                  >
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
                    class="text-slate-500"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </div>
                <!-- Interactive counter effect simulation hover -->
                <div
                  class="text-3xl font-bold tracking-tight font-mono text-slate-100 group-hover:text-blue-400 transition-colors"
                >
                  2.4M
                </div>
                <div class="mt-2 flex items-center text-xs">
                  <span
                    class="text-emerald-400 font-medium bg-emerald-400/10 px-1.5 py-0.5 rounded flex items-center gap-1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="m18 15-6-6-6 6" />
                    </svg>
                    12.5%
                  </span>
                  <span class="text-slate-500 ml-2">vs yesterday</span>
                </div>
              </div>

              <!-- Card 2 -->
              <div
                class="bg-slate-900/50 backdrop-blur-sm border border-slate-800/80 rounded-xl p-5 hover:border-slate-700 transition-colors group"
              >
                <div class="flex justify-between items-start mb-4">
                  <span class="text-sm font-medium text-slate-400"
                    >Average Latency</span
                  >
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
                    class="text-slate-500"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div
                  class="text-3xl font-bold tracking-tight font-mono text-slate-100 group-hover:text-cyan-400 transition-colors"
                >
                  45<span class="text-lg text-slate-500 font-sans ml-1"
                    >ms</span
                  >
                </div>
                <div class="mt-2 flex items-center text-xs">
                  <span
                    class="text-emerald-400 font-medium bg-emerald-400/10 px-1.5 py-0.5 rounded flex items-center gap-1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                    2.1%
                  </span>
                  <span class="text-slate-500 ml-2">vs yesterday</span>
                </div>
              </div>

              <!-- Card 3 -->
              <div
                class="bg-slate-900/50 backdrop-blur-sm border border-slate-800/80 rounded-xl p-5 hover:border-slate-700 transition-colors group"
              >
                <div class="flex justify-between items-start mb-4">
                  <span class="text-sm font-medium text-slate-400"
                    >Error Rate</span
                  >
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
                    class="text-slate-500"
                  >
                    <path
                      d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"
                    />
                    <path d="M12 9v4" />
                    <path d="M12 17h.01" />
                  </svg>
                </div>
                <div
                  class="text-3xl font-bold tracking-tight font-mono text-slate-100 group-hover:text-red-400 transition-colors"
                >
                  0.12<span class="text-lg text-slate-500 font-sans ml-1"
                    >%</span
                  >
                </div>
                <div class="mt-2 flex items-center text-xs">
                  <span
                    class="text-red-400 font-medium bg-red-400/10 px-1.5 py-0.5 rounded flex items-center gap-1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="m18 15-6-6-6 6" />
                    </svg>
                    0.05%
                  </span>
                  <span class="text-slate-500 ml-2">vs yesterday</span>
                </div>
              </div>

              <!-- Card 4 -->
              <div
                class="bg-slate-900/50 backdrop-blur-sm border border-slate-800/80 rounded-xl p-5 hover:border-slate-700 transition-colors group"
              >
                <div class="flex justify-between items-start mb-4">
                  <span class="text-sm font-medium text-slate-400"
                    >Active Users</span
                  >
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
                    class="text-slate-500"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <div
                  class="text-3xl font-bold tracking-tight font-mono text-slate-100 group-hover:text-amber-400 transition-colors"
                >
                  12,402
                </div>
                <div class="mt-2 flex items-center text-xs">
                  <span
                    class="text-emerald-400 font-medium bg-emerald-400/10 px-1.5 py-0.5 rounded flex items-center gap-1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="m18 15-6-6-6 6" />
                    </svg>
                    8.2%
                  </span>
                  <span class="text-slate-500 ml-2">vs yesterday</span>
                </div>
              </div>
            </div>

            <!-- Big Main Chart Area (Simulated) -->
            <div
              class="bg-slate-900/50 backdrop-blur-sm border border-slate-800/80 rounded-xl p-6"
              :class="{
                'opacity-100 translate-y-0': isLoaded,
                'opacity-0 translate-y-8': !isLoaded,
              }"
              style="transition: all 0.8s ease-out 0.2s"
            >
              <div class="flex justify-between items-center mb-8">
                <h3 class="font-medium text-sm text-slate-300">
                  Requests Breakdown
                </h3>
                <div class="flex gap-4 text-xs font-mono font-medium">
                  <div class="flex items-center gap-2">
                    <span class="w-2 h-2 rounded-full bg-blue-500"></span> API
                  </div>
                  <div class="flex items-center gap-2">
                    <span class="w-2 h-2 rounded-full bg-cyan-400"></span>
                    Static
                  </div>
                  <div class="flex items-center gap-2">
                    <span class="w-2 h-2 rounded-full bg-slate-600"></span>
                    Blocked
                  </div>
                </div>
              </div>

              <!-- Abstract CSS Chart representation -->
              <div
                class="h-64 flex items-end gap-2 px-2 border-b border-l border-slate-800 pb-2 relative"
              >
                <!-- Data Bars -->
                <div
                  v-for="i in 24"
                  :key="i"
                  class="flex-1 flex flex-col justify-end gap-0.5 group relative hover:bg-slate-800/30 rounded-t h-full"
                >
                  <div
                    class="w-full bg-blue-500 transition-all duration-1000 origin-bottom hover:brightness-125 rounded-t-sm"
                    :style="`height: ${isLoaded ? Math.random() * 40 + 30 : 0}%`"
                  ></div>
                  <div
                    class="w-full bg-cyan-400 transition-all duration-1000 origin-bottom hover:brightness-125"
                    :style="`height: ${isLoaded ? Math.random() * 20 + 10 : 0}%`"
                  ></div>

                  <!-- Tooltip -->
                  <div
                    class="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-slate-800 text-xs px-2 py-1 rounded shadow-xl border border-slate-700 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity scale-95 group-hover:scale-100 z-10 font-mono whitespace-nowrap"
                  >
                    {{ i }}:00<br />API: 42k<br />Static: 18k
                  </div>
                </div>

                <!-- Grid lines horizontal -->
                <div
                  class="absolute w-full border-t border-slate-800/50 top-[25%] -z-10 left-2"
                ></div>
                <div
                  class="absolute w-full border-t border-slate-800/50 top-[50%] -z-10 left-2"
                ></div>
                <div
                  class="absolute w-full border-t border-slate-800/50 top-[75%] -z-10 left-2"
                ></div>
              </div>
            </div>

            <!-- Detailed Grid Area -->
            <div
              class="grid grid-cols-1 md:grid-cols-3 gap-6 pb-12"
              :class="{
                'opacity-100 translate-y-0': isLoaded,
                'opacity-0 translate-y-8': !isLoaded,
              }"
              style="transition: all 0.9s ease-out 0.3s"
            >
              <!-- Top Paths List -->
              <div
                class="col-span-1 md:col-span-2 bg-slate-900/50 backdrop-blur-sm border border-slate-800/80 rounded-xl overflow-hidden"
              >
                <div
                  class="px-6 py-4 border-b border-slate-800/80 bg-slate-900/80"
                >
                  <h3 class="font-medium text-sm text-slate-300">Top Paths</h3>
                </div>
                <div class="divide-y divide-slate-800/50 font-mono text-sm">
                  <div
                    class="flex justify-between items-center px-6 py-3 hover:bg-slate-800/30 transition-colors"
                  >
                    <span class="text-slate-400">/api/v1/users/metrics</span>
                    <span class="text-slate-200">984,102</span>
                  </div>
                  <div
                    class="flex justify-between items-center px-6 py-3 hover:bg-slate-800/30 transition-colors"
                  >
                    <span class="text-slate-400">/api/v1/auth/session</span>
                    <span class="text-slate-200">652,001</span>
                  </div>
                  <div
                    class="flex justify-between items-center px-6 py-3 hover:bg-slate-800/30 transition-colors"
                  >
                    <span class="text-slate-400">/api/v2/products/list</span>
                    <span class="text-slate-200">412,877</span>
                  </div>
                  <div
                    class="flex justify-between items-center px-6 py-3 hover:bg-slate-800/30 transition-colors"
                  >
                    <span class="text-slate-400"
                      >/_next/static/css/main.css</span
                    >
                    <span class="text-slate-200">105,432</span>
                  </div>
                </div>
              </div>

              <!-- Status Gauge / Ring -->
              <div
                class="bg-slate-900/50 backdrop-blur-sm border border-slate-800/80 rounded-xl p-6 flex flex-col items-center justify-center relative overflow-hidden"
              >
                <div
                  class="absolute inset-0 bg-blue-500/5 rounded-full blur-3xl scale-150"
                ></div>
                <h3
                  class="font-medium text-sm text-slate-300 w-full text-left mb-6 relative z-10"
                >
                  Cache Hit Ratio
                </h3>
                <div
                  class="relative w-40 h-40 flex items-center justify-center z-10"
                >
                  <!-- Outer track -->
                  <svg
                    class="w-full h-full transform -rotate-90"
                    viewBox="0 0 100 100"
                  >
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="currentColor"
                      stroke-width="8"
                      fill="transparent"
                      class="text-slate-800"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="currentColor"
                      stroke-width="8"
                      fill="transparent"
                      class="text-blue-500 drop-shadow-[0_0_8px_rgba(59,130,246,0.6)] transition-all duration-1000 ease-out"
                      stroke-dasharray="251.2"
                      :stroke-dashoffset="
                        isLoaded ? 251.2 - 251.2 * 0.92 : 251.2
                      "
                    />
                  </svg>
                  <div
                    class="absolute inset-0 flex flex-col items-center justify-center"
                  >
                    <span class="text-3xl font-bold font-mono text-slate-100"
                      >92<span class="text-lg text-slate-500 font-sans"
                        >%</span
                      ></span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
