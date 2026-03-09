<script setup lang="ts">
import { computed, ref } from 'vue'
import { components, landingPages, componentGroups } from '~/showcase/registry'

definePageMeta({ layout: 'showcase' })

const search = ref('')

const filteredGroups = computed(() => {
  const q = search.value.toLowerCase()
  return componentGroups.map(group => ({
    label: group,
    items: components
      .filter(c => c.group === group)
      .filter(c => !q || c.name.toLowerCase().includes(q) || c.description.toLowerCase().includes(q)),
  })).filter(g => g.items.length > 0)
})

const filteredLandings = computed(() => {
  const q = search.value.toLowerCase()
  return landingPages.filter(p => !q || p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q))
})
</script>

<template>
  <div class="px-8 py-10 max-w-5xl">
    <!-- Hero -->
    <div class="mb-10">
      <h1 class="text-3xl font-bold text-foreground mb-2">
        MintUI Components
      </h1>
      <p class="text-muted-foreground text-lg">
        Composants prêts à l'emploi pour Nuxt 4 + TailwindCSS.
      </p>
    </div>

    <!-- Search -->
    <div class="relative mb-8">
      <svg xmlns="http://www.w3.org/2000/svg" class="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
      </svg>
      <input
        v-model="search"
        type="search"
        placeholder="Rechercher un composant..."
        class="w-full max-w-xs pl-9 pr-4 py-2 text-sm rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
      />
    </div>

    <!-- Component groups -->
    <div class="space-y-10">
      <div v-for="group in filteredGroups" :key="group.label">
        <h2 class="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
          {{ group.label }}
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <NuxtLink
            v-for="item in group.items"
            :key="item.slug"
            :to="`/components/${item.slug}`"
            class="group flex flex-col gap-1 p-4 rounded-xl border border-border bg-background hover:border-primary/50 hover:bg-accent/30 transition-all"
          >
            <span class="font-medium text-foreground group-hover:text-primary transition-colors">{{ item.name }}</span>
            <span class="text-xs text-muted-foreground line-clamp-2">{{ item.description }}</span>
          </NuxtLink>
        </div>
      </div>

      <!-- Landing pages -->
      <div v-if="filteredLandings.length > 0">
        <h2 class="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
          Landing Pages
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <NuxtLink
            v-for="page in filteredLandings"
            :key="page.slug"
            :to="`/landing/${page.slug}`"
            class="group flex flex-col gap-1 p-4 rounded-xl border border-border bg-background hover:border-primary/50 hover:bg-accent/30 transition-all"
          >
            <div class="flex items-center gap-2">
              <span class="font-medium text-foreground group-hover:text-primary transition-colors">{{ page.name }}</span>
              <span class="text-[10px] bg-primary/10 text-primary px-1.5 py-0.5 rounded font-medium">Page</span>
            </div>
            <span class="text-xs text-muted-foreground line-clamp-2">{{ page.description }}</span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
