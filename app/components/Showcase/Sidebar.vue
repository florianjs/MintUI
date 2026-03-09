<script setup lang="ts">
import { useLocalStorage } from '@vueuse/core'
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { components, landingPages, componentGroups } from '~/showcase/registry'

const isOpen = defineModel<boolean>('open', { default: true })
const isPinned = useLocalStorage('showcase-sidebar-pinned', true)
const isHovered = ref(false)
const searchQuery = ref('')

const route = useRoute()

const isExpanded = computed(() => isPinned.value || isHovered.value)

const filteredNavGroups = computed(() => {
  const query = searchQuery.value.toLowerCase().trim()
  if (!query) {
    return componentGroups.map(group => ({
      label: group,
      items: components.filter(c => c.group === group),
    })).filter(g => g.items.length > 0)
  }
  return componentGroups.map(group => ({
    label: group,
    items: components.filter(c => c.group === group && (
      c.name.toLowerCase().includes(query) || c.description?.toLowerCase().includes(query)
    )),
  })).filter(g => g.items.length > 0)
})

const filteredLandingPages = computed(() => {
  const query = searchQuery.value.toLowerCase().trim()
  if (!query) return landingPages
  return landingPages.filter(p => p.name.toLowerCase().includes(query))
})

function isActive(slug: string, type: 'component' | 'landing') {
  if (type === 'component') return route.path === `/components/${slug}`
  return route.path === `/landing/${slug}`
}

function togglePin() {
  isPinned.value = !isPinned.value
}

function handleMouseEnter() {
  if (!isPinned.value) {
    isHovered.value = true
  }
}

function handleMouseLeave() {
  isHovered.value = false
}
</script>

<template>
  <!-- Sidebar -->
  <aside
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    :class="[
      'flex flex-col border-r border-border bg-background overflow-hidden transition-all duration-300 ease-in-out',
      isPinned ? 'shrink-0 relative' : 'fixed left-0 top-0 h-full z-50',
      isPinned ? (isOpen ? 'w-60' : 'w-0') : (isHovered ? 'w-60' : 'w-2')
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

      <!-- Search -->
      <div class="px-3 py-2 border-b border-border shrink-0">
        <div class="relative">
          <svg xmlns="http://www.w3.org/2000/svg" class="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="8"/>
            <path d="M21 21l-4.35-4.35"/>
          </svg>
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Rechercher..."
            class="w-full h-8 pl-8 pr-2 text-sm bg-muted border border-input rounded-md text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          />
        </div>
      </div>

      <!-- Nav -->
      <nav class="flex-1 overflow-y-auto py-4 px-3 space-y-6">
        <!-- Component groups -->
        <div v-for="group in filteredNavGroups" :key="group.label">
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
        <div v-if="filteredLandingPages.length > 0">
          <p class="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider px-2 mb-1">
            Landing Pages
          </p>
          <ul class="space-y-0.5">
            <li v-for="page in filteredLandingPages" :key="page.slug">
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
