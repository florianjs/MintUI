<template>
  <div class="rounded-lg border overflow-hidden">
    <UiNavbar :sticky="false">
      <span class="font-bold text-lg">MintUI</span>
      <nav class="flex items-center gap-6 text-sm">
        <a href="#" class="text-foreground/80 hover:text-foreground transition-colors">Products</a>
        <a href="#" class="text-foreground/80 hover:text-foreground transition-colors">Docs</a>
        <a href="#" class="text-foreground/80 hover:text-foreground transition-colors">Pricing</a>
      </nav>
      <UiButton size="sm">Get Started</UiButton>
    </UiNavbar>
  </div>
</template>
