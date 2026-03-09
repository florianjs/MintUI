<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  code: string
  language?: string
}>()

const copied = ref(false)

async function copy() {
  await navigator.clipboard.writeText(props.code)
  copied.value = true
  setTimeout(() => copied.value = false, 2000)
}
</script>

<template>
  <div class="relative group rounded-lg overflow-hidden border bg-[#0d1117] dark:bg-[#0d1117]">
    <div class="flex items-center justify-between px-4 py-2 border-b border-white/10">
      <span class="text-xs text-white/40 font-mono">{{ language ?? 'vue' }}</span>
      <button
        @click="copy"
        class="inline-flex items-center gap-1.5 text-xs text-white/40 hover:text-white/80 transition-colors"
      >
        <svg v-if="!copied" xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
          <polyline points="20 6 9 17 4 12"/>
        </svg>
        {{ copied ? 'Copié !' : 'Copier' }}
      </button>
    </div>
    <pre class="p-4 overflow-x-auto text-sm font-mono text-[#e6edf3] leading-relaxed"><code>{{ code }}</code></pre>
  </div>
</template>
