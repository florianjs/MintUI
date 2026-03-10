<script setup lang="ts">
import { computed, defineAsyncComponent } from 'vue'

definePageMeta({ layout: false })

const route = useRoute()
const slug = computed(() => route.params.slug as string)
const isDark = computed(() => route.query.dark === '1')

const demoModules = import.meta.glob('~/showcase/demos/*.vue')

const demoComponent = computed(() => {
  const key = Object.keys(demoModules).find(k => k.endsWith(`/${slug.value}.vue`))
  if (!key) return null
  return defineAsyncComponent(demoModules[key] as any)
})
</script>

<template>
  <div :class="isDark ? 'dark' : ''" class="bg-background text-foreground min-h-screen p-8">
    <component :is="demoComponent" v-if="demoComponent" />
    <div v-else class="text-muted-foreground text-sm">Démo non disponible</div>
  </div>
</template>
