<script setup lang="ts">
import { ref, computed, resolveComponent } from 'vue'
import type { ControlDef } from '~/showcase/registry'

const props = defineProps<{
  componentName: string
  controls: ControlDef[]
  isDark?: boolean
}>()

const values = ref<Record<string, any>>(
  Object.fromEntries(props.controls.map(c => [c.prop, c.default]))
)

const component = resolveComponent(props.componentName)

const componentProps = computed(() =>
  Object.fromEntries(
    props.controls
      .filter(c => !c.isSlot)
      .map(c => [c.prop, values.value[c.prop]])
  )
)

const slotControl = computed(() => props.controls.find(c => c.isSlot))
const slotText = computed(() => slotControl.value ? String(values.value[slotControl.value.prop]) : '')

const generatedCode = computed(() => {
  const parts = props.controls
    .filter(c => !c.isSlot && values.value[c.prop] !== c.default)
    .map(c => {
      const val = values.value[c.prop]
      if (typeof val === 'boolean') return `:${c.prop}="${val}"`
      if (typeof val === 'number') return `:${c.prop}="${val}"`
      return `${c.prop}="${val}"`
    })
  const tag = props.componentName
  const propsStr = parts.length ? ' ' + parts.join(' ') : ''
  if (slotControl.value) {
    return `<${tag}${propsStr}>${slotText.value}</${tag}>`
  }
  return `<${tag}${propsStr} />`
})

const showCode = ref(false)
</script>

<template>
  <div class="rounded-xl border border-border overflow-hidden">
    <!-- Preview area -->
    <div
      :class="[isDark ? 'dark' : '']"
      class="bg-background min-h-[140px] flex items-center justify-center p-8"
    >
      <component :is="component" v-bind="componentProps">{{ slotText }}</component>
    </div>

    <!-- Controls table -->
    <div class="border-t border-border bg-muted/20 divide-y divide-border/60">
      <div
        v-for="ctrl in controls"
        :key="ctrl.prop"
        class="flex items-center gap-4 px-4 py-2.5"
      >
        <span class="font-mono text-xs text-foreground w-24 shrink-0">{{ ctrl.prop }}</span>
        <span class="text-xs text-muted-foreground flex-1 hidden sm:block">{{ ctrl.type }}</span>

        <!-- Select -->
        <select
          v-if="ctrl.type === 'select'"
          v-model="values[ctrl.prop]"
          class="text-xs border border-border rounded-md px-2 py-1.5 bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
        >
          <option v-for="opt in ctrl.options" :key="opt" :value="opt">{{ opt }}</option>
        </select>

        <!-- Boolean -->
        <input
          v-else-if="ctrl.type === 'boolean'"
          type="checkbox"
          v-model="values[ctrl.prop]"
          class="h-4 w-4 accent-primary cursor-pointer"
        />

        <!-- Text -->
        <input
          v-else-if="ctrl.type === 'text'"
          type="text"
          v-model="values[ctrl.prop]"
          class="text-xs border border-border rounded-md px-2 py-1.5 bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-primary w-48"
        />

        <!-- Number -->
        <input
          v-else-if="ctrl.type === 'number'"
          type="number"
          v-model.number="values[ctrl.prop]"
          class="text-xs border border-border rounded-md px-2 py-1.5 bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-primary w-24"
        />
      </div>
    </div>

    <!-- Code toggle bar -->
    <div class="border-t border-border flex items-center bg-muted/10">
      <button
        @click="showCode = !showCode"
        class="flex items-center gap-1.5 px-4 py-2.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
        {{ showCode ? 'Masquer le code' : 'Voir le code' }}
      </button>
    </div>

    <!-- Code block -->
    <div v-if="showCode" class="border-t border-border">
      <ShowcaseCodeBlock :code="generatedCode" />
    </div>
  </div>
</template>
