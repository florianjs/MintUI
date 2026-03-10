<template>
  <div class="space-y-6">
    <div>
      <p
        class="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3"
      >
        Default
      </p>
      <UiSwitch label="Enable notifications" />
    </div>

    <div>
      <p
        class="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3"
      >
        Variants
      </p>
      <div class="space-y-4">
        <UiSwitch label="Dark mode" />
        <UiSwitch label="Disabled" :disabled="true" />
      </div>
    </div>
  </div>
</template>
