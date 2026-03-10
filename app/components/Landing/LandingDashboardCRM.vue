<script setup lang="ts">
import { ref, onMounted } from 'vue';

const isLoaded = ref(false);

onMounted(() => {
  setTimeout(() => (isLoaded.value = true), 100);
});

// Mock active tab state
const activeTab = ref('Board');
</script>

<template>
  <div
    class="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-emerald-500/20 selection:text-emerald-900 relative"
  >
    <!-- Clean Top Desktop Header, glassmorphism light -->
    <header
      class="fixed top-0 left-0 w-full h-16 bg-white/80 backdrop-blur-md border-b border-slate-200 z-50 flex flex-col justify-center shadow-sm"
    >
      <div
        class="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 flex items-center justify-between"
      >
        <div class="flex items-center gap-8">
          <!-- App Logo -->
          <div class="flex items-center gap-2 font-bold text-lg tracking-tight">
            <div
              class="w-6 h-6 rounded bg-emerald-500 flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            Flow
          </div>
          <!-- Top Nav Links -->
          <nav class="hidden md:flex gap-6 text-sm font-medium text-slate-500">
            <a href="#" class="text-slate-900">Projects</a>
            <a href="#" class="hover:text-slate-900 transition-colors">Inbox</a>
            <a href="#" class="hover:text-slate-900 transition-colors"
              >Reporting</a
            >
            <a href="#" class="hover:text-slate-900 transition-colors"
              >Portfolios</a
            >
          </nav>
        </div>

        <div class="flex items-center gap-4">
          <!-- Search -->
          <div
            class="hidden md:flex items-center bg-slate-100 rounded-full px-3 py-1.5 focus-within:ring-2 focus-within:ring-emerald-500/20 transition-all"
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
              class="text-slate-400 mr-2"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            <input
              type="text"
              placeholder="Search tasks..."
              class="bg-transparent border-none outline-none text-sm w-48 text-slate-700 placeholder:text-slate-400"
            />
          </div>

          <button
            class="bg-emerald-500 hover:bg-emerald-600 text-white p-1.5 rounded-full shadow-sm transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M5 12h14" />
              <path d="M12 5v14" />
            </svg>
          </button>

          <!-- User avatar -->
          <div
            class="w-8 h-8 rounded-full border border-slate-200 overflow-hidden bg-slate-100 ml-2"
          >
            <img
              src="https://i.pravatar.cc/150?u=florian"
              alt="User Avatar"
              class="w-full h-full object-cover grayscale"
            />
          </div>
        </div>
      </div>
    </header>

    <!-- Project Context Header -->
    <div class="pt-28 pb-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div
        class="flex flex-col md:flex-row md:items-center justify-between gap-6"
        :class="{
          'opacity-100 translate-y-0': isLoaded,
          'opacity-0 translate-y-4': !isLoaded,
        }"
        style="transition: all 0.6s ease-out"
      >
        <div class="flex items-center gap-4">
          <div
            class="w-12 h-12 rounded-xl bg-teal-100 border border-teal-200 flex items-center justify-center text-teal-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
              <circle cx="9" cy="9" r="2" />
              <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
            </svg>
          </div>
          <div>
            <div class="flex items-center gap-2 mb-1">
              <span
                class="text-xs font-semibold uppercase tracking-wider text-slate-500"
                >Q4 Initiative</span
              >
              <span
                class="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-700 border border-amber-200"
                >ON TRACK</span
              >
            </div>
            <h1 class="text-3xl font-bold tracking-tight text-slate-900">
              Website Redesign 2026
            </h1>
          </div>
        </div>

        <div class="flex items-center gap-3">
          <div class="flex -space-x-2 mr-2">
            <img
              class="inline-block h-8 w-8 rounded-full ring-2 ring-white border border-slate-200 grayscale"
              src="https://i.pravatar.cc/150?u=1"
              alt=""
            />
            <img
              class="inline-block h-8 w-8 rounded-full ring-2 ring-white border border-slate-200 grayscale opacity-90"
              src="https://i.pravatar.cc/150?u=2"
              alt=""
            />
            <img
              class="inline-block h-8 w-8 rounded-full ring-2 ring-white border border-slate-200 grayscale opacity-80"
              src="https://i.pravatar.cc/150?u=3"
              alt=""
            />
            <div
              class="inline-flex h-8 w-8 items-center justify-center rounded-full ring-2 ring-white bg-slate-100 border border-slate-200 text-xs font-medium text-slate-500"
            >
              +4
            </div>
          </div>
          <button
            class="px-3 py-1.5 bg-white border border-slate-300 rounded shadow-sm text-sm font-medium hover:bg-slate-50 transition-colors"
          >
            Share
          </button>
        </div>
      </div>

      <!-- Tabs -->
      <div
        class="mt-8 border-b border-slate-200 flex gap-6"
        :class="{
          'opacity-100 translate-y-0': isLoaded,
          'opacity-0 translate-y-4': !isLoaded,
        }"
        style="transition: all 0.7s ease-out 0.1s"
      >
        <button
          v-for="tab in ['Overview', 'List', 'Board', 'Timeline', 'Updates']"
          :key="tab"
          @click="activeTab = tab"
          class="pb-3 text-sm font-semibold transition-colors relative"
          :class="
            activeTab === tab
              ? 'text-emerald-600'
              : 'text-slate-500 hover:text-slate-700'
          "
        >
          {{ tab }}
          <div
            v-if="activeTab === tab"
            class="absolute bottom-0 left-0 w-full h-0.5 bg-emerald-500 rounded-t-full"
          ></div>
        </button>
      </div>
    </div>

    <!-- Main Board Area (Simulated Kanban) -->
    <div class="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-20">
      <div
        class="flex gap-6 overflow-x-auto pb-8 -mx-4 px-4 sm:mx-0 sm:px-0"
        :class="{
          'opacity-100 translate-y-0': isLoaded,
          'opacity-0 translate-y-8': !isLoaded,
        }"
        style="transition: all 0.8s ease-out 0.2s"
      >
        <!-- Column 1: Backlog -->
        <div class="shrink-0 w-80 flex flex-col gap-3">
          <div class="flex items-center justify-between mb-2">
            <h3
              class="font-bold text-sm text-slate-700 flex items-center gap-2"
            >
              <span class="w-2.5 h-2.5 rounded-full bg-slate-300"></span>
              Backlog <span class="text-slate-400 font-normal ml-1">3</span>
            </h3>
            <button class="text-slate-400 hover:text-slate-600">
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
                <path d="M5 12h14" />
                <path d="M12 5v14" />
              </svg>
            </button>
          </div>

          <!-- Card  -->
          <div
            class="bg-white p-4 rounded-xl border border-slate-200 shadow-sm cursor-grab hover:shadow-md transition-shadow"
          >
            <div class="flex justify-between items-start mb-2">
              <span
                class="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-600"
                >DESIGN</span
              >
            </div>
            <h4 class="font-semibold text-slate-800 text-sm mb-2">
              Create Illustration Assets
            </h4>
            <p class="text-xs text-slate-500 mb-4 line-clamp-2">
              Need 3 hero illustrations for the product pages.
            </p>
            <div class="flex items-center justify-between">
              <div
                class="flex items-center gap-2 text-xs font-semibold text-slate-400 flex items-center"
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
                >
                  <path
                    d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                  />
                </svg>
                2
              </div>
            </div>
          </div>
        </div>

        <!-- Column 2: In Progress -->
        <div class="shrink-0 w-80 flex flex-col gap-3">
          <div class="flex items-center justify-between mb-2">
            <h3
              class="font-bold text-sm text-slate-700 flex items-center gap-2"
            >
              <span class="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
              In Progress <span class="text-slate-400 font-normal ml-1">2</span>
            </h3>
            <button class="text-slate-400 hover:text-slate-600">
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
                <path d="M5 12h14" />
                <path d="M12 5v14" />
              </svg>
            </button>
          </div>

          <!-- Card  -->
          <div
            class="bg-white p-4 rounded-xl border border-blue-200 shadow-sm shadow-blue-500/5 cursor-grab hover:shadow-md transition-shadow relative overflow-hidden"
          >
            <!-- Progress bar top edge -->
            <div
              class="absolute top-0 left-0 h-1 bg-blue-500 transition-all duration-1000 w-[60%]"
            ></div>

            <div class="flex justify-between items-start mb-2 mt-1">
              <span
                class="px-2 py-0.5 rounded text-[10px] font-bold bg-teal-50 text-teal-700 border border-teal-200"
                >FRONTEND</span
              >
            </div>
            <h4 class="font-semibold text-slate-800 text-sm mb-2">
              Implement Navigation component
            </h4>
            <div class="flex items-center justify-between mt-4">
              <div
                class="flex items-center gap-2 text-xs font-semibold text-slate-500 flex items-center bg-slate-100 px-2 py-1 rounded"
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
                  class="text-rose-500"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                Oct 15
              </div>
              <img
                class="inline-block h-6 w-6 rounded-full grayscale"
                src="https://i.pravatar.cc/150?u=florian"
                alt=""
              />
            </div>
          </div>

          <!-- Card  -->
          <div
            class="bg-white p-4 rounded-xl border border-blue-200 shadow-sm shadow-blue-500/5 cursor-grab hover:shadow-md transition-shadow relative overflow-hidden"
          >
            <div
              class="absolute top-0 left-0 h-1 bg-blue-500 transition-all duration-1000 w-[30%]"
            ></div>
            <div class="flex justify-between items-start mb-2 mt-1">
              <span
                class="px-2 py-0.5 rounded text-[10px] font-bold bg-indigo-50 text-indigo-700 border border-indigo-200"
                >BACKEND</span
              >
            </div>
            <h4 class="font-semibold text-slate-800 text-sm mb-2">
              API Route Optimization
            </h4>
            <div class="flex items-center justify-between mt-4">
              <div
                class="flex items-center gap-2 text-xs font-semibold text-slate-400 flex items-center"
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
                >
                  <polyline points="9 11 12 14 22 4" />
                  <path
                    d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"
                  />
                </svg>
                1/4
              </div>
              <img
                class="inline-block h-6 w-6 rounded-full grayscale"
                src="https://i.pravatar.cc/150?u=4"
                alt=""
              />
            </div>
          </div>
        </div>

        <!-- Column 3: Review -->
        <div class="shrink-0 w-80 flex flex-col gap-3">
          <div class="flex items-center justify-between mb-2">
            <h3
              class="font-bold text-sm text-slate-700 flex items-center gap-2"
            >
              <span class="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
              In Review <span class="text-slate-400 font-normal ml-1">1</span>
            </h3>
            <button class="text-slate-400 hover:text-slate-600">
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
                <path d="M5 12h14" />
                <path d="M12 5v14" />
              </svg>
            </button>
          </div>

          <!-- Card  -->
          <div
            class="bg-amber-50/50 p-4 rounded-xl border border-amber-200 shadow-sm cursor-grab hover:shadow-md transition-shadow"
          >
            <div class="flex justify-between items-start mb-2">
              <span
                class="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-600"
                >DESIGN</span
              >
            </div>
            <h4 class="font-semibold text-slate-800 text-sm mb-2">
              Design System Tokens Update
            </h4>
            <div class="flex items-center justify-between mt-4">
              <div class="flex -space-x-1">
                <img
                  class="inline-block h-5 w-5 rounded-full ring-2 ring-white grayscale"
                  src="https://i.pravatar.cc/150?u=1"
                  alt=""
                />
                <img
                  class="inline-block h-5 w-5 rounded-full ring-2 ring-white grayscale opacity-90"
                  src="https://i.pravatar.cc/150?u=4"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        <!-- Column 4: Done -->
        <div class="shrink-0 w-80 flex flex-col gap-3 opacity-75">
          <div class="flex items-center justify-between mb-2">
            <h3
              class="font-bold text-sm text-slate-700 flex items-center gap-2"
            >
              <span class="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
              Done <span class="text-slate-400 font-normal ml-1">4</span>
            </h3>
            <button class="text-slate-400 hover:text-slate-600">
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
                <path d="M5 12h14" />
                <path d="M12 5v14" />
              </svg>
            </button>
          </div>

          <!-- Card  -->
          <div
            class="bg-slate-50 p-4 rounded-xl border border-slate-200 shadow-sm line-through decoration-slate-400"
          >
            <div class="flex justify-between items-start mb-2 opacity-50">
              <span
                class="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-200 text-slate-600"
                >RESEARCH</span
              >
            </div>
            <h4 class="font-semibold text-slate-500 text-sm mb-2">
              Competitor Analysis
            </h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
