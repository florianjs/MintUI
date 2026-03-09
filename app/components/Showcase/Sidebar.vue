<script setup lang="ts">
import { useLocalStorage } from '@vueuse/core'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { components, landingPages, componentGroups } from '~/showcase/registry'

const isOpen = defineModel<boolean>('open', { default: true })
const isPinned = useLocalStorage('showcase-sidebar-pinned', true)

const route = useRoute()

const navGroups = computed(() => {
  return componentGroups.map(group => ({
    label: group,
    items: components.filter(c => c.group === group),
  })).filter(g => g.items.length > 0)
})

function isActive(slug: string, type: 'component' | 'landing') {
  if (type === 'component') return route.path === `/components/${slug}`
  return route.path === `/landing/${slug}`
}

function togglePin() {
  isPinned.value = !isPinned.value
}
</script>

<template>
  <!-- Sidebar -->
  <aside
    :class="[
      'flex flex-col shrink-0 border-r border-border bg-background overflow-hidden transition-all duration-300 ease-in-out',
      isOpen ? 'w-60' : 'w-0'
    ]"
  >
    <div class="flex flex-col h-full min-w-[240px]">
      <!-- Logo header -->
      <div class="flex items-center justify-between px-4 h-14 border-b border-border shrink-0">
        <NuxtLink to="/" class="flex items-center gap-2 font-bold text-foreground hover:text-primary transition-colors">
          <div class="h-6 w-6 rounded-md bg-primary flex items-center justify-center">
            <span class="text-primary-foreground text-xs font-black">M</span>
          </div>
          <span class="text-sm">MintUI</span>
        </NuxtLink>
        <button
          @click="togglePin"
          :title="isPinned ? 'Désépingler' : 'Épingler'"
          :class="[
            'h-6 w-6 rounded flex items-center justify-center transition-colors',
            isPinned ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
          ]"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M16 12V4h1V2H7v2h1v8l-2 2v2h5.2v6h1.6v-6H18v-2l-2-2z"/>
          </svg>
        </button>
      </div>

      <!-- Nav -->
      <nav class="flex-1 overflow-y-auto py-4 px-3 space-y-6">
        <!-- Component groups -->
        <div v-for="group in navGroups" :key="group.label">
          <p class="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider px-2 mb-1">
            {{ group.label }}
          </p>
          <ul class="space-y-0.5">
            <li v-for="item in group.items" :key="item.slug">
              <NuxtLink
                :to="`/components/${item.slug}`"
                :class="[
                  'flex items-center gap-2 px-2 py-1.5 rounded-md text-sm transition-colors',
                  isActive(item.slug, 'component')
                    ? 'bg-primary text-primary-foreground font-medium'
                    : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                ]"
              >
                {{ item.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Landing pages -->
        <div>
          <p class="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider px-2 mb-1">
            Landing Pages
          </p>
          <ul class="space-y-0.5">
            <li v-for="page in landingPages" :key="page.slug">
              <NuxtLink
                :to="`/landing/${page.slug}`"
                :class="[
                  'flex items-center gap-2 px-2 py-1.5 rounded-md text-sm transition-colors',
                  isActive(page.slug, 'landing')
                    ? 'bg-primary text-primary-foreground font-medium'
                    : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                ]"
              >
                {{ page.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </nav>

      <!-- Footer -->
      <div class="px-4 py-3 border-t border-border shrink-0">
        <p class="text-[11px] text-muted-foreground">v0.1.0 · MIT License</p>
      </div>
    </div>
  </aside>
</template>
