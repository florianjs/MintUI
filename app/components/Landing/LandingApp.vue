<script setup lang="ts">
import { ref, onMounted } from 'vue';

const isLoaded = ref(false);

onMounted(() => {
  setTimeout(() => {
    isLoaded.value = true;
  }, 100);
});
</script>

<template>
  <div
    class="min-h-screen bg-[#FFF9F2] text-slate-800 font-sans selection:bg-rose-500/20 overflow-hidden relative"
  >
    <!-- Playful Background Blobs -->
    <div class="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      <div
        class="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-rose-400/20 blur-[120px] mix-blend-multiply animate-blob"
      ></div>
      <div
        class="absolute top-[20%] right-[-10%] w-[40%] h-[40%] rounded-full bg-amber-400/20 blur-[100px] mix-blend-multiply animate-blob animation-delay-2000"
      ></div>
      <div
        class="absolute bottom-[-10%] left-[20%] w-[60%] h-[50%] rounded-full bg-fuchsia-400/20 blur-[120px] mix-blend-multiply animate-blob animation-delay-4000"
      ></div>
    </div>

    <!-- Navigation -->
    <nav
      class="relative z-50 flex items-center justify-between px-6 py-6 max-w-7xl mx-auto"
    >
      <div class="flex items-center gap-3">
        <div
          class="w-10 h-10 rounded-2xl bg-gradient-to-tr from-rose-500 to-orange-400 flex items-center justify-center shadow-lg shadow-rose-500/30"
        >
          <svg
            class="w-6 h-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2.5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <span class="text-2xl font-extrabold tracking-tight text-slate-900"
          >HabitHero</span
        >
      </div>

      <button
        class="px-6 py-3 rounded-full bg-slate-900 text-white font-bold hover:bg-slate-800 transition-colors shadow-xl shadow-slate-900/20 hover:scale-105 active:scale-95 duration-200"
      >
        Get the App
      </button>
    </nav>

    <!-- Hero Section -->
    <main
      class="relative z-10 pt-16 pb-32 px-6 flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto gap-16 lg:gap-0"
    >
      <!-- Text Content -->
      <div
        class="flex-1 text-center lg:text-left pt-10"
        :class="{
          'opacity-100 translate-y-0': isLoaded,
          'opacity-0 translate-y-8': !isLoaded,
        }"
        style="transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1)"
      >
        <div
          class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-rose-100 text-rose-500 font-bold mb-8"
        >
          <span class="text-xl leading-none">✨</span>
          App of the Day 2026
        </div>

        <h1
          class="text-6xl lg:text-8xl font-black tracking-tighter leading-[1.05] text-slate-900 mb-8"
        >
          Build habits <br />
          <span
            class="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-orange-400"
            >you actually love.</span
          >
        </h1>

        <p
          class="text-xl text-slate-600 max-w-lg mx-auto lg:mx-0 mb-12 font-medium leading-relaxed"
        >
          Stop feeling guilty. HabitHero uses positive reinforcement, cute
          mascots, and smart tracking to help you build the life you want.
        </p>

        <!-- App Store Buttons -->
        <div
          class="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
        >
          <button
            class="h-16 px-6 bg-slate-900 rounded-2xl flex items-center gap-3 hover:bg-slate-800 transition-all hover:-translate-y-1 hover:shadow-2xl shadow-slate-900/30"
          >
            <svg
              class="w-8 h-8 text-white"
              viewBox="0 0 384 512"
              fill="currentColor"
            >
              <path
                d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
              />
            </svg>
            <div class="text-left">
              <div
                class="text-[10px] text-slate-300 font-medium tracking-wider uppercase leading-none mb-1"
              >
                Download on the
              </div>
              <div class="text-xl text-white font-bold leading-none">
                App Store
              </div>
            </div>
          </button>
          <button
            class="h-16 px-6 bg-white border-2 border-slate-200 rounded-2xl flex items-center gap-3 hover:bg-slate-50 transition-all hover:-translate-y-1 hover:shadow-2xl shadow-slate-200/50"
          >
            <svg
              class="w-8 h-8 text-emerald-500"
              viewBox="0 0 512 512"
              fill="currentColor"
            >
              <path
                d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"
              />
            </svg>
            <div class="text-left">
              <div
                class="text-[10px] text-slate-500 font-medium tracking-wider uppercase leading-none mb-1"
              >
                Get it on
              </div>
              <div class="text-xl text-slate-900 font-bold leading-none">
                Google Play
              </div>
            </div>
          </button>
        </div>

        <div
          class="mt-10 flex items-center justify-center lg:justify-start gap-4 text-sm font-bold text-slate-500"
        >
          <div class="flex -space-x-3">
            <div
              class="w-10 h-10 rounded-full bg-rose-200 border-2 border-[#FFF9F2] z-[3]"
            ></div>
            <div
              class="w-10 h-10 rounded-full bg-amber-200 border-2 border-[#FFF9F2] z-[2]"
            ></div>
            <div
              class="w-10 h-10 rounded-full bg-emerald-200 border-2 border-[#FFF9F2] z-[1]"
            ></div>
          </div>
          <div>Over 100k+ happy users</div>
        </div>
      </div>

      <!-- App Mockup -->
      <div
        class="flex-1 w-full max-w-md relative"
        :class="{
          'opacity-100 translate-y-0 scale-100': isLoaded,
          'opacity-0 translate-y-16 scale-95': !isLoaded,
        }"
        style="transition: all 1s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s"
      >
        <!-- Decoration cards floating around phone -->
        <div
          class="absolute -left-12 top-24 bg-white p-4 rounded-3xl shadow-xl shadow-rose-500/10 rotate-[-8deg] z-20 animate-float"
        >
          <div class="flex items-center gap-3">
            <div
              class="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center text-2xl"
            >
              🔥
            </div>
            <div>
              <div class="font-bold text-slate-900">7 Day Streak!</div>
              <div class="text-xs text-rose-500 font-bold">Keep it up</div>
            </div>
          </div>
        </div>

        <div
          class="absolute -right-8 bottom-32 bg-white p-4 rounded-3xl shadow-xl shadow-emerald-500/10 rotate-[6deg] z-20 animate-float animation-delay-2000"
        >
          <div class="flex items-center gap-3">
            <div
              class="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-2xl"
            >
              💧
            </div>
            <div>
              <div class="font-bold text-slate-900">Drank Water</div>
              <div class="text-xs text-emerald-500 font-bold">+50 points</div>
            </div>
          </div>
        </div>

        <!-- Phone Frame -->
        <div
          class="relative mx-auto w-[320px] h-[650px] bg-white rounded-[3rem] border-[8px] border-slate-900 shadow-2xl overflow-hidden z-10 flex flex-col"
        >
          <!-- Dynamic Island -->
          <div
            class="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-6 bg-slate-900 rounded-full z-30"
          ></div>

          <!-- Screen Content (Fake App UI) -->
          <div
            class="flex-1 bg-slate-50 flex flex-col relative overflow-hidden"
          >
            <!-- App Header -->
            <div
              class="pt-12 px-6 pb-6 bg-white rounded-b-[2rem] shadow-sm relative z-10"
            >
              <div class="flex justify-between items-center mb-6">
                <div>
                  <h2 class="text-2xl font-black text-slate-900">
                    Hello, Alex 👋
                  </h2>
                  <p class="text-sm font-bold text-rose-500">
                    You're doing great!
                  </p>
                </div>
                <div
                  class="w-12 h-12 rounded-full bg-slate-100 border-2 border-white shadow-sm flex justify-center items-center text-xl"
                >
                  🐶
                </div>
              </div>

              <!-- Progress -->
              <div
                class="bg-gradient-to-r from-rose-500 to-orange-400 p-5 rounded-3xl text-white shadow-lg shadow-rose-500/20"
              >
                <div class="flex justify-between items-end mb-2">
                  <div class="font-bold">Daily Goal</div>
                  <div class="font-black text-2xl">80%</div>
                </div>
                <div
                  class="w-full h-3 bg-white/20 rounded-full overflow-hidden"
                >
                  <div class="h-full bg-white rounded-full w-[80%]"></div>
                </div>
              </div>
            </div>

            <!-- App Body -->
            <div class="flex-1 p-6 flex flex-col gap-4 overflow-y-auto pb-8">
              <h3 class="font-black text-lg text-slate-900 mb-2">
                Today's Habits
              </h3>

              <!-- Habit item 1 -->
              <div
                class="bg-white p-4 rounded-3xl shadow-sm border border-slate-100 flex items-center justify-between"
              >
                <div class="flex items-center gap-4">
                  <div
                    class="w-12 h-12 rounded-2xl bg-amber-100 flex items-center justify-center text-2xl"
                  >
                    📖
                  </div>
                  <div>
                    <div class="font-bold text-slate-900">Read 10 pages</div>
                    <div class="text-xs font-bold text-slate-400">
                      Morning routine
                    </div>
                  </div>
                </div>
                <div
                  class="w-8 h-8 rounded-full bg-rose-500 flex items-center justify-center text-white font-bold shadow-md shadow-rose-500/30"
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
                      stroke-width="3"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              </div>

              <!-- Habit item 2 -->
              <div
                class="bg-white p-4 rounded-3xl shadow-sm border border-slate-100 flex items-center justify-between"
              >
                <div class="flex items-center gap-4">
                  <div
                    class="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center text-2xl"
                  >
                    🏃‍♂️
                  </div>
                  <div>
                    <div class="font-bold text-slate-900">Run 5k</div>
                    <div class="text-xs font-bold text-slate-400">
                      Evening routine
                    </div>
                  </div>
                </div>
                <div
                  class="w-8 h-8 rounded-full border-2 border-slate-200 flex items-center justify-center"
                ></div>
              </div>

              <!-- Habit item 3 -->
              <div
                class="bg-white p-4 rounded-3xl shadow-sm border border-slate-100 flex items-center justify-between opacity-60"
              >
                <div class="flex items-center gap-4">
                  <div
                    class="w-12 h-12 rounded-2xl bg-purple-100 flex items-center justify-center text-2xl"
                  >
                    🧘‍♀️
                  </div>
                  <div>
                    <div class="font-bold text-slate-900">Meditate</div>
                    <div class="text-xs font-bold text-slate-400">15 mins</div>
                  </div>
                </div>
                <div
                  class="w-8 h-8 rounded-full border-2 border-slate-200 flex items-center justify-center"
                ></div>
              </div>

              <!-- Add New Button -->
              <button
                class="mt-2 w-full py-4 border-2 border-dashed border-slate-300 rounded-3xl font-bold text-slate-400 flex items-center justify-center gap-2 hover:bg-slate-50 hover:border-slate-400 transition-colors"
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
                Add new habit
              </button>
            </div>

            <!-- Bottom Tab Bar -->
            <div
              class="h-20 bg-white border-t border-slate-100 flex justify-around items-center px-6 pb-2"
            >
              <div
                class="w-12 h-12 rounded-full flex items-center justify-center text-rose-500"
              >
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
                  />
                </svg>
              </div>
              <div
                class="w-12 h-12 rounded-full flex items-center justify-center text-slate-300"
              >
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div
                class="w-12 h-12 rounded-full flex items-center justify-center text-slate-300"
              >
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style>
@keyframes blob {
  0% {
    transform: translate(0px, 0px) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
  100% {
    transform: translate(0px, 0px) scale(1);
  }
}
.animate-blob {
  animation: blob 7s infinite;
}
.animation-delay-2000 {
  animation-delay: 2s;
}
.animation-delay-4000 {
  animation-delay: 4s;
}

@keyframes float {
  0% {
    transform: translateY(0px) rotate(var(--tw-rotate));
  }
  50% {
    transform: translateY(-10px) rotate(calc(var(--tw-rotate) + 2deg));
  }
  100% {
    transform: translateY(0px) rotate(var(--tw-rotate));
  }
}
.animate-float {
  animation: float 6s ease-in-out infinite;
}
</style>
