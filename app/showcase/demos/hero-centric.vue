<template>
  <div class="space-y-6">
    <div>
      <p
        class="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3"
      >
        Default
      </p>
      <div class="rounded-lg border overflow-hidden scale-[0.85] origin-top">
        <UiHeroCentric title="Build Beautiful UIs">
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
            <div
              class="bg-muted aspect-video w-full flex items-center justify-center"
            >
              <span class="text-muted-foreground">Hero Image</span>
            </div>
          </template>
        </UiHeroCentric>
      </div>
    </div>

    <div>
      <p
        class="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3"
      >
        Variants
      </p>
      <div class="space-y-4">
        <div>
          <p class="text-xs text-muted-foreground mb-2">Minimal (no image)</p>
          <div
            class="rounded-lg border overflow-hidden scale-[0.85] origin-top"
          >
            <UiHeroCentric title="Simple Hero">
              <template #subtitle>
                A clean hero section without an image
              </template>
              <template #actions>
                <UiButton>Start Now</UiButton>
              </template>
            </UiHeroCentric>
          </div>
        </div>
        <div>
          <p class="text-xs text-muted-foreground mb-2">With gradient badge</p>
          <div
            class="rounded-lg border overflow-hidden scale-[0.85] origin-top"
          >
            <UiHeroCentric title="Premium Features">
              <template #badge>
                <UiBadge>Pro</UiBadge>
              </template>
              <template #subtitle>
                Unlock advanced capabilities for your team
              </template>
              <template #actions>
                <UiButton>Upgrade</UiButton>
                <UiButton variant="ghost">Compare Plans</UiButton>
              </template>
            </UiHeroCentric>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
