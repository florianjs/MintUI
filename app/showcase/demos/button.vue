<template>
  <div class="space-y-6">
    <div>
      <p class="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">Default</p>
      <UiButton>Default</UiButton>
    </div>
    
    <div>
      <p class="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">Variants</p>
      <div class="space-y-6">
        <div>
          <p class="text-xs text-muted-foreground mb-2">Styles</p>
          <div class="flex flex-wrap gap-3">
            <UiButton variant="secondary">Secondary</UiButton>
            <UiButton variant="destructive">Destructive</UiButton>
            <UiButton variant="outline">Outline</UiButton>
            <UiButton variant="ghost">Ghost</UiButton>
            <UiButton variant="soft">Soft</UiButton>
            <UiButton variant="gradient">Gradient</UiButton>
            <UiButton variant="elevated">Elevated</UiButton>
            <UiButton variant="positive">Positive</UiButton>
          </div>
        </div>
    <div>
      <p class="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">Tailles</p>
      <div class="flex flex-wrap items-center gap-3">
        <UiButton size="sm">Small</UiButton>
        <UiButton>Default</UiButton>
        <UiButton size="lg">Large</UiButton>
      </div>
    </div>
    <div>
      <p class="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">États</p>
      <div class="flex flex-wrap gap-3">
        <UiButton :loading="true">Loading</UiButton>
        <UiButton :state="successState" @click="triggerSuccess">Click → Success</UiButton>
        <UiButton :disabled="true">Disabled</UiButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const successState = ref<'idle' | 'success'>('idle')
function triggerSuccess() {
  successState.value = 'success'
  setTimeout(() => successState.value = 'idle', 2000)
}
</script>
