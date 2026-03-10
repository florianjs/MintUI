<template>
  <div class="rounded-lg border overflow-hidden h-64 flex">
    <UiDashSidebar>
      <div class="flex h-14 items-center border-b border-border px-4">
        <span class="font-bold text-sm">MintUI</span>
      </div>
      <nav class="flex-1 space-y-1 p-3">
        <a href="#" class="flex items-center rounded-md px-3 py-2 text-sm font-medium bg-primary/10 text-primary">Dashboard</a>
        <a href="#" class="flex items-center rounded-md px-3 py-2 text-sm font-medium text-foreground/70 hover:bg-muted transition-colors">Analytics</a>
        <a href="#" class="flex items-center rounded-md px-3 py-2 text-sm font-medium text-foreground/70 hover:bg-muted transition-colors">Projects</a>
        <a href="#" class="flex items-center rounded-md px-3 py-2 text-sm font-medium text-foreground/70 hover:bg-muted transition-colors">Settings</a>
      </nav>
    </UiDashSidebar>
    <div class="flex-1 bg-muted/20 p-4">
      <div class="text-sm text-muted-foreground">Main content area</div>
    </div>
  </div>
</template>
