<script setup lang="ts">
import { ref, inject, computed, onMounted, onUnmounted } from 'vue'
import type { Ref } from 'vue'
import type { ComponentEntry } from '~/showcase/registry'

const props = defineProps<{
  entry: ComponentEntry
  rawCode: string
}>()

const activeTab = ref<'preview' | 'code'>('preview')
const isDark = inject<Ref<boolean>>('previewDark', ref(false))

const previewContainer = ref<HTMLElement | null>(null)
const previewHeight = ref(props.entry.previewHeight ?? 300)
const previewWidth = ref<number | null>(props.entry.previewWidth ?? null)
const isResizing = ref(false)
const iframeLoaded = ref(false)

const iframeSrc = computed(() =>
  `/preview/${props.entry.slug}${isDark.value ? '?dark=1' : ''}`
)

let resizeHandler: ((ev: MouseEvent) => void) | null = null

onMounted(() => {
  if (!previewContainer.value) return
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        iframeLoaded.value = true
        observer.disconnect()
      }
    },
    { rootMargin: '100px' }
  )
  observer.observe(previewContainer.value)
  onUnmounted(() => observer.disconnect())
})

onUnmounted(() => {
  cleanupResize()
})

function cleanupResize() {
  if (resizeHandler) {
    document.removeEventListener('mousemove', resizeHandler)
    resizeHandler = null
  }
  document.removeEventListener('mouseup', stopResize)
  window.removeEventListener('blur', stopResize)
  isResizing.value = false
}

function stopResize() {
  cleanupResize()
}

function startResizeHeight(e: MouseEvent) {
  e.preventDefault()
  cleanupResize()
  isResizing.value = true
  const startY = e.clientY
  const startH = previewHeight.value
  resizeHandler = (ev: MouseEvent) => {
    previewHeight.value = Math.max(120, startH + ev.clientY - startY)
  }
  document.addEventListener('mousemove', resizeHandler)
  document.addEventListener('mouseup', stopResize)
  window.addEventListener('blur', stopResize)
}

function startResizeWidth(e: MouseEvent) {
  e.preventDefault()
  cleanupResize()
  isResizing.value = true
  const startX = e.clientX
  const startW = previewWidth.value ?? (previewContainer.value!.offsetWidth - 10)
  resizeHandler = (ev: MouseEvent) => {
    const cw = previewContainer.value!.offsetWidth
    previewWidth.value = Math.min(cw - 10, Math.max(280, startW + ev.clientX - startX))
  }
  document.addEventListener('mousemove', resizeHandler)
  document.addEventListener('mouseup', stopResize)
  window.addEventListener('blur', stopResize)
}

function resetWidth() {
  previewWidth.value = null
}

const hasControls = computed(() => !!props.entry.controls?.length && !!props.entry.component)
const hasStories = computed(() => !!props.entry.stories?.length)
const hasExamples = computed(() => !!props.entry.examples?.length)
</script>

<template>
  <div class="space-y-8">
    <!-- Header -->
    <div>
      <div class="flex items-center gap-2 mb-1">
        <span class="text-xs font-medium text-muted-foreground uppercase tracking-wider">{{ entry.group }}</span>
      </div>
      <h1 class="text-2xl font-bold text-foreground">{{ entry.name }}</h1>
      <p class="text-muted-foreground mt-1">{{ entry.description }}</p>
    </div>

    <!-- Controls playground (Default) -->
    <div v-if="hasControls">
      <div class="flex items-center gap-3 mb-4">
        <h2 class="text-sm font-semibold text-foreground uppercase tracking-wider">Default</h2>
        <span class="h-px flex-1 bg-border" />
      </div>
      <ShowcaseControls
        :component-name="entry.componentName!"
        :component="entry.component!"
        :controls="entry.controls!"
        :is-dark="isDark"
      />
    </div>

    <!-- Stories (isolated variants) -->
    <div v-if="hasStories">
      <div class="flex items-center gap-3 mb-4">
        <h2 class="text-sm font-semibold text-foreground uppercase tracking-wider">Variants</h2>
        <span class="h-px flex-1 bg-border" />
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <ShowcaseStory
          v-for="story in entry.stories"
          :key="story.title"
          :story="story"
          :component="entry.component"
          :is-dark="isDark"
        />
      </div>
    </div>

    <!-- iframe preview (Vue d'ensemble) -->
    <div>
      <div class="flex items-center gap-3 mb-4">
        <h2 class="text-sm font-semibold text-foreground uppercase tracking-wider">
          {{ hasControls || hasStories ? 'Overview' : 'Preview' }}
        </h2>
        <span class="h-px flex-1 bg-border" />
      </div>

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
            Preview
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
            Demo code
          </button>
          <div v-if="activeTab === 'preview' && previewWidth !== null" class="ml-auto flex items-center gap-2 pr-3">
            <span class="text-xs text-muted-foreground font-mono">{{ previewWidth }}px</span>
            <button @click="resetWidth" class="text-xs text-muted-foreground hover:text-foreground transition-colors">↔ reset</button>
          </div>
        </div>

        <!-- Preview pane (iframe) -->
        <div
          v-show="activeTab === 'preview'"
          ref="previewContainer"
          :style="{ height: previewHeight + 'px' }"
          class="flex overflow-hidden bg-muted/10"
        >
          <iframe
            v-if="iframeLoaded"
            :src="iframeSrc"
            :style="previewWidth !== null ? { width: previewWidth + 'px' } : {}"
            :class="[
              previewWidth !== null ? 'shrink-0' : 'flex-1',
              isResizing ? 'pointer-events-none' : ''
            ]"
            class="h-full border-none bg-background"
            title="Component preview"
          />

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
        class="flex items-center justify-center h-2.5 cursor-row-resize group select-none border-t border-border bg-muted/20 hover:bg-primary/10 transition-colors"
      >
        <div class="w-8 h-px rounded-full bg-muted-foreground/30 group-hover:bg-primary/50 transition-colors"></div>
      </div>
    </div>

    <!-- Usage examples (code snippets) -->
    <div v-if="hasExamples">
      <div class="flex items-center gap-3 mb-4">
        <h2 class="text-sm font-semibold text-foreground uppercase tracking-wider">Usage examples</h2>
        <span class="h-px flex-1 bg-border" />
      </div>
      <div class="space-y-4">
        <div v-for="(example, i) in entry.examples" :key="i">
          <h3 class="text-sm font-medium text-foreground mb-2">{{ example.title }}</h3>
          <ShowcaseCodeBlock :code="example.code" />
        </div>
      </div>
    </div>
  </div>
</template>
