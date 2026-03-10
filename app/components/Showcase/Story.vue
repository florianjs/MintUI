<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Story } from '~/showcase/registry'

const props = defineProps<{
  story: Story
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component?: any
  isDark?: boolean
}>()

const hasLivePreview = computed(() => !!props.component && props.story.props !== undefined)

const showCode = ref(false)
</script>

<template>
  <div class="rounded-xl border border-border overflow-hidden">
    <!-- Story header bar -->
    <div class="flex items-center justify-between px-4 py-2.5 bg-muted/20 border-b border-border">
      <span class="text-sm font-medium text-foreground">{{ story.title }}</span>
      <button
        @click="showCode = !showCode"
        :class="[
          'flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-md transition-colors',
          showCode
            ? 'bg-primary text-primary-foreground'
            : 'text-muted-foreground hover:text-foreground hover:bg-muted'
        ]"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
        Code
      </button>
    </div>

    <!-- Live preview -->
    <div
      v-if="hasLivePreview"
      :class="[isDark ? 'dark' : '']"
      class="bg-background p-6 flex items-center justify-center min-h-[100px]"
    >
      <component :is="component" v-bind="story.props">{{ story.slot }}</component>
    </div>

    <!-- Code block -->
    <div v-if="showCode" :class="[hasLivePreview ? 'border-t border-border' : '']">
      <ShowcaseCodeBlock :code="story.code" />
    </div>
  </div>
</template>
