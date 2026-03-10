<template>
  <div class="space-y-6">
    <div>
      <p
        class="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3"
      >
        Default
      </p>
      <UiBadge>Default</UiBadge>
    </div>
    <div>
      <p
        class="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3"
      >
        Variants
      </p>
      <div class="flex flex-wrap gap-3">
        <UiBadge variant="secondary">Secondary</UiBadge>
        <UiBadge variant="destructive">Destructive</UiBadge>
        <UiBadge variant="outline">Outline</UiBadge>
      </div>
    </div>
  </div>
</template>
