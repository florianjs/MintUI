<template>
  <div class="space-y-6">
    <div>
      <p
        class="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3"
      >
        Default
      </p>
      <div class="rounded-lg border overflow-hidden scale-[0.85] origin-top">
        <UiHeroGlow title="Build Beautiful UIs">
          <template #badge>
            <UiBadge variant="secondary">New</UiBadge>
          </template>
          <template #subtitle>
            Create stunning interfaces with our modern component library
          </template>
          <template #actions>
            <UiButton>Get Started</UiButton>
            <UiButton variant="outline" class="text-white border-white/20"
              >Learn More</UiButton
            >
          </template>
        </UiHeroGlow>
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
          <p class="text-xs text-muted-foreground mb-2">Minimal</p>
          <div
            class="rounded-lg border overflow-hidden scale-[0.85] origin-top"
          >
            <UiHeroGlow title="Welcome Back">
              <template #subtitle>
                Sign in to continue to your dashboard
              </template>
              <template #actions>
                <UiButton>Sign In</UiButton>
              </template>
            </UiHeroGlow>
          </div>
        </div>
        <div>
          <p class="text-xs text-muted-foreground mb-2">With announcement</p>
          <div
            class="rounded-lg border overflow-hidden scale-[0.85] origin-top"
          >
            <UiHeroGlow title="Big News!">
              <template #badge>
                <UiBadge>Announcement</UiBadge>
              </template>
              <template #subtitle>
                We just launched something amazing for you
              </template>
              <template #actions>
                <UiButton>Read More</UiButton>
                <UiButton variant="outline" class="text-white border-white/20"
                  >Dismiss</UiButton
                >
              </template>
            </UiHeroGlow>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
