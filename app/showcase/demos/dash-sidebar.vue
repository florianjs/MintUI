<template>
  <div class="space-y-6">
    <div>
      <p
        class="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3"
      >
        Default
      </p>
      <div class="rounded-lg border overflow-hidden h-64 flex">
        <UiDashSidebar>
          <div class="flex h-14 items-center border-b border-border px-4">
            <span class="font-bold text-sm">MintUI</span>
          </div>
          <nav class="flex-1 space-y-1 p-3">
            <a
              href="#"
              class="flex items-center rounded-md px-3 py-2 text-sm font-medium bg-primary/10 text-primary"
              >Dashboard</a
            >
            <a
              href="#"
              class="flex items-center rounded-md px-3 py-2 text-sm font-medium text-foreground/70 hover:bg-muted transition-colors"
              >Analytics</a
            >
            <a
              href="#"
              class="flex items-center rounded-md px-3 py-2 text-sm font-medium text-foreground/70 hover:bg-muted transition-colors"
              >Projects</a
            >
            <a
              href="#"
              class="flex items-center rounded-md px-3 py-2 text-sm font-medium text-foreground/70 hover:bg-muted transition-colors"
              >Settings</a
            >
          </nav>
        </UiDashSidebar>
        <div class="flex-1 bg-muted/20 p-4">
          <div class="text-sm text-muted-foreground">Main content area</div>
        </div>
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
          <p class="text-xs text-muted-foreground mb-2">With icons</p>
          <div class="rounded-lg border overflow-hidden h-64 flex">
            <UiDashSidebar>
              <div class="flex h-14 items-center border-b border-border px-4">
                <span class="font-bold text-sm">App</span>
              </div>
              <nav class="flex-1 space-y-1 p-3">
                <a
                  href="#"
                  class="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium bg-primary/10 text-primary"
                >
                  <span>📊</span> Dashboard
                </a>
                <a
                  href="#"
                  class="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-foreground/70 hover:bg-muted transition-colors"
                >
                  <span>📈</span> Analytics
                </a>
                <a
                  href="#"
                  class="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-foreground/70 hover:bg-muted transition-colors"
                >
                  <span>👥</span> Users
                </a>
                <a
                  href="#"
                  class="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-foreground/70 hover:bg-muted transition-colors"
                >
                  <span>⚙️</span> Settings
                </a>
              </nav>
            </UiDashSidebar>
            <div class="flex-1 bg-muted/20 p-4">
              <div class="text-sm text-muted-foreground">
                Content with icons
              </div>
            </div>
          </div>
        </div>
        <div>
          <p class="text-xs text-muted-foreground mb-2">With sections</p>
          <div class="rounded-lg border overflow-hidden h-64 flex">
            <UiDashSidebar>
              <div class="flex h-14 items-center border-b border-border px-4">
                <span class="font-bold text-sm">Workspace</span>
              </div>
              <nav class="flex-1 p-3">
                <div
                  class="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2 px-3"
                >
                  Main
                </div>
                <a
                  href="#"
                  class="flex items-center rounded-md px-3 py-2 text-sm font-medium bg-primary/10 text-primary"
                  >Overview</a
                >
                <a
                  href="#"
                  class="flex items-center rounded-md px-3 py-2 text-sm font-medium text-foreground/70 hover:bg-muted transition-colors"
                  >Projects</a
                >
                <div
                  class="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2 mt-4 px-3"
                >
                  Account
                </div>
                <a
                  href="#"
                  class="flex items-center rounded-md px-3 py-2 text-sm font-medium text-foreground/70 hover:bg-muted transition-colors"
                  >Profile</a
                >
                <a
                  href="#"
                  class="flex items-center rounded-md px-3 py-2 text-sm font-medium text-foreground/70 hover:bg-muted transition-colors"
                  >Settings</a
                >
              </nav>
            </UiDashSidebar>
            <div class="flex-1 bg-muted/20 p-4">
              <div class="text-sm text-muted-foreground">
                Content with sections
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
