<script setup lang="ts">
import { computed, ref, watchEffect } from 'vue'
import { components } from '~/showcase/registry'

definePageMeta({ layout: 'showcase' })

const route = useRoute()
const slug = computed(() => route.params.slug as string)

const entry = computed(() => components.find(c => c.slug === slug.value))

const demoRaws = import.meta.glob('~/showcase/demos/*.vue', { query: '?raw', import: 'default' })

const rawCode = ref('')
watchEffect(async () => {
  const key = Object.keys(demoRaws).find(k => k.endsWith(`/${slug.value}.vue`))
  if (key) {
    rawCode.value = (await demoRaws[key]()) as string
  } else {
    rawCode.value = ''
  }
})
</script>

<template>
  <div class="px-8 py-10">
    <div v-if="entry">
      <ShowcaseComponentViewer
        :entry="entry"
        :raw-code="rawCode"
      />
    </div>
    <div v-else class="text-muted-foreground">
      Composant « {{ slug }} » introuvable.
    </div>
  </div>
</template>
