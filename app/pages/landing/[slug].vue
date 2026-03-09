<script setup lang="ts">
import { computed, defineAsyncComponent, ref, inject } from 'vue'
import type { Ref } from 'vue'
import { landingPages } from '~/showcase/registry'

definePageMeta({ layout: 'showcase' })

const route = useRoute()
const slug = computed(() => route.params.slug as string)
const entry = computed(() => landingPages.find(p => p.slug === slug.value))

const componentMap: Record<string, any> = {
  agency: defineAsyncComponent(() => import('~/components/Landing/LandingAgency.vue')),
  app: defineAsyncComponent(() => import('~/components/Landing/LandingApp.vue')),
  saas: defineAsyncComponent(() => import('~/components/Landing/LandingSaaS.vue')),
}

const landingComponent = computed(() => componentMap[slug.value] ?? null)

const codeMap: Record<string, string> = {
  agency: '<LandingAgency />',
  app: '<LandingApp />',
  saas: '<LandingSaaS />',
}

const usageCode = computed(() => codeMap[slug.value] ?? '')

const fullscreen = ref(false)
const isDark = inject<Ref<boolean>>('previewDark', ref(false))

const previewHeight = ref(600)

function startResize(e: MouseEvent) {
  const startY = e.clientY
  const startH = previewHeight.value
  function onMove(ev: MouseEvent) {
    previewHeight.value = Math.max(200, startH + ev.clientY - startY)
  }
  function onUp() {
    window.removeEventListener('mousemove', onMove)
    window.removeEventListener('mouseup', onUp)
  }
  window.addEventListener('mousemove', onMove)
  window.addEventListener('mouseup', onUp)
}
</script>

<template>
  <div v-if="entry">
    <!-- Fullscreen mode -->
    <Teleport to="body">
      <div
        v-if="fullscreen"
        :class="isDark ? 'dark' : ''"
        class="fixed inset-0 z-50 bg-background overflow-auto"
      >
        <div class="absolute top-4 right-4 z-10">
          <button
            @click="fullscreen = false"
            class="inline-flex items-center gap-1.5 text-xs bg-background border border-border rounded-md px-3 py-1.5 shadow-lg hover:bg-accent transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"/>
            </svg>
            Quitter le plein écran
          </button>
        </div>
        <component :is="landingComponent" v-if="landingComponent" />
      </div>
    </Teleport>

    <div class="px-8 py-10">
      <!-- Header -->
      <div class="mb-6">
        <div class="flex items-center gap-2 mb-1">
          <span class="text-xs font-medium text-muted-foreground uppercase tracking-wider">Landing Pages</span>
        </div>
        <div class="flex items-center justify-between">
          <div>
            <h1 class="text-2xl font-bold text-foreground">{{ entry.name }}</h1>
            <p class="text-muted-foreground mt-1">{{ entry.description }}</p>
          </div>
          <button
            @click="fullscreen = true"
            class="inline-flex items-center gap-2 text-sm border border-border rounded-lg px-4 py-2 hover:bg-accent transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
            </svg>
            Plein écran
          </button>
        </div>
      </div>

      <!-- Preview -->
      <div class="rounded-xl border border-border overflow-hidden mb-2">
        <div class="flex items-center gap-2 px-4 py-2 border-b border-border bg-muted/30">
          <div class="flex gap-1.5">
            <div class="h-3 w-3 rounded-full bg-red-400/60"></div>
            <div class="h-3 w-3 rounded-full bg-yellow-400/60"></div>
            <div class="h-3 w-3 rounded-full bg-green-400/60"></div>
          </div>
          <span class="text-xs text-muted-foreground font-mono flex-1 text-center">Aperçu</span>
        </div>
        <div
          :class="isDark ? 'dark' : ''"
          :style="{ height: previewHeight + 'px' }"
          class="overflow-auto bg-background"
        >
          <component :is="landingComponent" v-if="landingComponent" />
        </div>
      </div>

      <!-- Resize handle -->
      <div
        @mousedown="startResize"
        class="flex items-center justify-center h-4 mb-4 cursor-row-resize group select-none"
      >
        <div class="w-12 h-1 rounded-full bg-muted-foreground/20 group-hover:bg-muted-foreground/50 transition-colors"></div>
      </div>

      <!-- Usage -->
      <div>
        <h2 class="text-lg font-semibold text-foreground mb-3">Utilisation</h2>
        <ShowcaseCodeBlock :code="usageCode" />
      </div>
    </div>
  </div>
  <div v-else class="px-8 py-10 text-muted-foreground">
    Landing page « {{ slug }} » introuvable.
  </div>
</template>
