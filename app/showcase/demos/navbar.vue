<template>
  <div class="space-y-6">
    <div>
      <p
        class="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3"
      >
        Default
      </p>
      <div class="rounded-lg border overflow-hidden">
        <UiNavbar :sticky="false">
          <span class="font-bold text-lg">MintUI</span>
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
          <UiButton size="sm">Get Started</UiButton>
        </UiNavbar>
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
          <p class="text-xs text-muted-foreground mb-2">With sticky behavior</p>
          <div class="rounded-lg border overflow-hidden">
            <UiNavbar :sticky="true">
              <span class="font-bold">MintUI</span>
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
              <UiButton size="sm">Contact</UiButton>
            </UiNavbar>
          </div>
        </div>
        <div>
          <p class="text-xs text-muted-foreground mb-2">Minimal</p>
          <div class="rounded-lg border overflow-hidden">
            <UiNavbar :sticky="false">
              <span class="font-bold">Brand</span>
              <UiButton size="sm" variant="ghost">Menu</UiButton>
            </UiNavbar>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
