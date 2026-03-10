<template>
  <div class="space-y-6">
    <div>
      <p
        class="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3"
      >
        Default
      </p>
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
            <div
              class="bg-muted aspect-video w-full rounded-lg flex items-center justify-center"
            >
              <span class="text-muted-foreground">Hero Image</span>
            </div>
          </template>
        </UiHeroSplit>
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
          <p class="text-xs text-muted-foreground mb-2">
            With illustration placeholder
          </p>
          <div
            class="rounded-lg border overflow-hidden scale-[0.85] origin-top"
          >
            <UiHeroSplit title="Collaborate Better">
              <template #subtitle>
                Work together with your team in real-time
              </template>
              <template #actions>
                <UiButton>Start Free Trial</UiButton>
                <UiButton variant="ghost">Watch Demo</UiButton>
              </template>
              <template #image>
                <div
                  class="bg-gradient-to-br from-primary/20 to-secondary/20 aspect-video w-full rounded-lg flex items-center justify-center"
                >
                  <span class="text-4xl">🎨</span>
                </div>
              </template>
            </UiHeroSplit>
          </div>
        </div>
        <div>
          <p class="text-xs text-muted-foreground mb-2">Product showcase</p>
          <div
            class="rounded-lg border overflow-hidden scale-[0.85] origin-top"
          >
            <UiHeroSplit title="Powerful Analytics">
              <template #badge>
                <UiBadge>Pro</UiBadge>
              </template>
              <template #subtitle>
                Get insights that help you grow your business faster
              </template>
              <template #actions>
                <UiButton>Try Now</UiButton>
              </template>
              <template #image>
                <div
                  class="bg-card aspect-video w-full rounded-lg border flex items-center justify-center"
                >
                  <div class="grid grid-cols-3 gap-2 p-4">
                    <div class="h-8 w-12 bg-primary/20 rounded"></div>
                    <div class="h-8 w-12 bg-primary/30 rounded"></div>
                    <div class="h-8 w-12 bg-primary/40 rounded"></div>
                  </div>
                </div>
              </template>
            </UiHeroSplit>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
