<template>
  <div class="space-y-6">
    <div>
      <p
        class="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3"
      >
        Default
      </p>
      <div class="relative h-32 rounded-lg overflow-hidden bg-muted/30">
        <UiNavbarMorph>
          <span class="font-bold">MintUI</span>
          <nav class="flex items-center gap-4 text-sm">
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
          <UiButton size="sm">Get Started</UiButton>
        </UiNavbarMorph>
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
          <p class="text-xs text-muted-foreground mb-2">Gradient background</p>
          <div
            class="relative h-32 rounded-lg overflow-hidden bg-gradient-to-r from-primary/20 via-secondary/10 to-primary/20"
          >
            <UiNavbarMorph>
              <span class="font-bold">Gradient</span>
              <nav class="flex items-center gap-4 text-sm">
                <a
                  href="#"
                  class="text-foreground/80 hover:text-foreground transition-colors"
                  >Home</a
                >
                <a
                  href="#"
                  class="text-foreground/80 hover:text-foreground transition-colors"
                  >About</a
                >
              </nav>
              <UiButton size="sm" variant="secondary">Contact</UiButton>
            </UiNavbarMorph>
          </div>
        </div>
        <div>
          <p class="text-xs text-muted-foreground mb-2">Minimal</p>
          <div class="relative h-32 rounded-lg overflow-hidden bg-card">
            <UiNavbarMorph>
              <span class="font-bold">Minimal</span>
              <nav class="flex items-center gap-4 text-sm">
                <a
                  href="#"
                  class="text-foreground/80 hover:text-foreground transition-colors"
                  >Features</a
                >
              </nav>
              <UiButton size="sm" variant="outline">Login</UiButton>
            </UiNavbarMorph>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
