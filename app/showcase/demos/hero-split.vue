<template>
  <div class="rounded-lg border overflow-hidden scale-[0.85] origin-top">
    <UiHeroSplit title="Build Beautiful UIs">
      <template #badge>
        <UiBadge variant="secondary">New</UiBadge>
      </template>
      <template #subtitle>
        Create stunning interfaces with our modern component library
      </template>
      <template #actions>
        <UiButton>Get Started</UiButton>
        <UiButton variant="outline">Learn More</UiButton>
      </template>
      <template #image>
        <div class="bg-muted aspect-video w-full rounded-lg flex items-center justify-center">
          <span class="text-muted-foreground">Hero Image</span>
        </div>
      </template>
    </UiHeroSplit>
  </div>
</template>
