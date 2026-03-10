<template>
  <div class="space-y-6">
    <div>
      <p
        class="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3"
      >
        Default
      </p>
      <div class="rounded-lg border overflow-hidden">
        <UiNavbarCentered>
          <template #left>
            <span class="font-bold text-lg">MintUI</span>
          </template>
          <template #center>
            <nav class="flex items-center gap-6 text-sm">
              <a
                href="#"
                class="text-foreground/80 hover:text-foreground transition-colors"
                >Products</a
              >
              <a
                href="#"
                class="text-foreground/80 hover:text-foreground transition-colors"
                >Docs</a
              >
              <a
                href="#"
                class="text-foreground/80 hover:text-foreground transition-colors"
                >Pricing</a
              >
            </nav>
          </template>
          <template #right>
            <UiButton size="sm">Get Started</UiButton>
          </template>
        </UiNavbarCentered>
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
          <p class="text-xs text-muted-foreground mb-2">With avatar</p>
          <div class="rounded-lg border overflow-hidden">
            <UiNavbarCentered>
              <template #left>
                <span class="font-bold">App</span>
              </template>
              <template #center>
                <nav class="flex items-center gap-4 text-sm">
                  <a
                    href="#"
                    class="text-foreground/80 hover:text-foreground transition-colors"
                    >Dashboard</a
                  >
                  <a
                    href="#"
                    class="text-foreground/80 hover:text-foreground transition-colors"
                    >Settings</a
                  >
                </nav>
              </template>
              <template #right>
                <UiAvatar fallback="JD" size="sm" />
              </template>
            </UiNavbarCentered>
          </div>
        </div>
        <div>
          <p class="text-xs text-muted-foreground mb-2">Minimal links</p>
          <div class="rounded-lg border overflow-hidden">
            <UiNavbarCentered>
              <template #left>
                <span class="font-bold">Brand</span>
              </template>
              <template #center>
                <nav class="flex items-center gap-6 text-sm">
                  <a
                    href="#"
                    class="text-foreground/80 hover:text-foreground transition-colors"
                    >Features</a
                  >
                  <a
                    href="#"
                    class="text-foreground/80 hover:text-foreground transition-colors"
                    >Pricing</a
                  >
                </nav>
              </template>
              <template #right>
                <UiButton size="sm" variant="ghost">Sign in</UiButton>
              </template>
            </UiNavbarCentered>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
