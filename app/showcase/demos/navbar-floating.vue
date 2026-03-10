<template>
  <div class="relative h-40 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg overflow-hidden flex items-start justify-center pt-6">
    <UiNavbarFloating :sticky="false" class="w-full mx-6">
      <span class="font-bold">MintUI</span>
      <nav class="flex items-center gap-4 text-sm">
        <a href="#" class="text-foreground/80 hover:text-foreground transition-colors">Products</a>
        <a href="#" class="text-foreground/80 hover:text-foreground transition-colors">Docs</a>
      </nav>
      <UiButton size="sm">Sign in</UiButton>
    </UiNavbarFloating>
  </div>
</template>
