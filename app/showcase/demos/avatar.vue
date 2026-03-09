<template>
  <div class="space-y-4">
    <div>
      <p class="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">Avec image</p>
      <div class="flex items-center gap-3">
        <UiAvatar src="https://github.com/github.png" alt="GitHub" size="sm" />
        <UiAvatar src="https://github.com/github.png" alt="GitHub" />
        <UiAvatar src="https://github.com/github.png" alt="GitHub" size="lg" />
      </div>
    </div>
    <div>
      <p class="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">Fallback initiales</p>
      <div class="flex items-center gap-3">
        <UiAvatar fallback="FJ" size="sm" />
        <UiAvatar fallback="FJ" />
        <UiAvatar fallback="FJ" size="lg" />
      </div>
    </div>
  </div>
</template>
