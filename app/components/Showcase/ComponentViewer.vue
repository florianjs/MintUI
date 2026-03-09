<script setup lang="ts">
import { ref, inject } from 'vue'
import type { Ref } from 'vue'
import type { ComponentEntry } from '~/showcase/registry'

const props = defineProps<{
  entry: ComponentEntry
  demoComponent: any
  rawCode: string
}>()

const activeTab = ref<'preview' | 'code'>('preview')
const isDark = inject<Ref<boolean>>('previewDark', ref(false))

const previewContainer = ref<HTMLElement | null>(null)
const previewHeight = ref(300)
const previewWidth = ref<number | null>(null) // null = flex-1 (pleine largeur)

function startResizeHeight(e: MouseEvent) {
  e.preventDefault()
  const startY = e.clientY
  const startH = previewHeight.value
  function onMove(ev: MouseEvent) {
    previewHeight.value = Math.max(120, startH + ev.clientY - startY)
  }
  function onUp() {
    window.removeEventListener('mousemove', onMove)
    window.removeEventListener('mouseup', onUp)
  }
  window.addEventListener('mousemove', onMove)
  window.addEventListener('mouseup', onUp)
}

function startResizeWidth(e: MouseEvent) {
  e.preventDefault()
  const startX = e.clientX
  const startW = previewWidth.value ?? (previewContainer.value!.offsetWidth - 10)
  function onMove(ev: MouseEvent) {
    const cw = previewContainer.value!.offsetWidth
    previewWidth.value = Math.min(cw - 10, Math.max(280, startW + ev.clientX - startX))
  }
  function onUp() {
    window.removeEventListener('mousemove', onMove)
    window.removeEventListener('mouseup', onUp)
  }
  window.addEventListener('mousemove', onMove)
  window.addEventListener('mouseup', onUp)
}

function resetWidth() {
  previewWidth.value = null
}
</script>

<template>
  <div class="space-y-6">
    <!-- Header -->
    <div>
      <div class="flex items-center gap-2 mb-1">
        <span class="text-xs font-medium text-muted-foreground uppercase tracking-wider">{{ entry.group }}</span>
      </div>
      <h1 class="text-2xl font-bold text-foreground">{{ entry.name }}</h1>
      <p class="text-muted-foreground mt-1">{{ entry.description }}</p>
    </div>

    <!-- Preview / Code tabs -->
    <div class="rounded-xl border border-border overflow-hidden">
      <!-- Tab bar -->
      <div class="flex items-center border-b border-border bg-muted/30">
        <button
          @click="activeTab = 'preview'"
          :class="[
            'px-4 py-2.5 text-sm font-medium transition-colors border-b-2 -mb-px',
            activeTab === 'preview'
              ? 'border-primary text-foreground'
              : 'border-transparent text-muted-foreground hover:text-foreground'
          ]"
        >
          Aperçu
        </button>
        <button
          @click="activeTab = 'code'"
          :class="[
            'px-4 py-2.5 text-sm font-medium transition-colors border-b-2 -mb-px',
            activeTab === 'code'
              ? 'border-primary text-foreground'
              : 'border-transparent text-muted-foreground hover:text-foreground'
          ]"
        >
          Code démo
        </button>
        <!-- Width indicator + reset -->
        <div v-if="activeTab === 'preview' && previewWidth !== null" class="ml-auto flex items-center gap-2 pr-3">
          <span class="text-xs text-muted-foreground font-mono">{{ previewWidth }}px</span>
          <button @click="resetWidth" class="text-xs text-muted-foreground hover:text-foreground transition-colors">↔ reset</button>
        </div>
      </div>

      <!-- Preview pane -->
      <div
        v-show="activeTab === 'preview'"
        ref="previewContainer"
        :style="{ height: previewHeight + 'px' }"
        class="flex overflow-hidden"
      >
        <!-- Content -->
        <div
          :class="[isDark ? 'dark' : '', previewWidth !== null ? 'shrink-0' : 'flex-1']"
          :style="previewWidth !== null ? { width: previewWidth + 'px' } : {}"
          class="h-full overflow-auto bg-background p-8 flex items-start justify-start"
        >
          <component :is="demoComponent" v-if="demoComponent" />
          <div v-else class="text-muted-foreground text-sm">Démo non disponible</div>
        </div>

        <!-- Right resize handle -->
        <div
          @mousedown="startResizeWidth"
          class="w-2.5 h-full cursor-col-resize flex items-center justify-center group shrink-0 border-l border-border bg-muted/20 hover:bg-primary/10 transition-colors"
        >
          <div class="w-px h-8 rounded-full bg-muted-foreground/30 group-hover:bg-primary/50 transition-colors"></div>
        </div>
      </div>

      <!-- Code pane -->
      <div v-show="activeTab === 'code'">
        <ShowcaseCodeBlock :code="rawCode" />
      </div>
    </div>

    <!-- Bottom resize handle -->
    <div
      v-if="activeTab === 'preview'"
      @mousedown="startResizeHeight"
      class="flex items-center justify-center h-4 -mt-4 cursor-row-resize group select-none"
    >
      <div class="w-12 h-1 rounded-full bg-muted-foreground/20 group-hover:bg-muted-foreground/50 transition-colors"></div>
    </div>

    <!-- Examples / Usage snippets -->
    <div v-if="entry.examples.length > 0">
      <h2 class="text-lg font-semibold text-foreground mb-4">Exemples d'utilisation</h2>
      <div class="space-y-4">
        <div v-for="(example, i) in entry.examples" :key="i">
          <h3 class="text-sm font-medium text-foreground mb-2">{{ example.title }}</h3>
          <ShowcaseCodeBlock :code="example.code" />
        </div>
      </div>
    </div>
  </div>
</template>
