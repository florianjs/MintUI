<template>
  <div class="space-y-6">
    <div>
      <p
        class="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3"
      >
        Default
      </p>
      <UiSeparator />
    </div>

    <div>
      <p
        class="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3"
      >
        Variants
      </p>
      <div class="space-y-4">
        <div>
          <p class="text-xs text-muted-foreground mb-2">Vertical</p>
          <div class="flex h-8 items-center gap-4">
            <span class="text-sm">Gauche</span>
            <UiSeparator orientation="vertical" />
            <span class="text-sm">Droite</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
