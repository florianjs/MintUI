<template>
  <div class="space-y-6">
    <div>
      <p
        class="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3"
      >
        Default
      </p>
      <div
        class="relative h-40 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg overflow-hidden flex items-start justify-center pt-6"
      >
        <UiNavbarFloating :sticky="false" class="w-full mx-6">
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
          </nav>
          <UiButton size="sm">Sign in</UiButton>
        </UiNavbarFloating>
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
          <p class="text-xs text-muted-foreground mb-2">Dark background</p>
          <div
            class="relative h-32 bg-gradient-to-r from-slate-900 to-slate-800 rounded-lg overflow-hidden flex items-start justify-center pt-6"
          >
            <UiNavbarFloating :sticky="false" class="w-full mx-6">
              <span class="font-bold text-white">Dark Mode</span>
              <nav class="flex items-center gap-4 text-sm">
                <a
                  href="#"
                  class="text-white/80 hover:text-white transition-colors"
                  >Features</a
                >
                <a
                  href="#"
                  class="text-white/80 hover:text-white transition-colors"
                  >Pricing</a
                >
              </nav>
              <UiButton
                size="sm"
                variant="outline"
                class="border-white/20 text-white"
                >Get Started</UiButton
              >
            </UiNavbarFloating>
          </div>
        </div>
        <div>
          <p class="text-xs text-muted-foreground mb-2">With search</p>
          <div
            class="relative h-32 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg overflow-hidden flex items-start justify-center pt-6"
          >
            <UiNavbarFloating :sticky="false" class="w-full mx-6">
              <span class="font-bold">Search App</span>
              <div class="flex-1 max-w-md mx-4">
                <div
                  class="bg-background/50 rounded-md px-3 py-1.5 text-sm text-muted-foreground border border-border/50"
                >
                  Search...
                </div>
              </div>
              <UiAvatar fallback="JD" size="sm" />
            </UiNavbarFloating>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
